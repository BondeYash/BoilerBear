import { describe, expect, it } from 'vitest';
import { EmitterError, createRegistry, emitCommand } from '../src/index.js';
import type { Plan } from '../src/index.js';
import { allFixtures } from './fixtures.js';

const registry = createRegistry(allFixtures);

const plan = (overrides: Partial<Plan> = {}): Plan => ({
  v: 1,
  projectName: 'my-app',
  packageManager: 'pnpm',
  base: 'vite',
  modules: [],
  options: {},
  ...overrides,
});

describe('emitCommand', () => {
  it('emits a single bash -c command for a Vite + Tailwind plan', () => {
    const result = emitCommand(plan({ modules: ['tailwindcss'] }), registry);
    expect(result.command.startsWith("bash -c '")).toBe(true);
    expect(result.script).toContain('pnpm create vite@latest my-app');
    expect(result.script).toContain("cd 'my-app'");
    expect(result.script).toContain('pnpm add -D');
    expect(result.script).toContain('postcss.config.cjs');
    expect(result.moduleOrder).toEqual(['vite', 'tailwindcss']);
    expect(result.resolvedPackages.length).toBeGreaterThan(0);
  });

  it('orders tailwind before shadcn for a valid plan', () => {
    const result = emitCommand(plan({ modules: ['tailwindcss', 'shadcn-ui'] }), registry);
    expect(result.moduleOrder).toEqual(['vite', 'tailwindcss', 'shadcn-ui']);
  });

  it('throws when the plan has unresolved errors', () => {
    expect(() => emitCommand(plan({ modules: ['shadcn-ui'] }), registry)).toThrow(EmitterError);
  });

  it('uses npm install syntax when packageManager is npm', () => {
    const result = emitCommand(plan({ packageManager: 'npm', modules: ['zustand'] }), registry);
    expect(result.script).toContain('npm create vite@latest');
    expect(result.script).toContain('npm install zustand@');
  });

  it('snapshot — Vite + Tailwind + shadcn (pnpm)', () => {
    const result = emitCommand(
      plan({ modules: ['tailwindcss', 'shadcn-ui'], packageManager: 'pnpm' }),
      registry,
    );
    expect(result.script).toMatchSnapshot();
  });

  it('snapshot — Next + Zustand (bun)', () => {
    const result = emitCommand(
      plan({ base: 'next', modules: ['zustand'], packageManager: 'bun' }),
      registry,
    );
    expect(result.script).toMatchSnapshot();
  });
});
