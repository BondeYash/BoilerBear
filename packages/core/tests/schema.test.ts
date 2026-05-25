import { describe, expect, it } from 'vitest';
import { ModuleManifest, Plan } from '../src/index.js';

describe('ModuleManifest', () => {
  it('parses a minimal valid manifest', () => {
    const parsed = ModuleManifest.parse({
      id: 'zustand',
      name: 'Zustand',
      category: 'state',
      description: 'tiny state',
      homepage: 'https://example.com',
      versions: { range: '^5.0.0', min: '5.0.0' },
    });
    expect(parsed.tags).toEqual([]);
    expect(parsed.license).toBe('MIT');
    expect(parsed.packages.deps).toEqual([]);
  });

  it('rejects an id with uppercase letters', () => {
    const result = ModuleManifest.safeParse({
      id: 'Zustand',
      name: 'Zustand',
      category: 'state',
      description: 'x',
      homepage: 'https://example.com',
      versions: { range: '^5.0.0', min: '5.0.0' },
    });
    expect(result.success).toBe(false);
  });

  it('rejects a non-url homepage', () => {
    const result = ModuleManifest.safeParse({
      id: 'zustand',
      name: 'Zustand',
      category: 'state',
      description: 'x',
      homepage: 'not a url',
      versions: { range: '^5.0.0', min: '5.0.0' },
    });
    expect(result.success).toBe(false);
  });

  it('rejects an unknown category', () => {
    const result = ModuleManifest.safeParse({
      id: 'zustand',
      name: 'Zustand',
      category: 'nope',
      description: 'x',
      homepage: 'https://example.com',
      versions: { range: '^5.0.0', min: '5.0.0' },
    });
    expect(result.success).toBe(false);
  });
});

describe('Plan', () => {
  it('parses with defaults', () => {
    const plan = Plan.parse({ projectName: 'my-app', base: 'vite' });
    expect(plan.v).toBe(1);
    expect(plan.packageManager).toBe('pnpm');
    expect(plan.modules).toEqual([]);
    expect(plan.options).toEqual({});
  });

  it('rejects an invalid project name', () => {
    const result = Plan.safeParse({ projectName: 'My App', base: 'vite' });
    expect(result.success).toBe(false);
  });

  it('rejects a name starting with a dot', () => {
    const result = Plan.safeParse({ projectName: '.hidden', base: 'vite' });
    expect(result.success).toBe(false);
  });

  it("defaults language to 'js' when absent", () => {
    const plan = Plan.parse({ projectName: 'my-app', base: 'vite' });
    expect(plan.language).toBe('js');
  });

  it('accepts py + uv', () => {
    const plan = Plan.parse({
      projectName: 'svc',
      base: 'fastapi',
      language: 'py',
      packageManager: 'uv',
    });
    expect(plan.language).toBe('py');
    expect(plan.packageManager).toBe('uv');
  });

  it('rejects py + pnpm via superRefine', () => {
    const result = Plan.safeParse({
      projectName: 'svc',
      base: 'fastapi',
      language: 'py',
      packageManager: 'pnpm',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path).toEqual(['packageManager']);
    }
  });

  it('rejects rust + pip via superRefine', () => {
    const result = Plan.safeParse({
      projectName: 'svc',
      base: 'axum',
      language: 'rust',
      packageManager: 'pip',
    });
    expect(result.success).toBe(false);
  });
});
