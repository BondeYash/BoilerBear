import { createRegistry, emitCommand } from '@boilerbear/core';
import type { Plan } from '@boilerbear/core';
import { describe, expect, it } from 'vitest';
import { allManifests, allRecipes } from '../src/index.js';

describe('modules registry', () => {
  it('loads every manifest into the registry', () => {
    const registry = createRegistry(allManifests);
    expect(registry.all.length).toBe(allManifests.length);
    expect(registry.frameworks().length).toBeGreaterThanOrEqual(2);
  });

  it('every recipe compiles to a command', () => {
    const registry = createRegistry(allManifests);
    for (const recipe of allRecipes) {
      const plan: Plan = { ...recipe.template, projectName: 'demo' };
      const result = emitCommand(plan, registry);
      expect(result.command.length).toBeGreaterThan(0);
      expect(result.script).toContain('demo');
    }
  });

  it('exposes Tailwind, shadcn, Vitest, and Biome', () => {
    const registry = createRegistry(allManifests);
    expect(registry.has('tailwindcss')).toBe(true);
    expect(registry.has('shadcn-ui')).toBe(true);
    expect(registry.has('vitest')).toBe(true);
    expect(registry.has('biome')).toBe(true);
  });
});
