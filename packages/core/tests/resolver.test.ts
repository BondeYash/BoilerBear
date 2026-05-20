import { describe, expect, it } from 'vitest';
import {
  CycleError,
  createRegistry,
  detectConflicts,
  recommendAdditions,
  sortModules,
} from '../src/index.js';
import type { ModuleManifest, Plan } from '../src/index.js';
import { allFixtures, fixtureVite } from './fixtures.js';

const baseRegistry = createRegistry(allFixtures);

const planFor = (modules: string[], overrides: Partial<Plan> = {}): Plan => ({
  v: 1,
  projectName: 'my-app',
  packageManager: 'pnpm',
  base: 'vite',
  modules,
  options: {},
  ...overrides,
});

describe('detectConflicts', () => {
  it('flags an unknown module', () => {
    const result = detectConflicts(planFor(['mystery']), baseRegistry);
    expect(result.hasErrors).toBe(true);
    expect(result.warnings[0]?.code).toBe('unknown-module');
  });

  it('flags missing required dependency', () => {
    const result = detectConflicts(planFor(['shadcn-ui']), baseRegistry);
    expect(result.hasErrors).toBe(true);
    expect(result.warnings.some((w) => w.code === 'missing-requirement')).toBe(true);
  });

  it('passes when requirement is also picked', () => {
    const result = detectConflicts(planFor(['tailwindcss', 'shadcn-ui']), baseRegistry);
    expect(result.hasErrors).toBe(false);
  });

  it('flags soft conflict between shadcn and mui', () => {
    const result = detectConflicts(planFor(['tailwindcss', 'shadcn-ui', 'mui']), baseRegistry);
    const conflict = result.warnings.find((w) => w.code === 'conflict');
    expect(conflict?.severity).toBe('warning');
  });

  it('flags base that is not a framework module', () => {
    const result = detectConflicts(planFor([], { base: 'tailwindcss' }), baseRegistry);
    expect(result.hasErrors).toBe(true);
    expect(result.warnings.some((w) => w.code === 'base-not-framework')).toBe(true);
  });

  it('flags framework mismatch', () => {
    const remix: ModuleManifest = {
      ...fixtureVite,
      id: 'remix',
      framework: { template: 'a', createCommand: 'create-remix {name}' },
    };
    const tailwindNextOnly: ModuleManifest = {
      ...allFixtures.find((m) => m.id === 'tailwindcss')!,
      appliesTo: ['next'],
    };
    const reg = createRegistry([fixtureVite, remix, tailwindNextOnly]);
    const result = detectConflicts(planFor(['tailwindcss']), reg);
    expect(result.hasErrors).toBe(true);
    expect(result.warnings.some((w) => w.code === 'framework-mismatch')).toBe(true);
  });
});

describe('sortModules', () => {
  it('orders requires-before-dependents and keeps base first', () => {
    const ordered = sortModules(planFor(['shadcn-ui', 'tailwindcss']), baseRegistry);
    const ids = ordered.map((m) => m.id);
    expect(ids[0]).toBe('vite');
    expect(ids.indexOf('tailwindcss')).toBeLessThan(ids.indexOf('shadcn-ui'));
  });

  it('throws CycleError on circular requires', () => {
    const a: ModuleManifest = { ...fixtureVite, id: 'a', requires: [{ id: 'b' }] };
    const b: ModuleManifest = { ...fixtureVite, id: 'b', requires: [{ id: 'a' }] };
    const reg = createRegistry([fixtureVite, a, b]);
    expect(() => sortModules(planFor(['a', 'b']), reg)).toThrow(CycleError);
  });
});

describe('recommendAdditions', () => {
  it('suggests shadcn when tailwind is picked', () => {
    const suggestions = recommendAdditions(planFor(['tailwindcss']), baseRegistry);
    expect(suggestions.map((s) => s.id)).toContain('shadcn-ui');
  });

  it('skips recommendations already in plan', () => {
    const suggestions = recommendAdditions(planFor(['tailwindcss', 'shadcn-ui']), baseRegistry);
    expect(suggestions.find((s) => s.id === 'shadcn-ui')).toBeUndefined();
  });
});
