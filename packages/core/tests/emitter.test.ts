import { describe, expect, it } from 'vitest';
import { heredocBody, shellSingleQuote } from '../src/emitter/escape.js';
import { getPm, renderCreateCommand } from '../src/emitter/pm.js';
import { EmitterError, createRegistry, emitCommand } from '../src/index.js';
import type { ModuleManifest, Plan } from '../src/index.js';
import { allFixtures, fixtureVite } from './fixtures.js';

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

  it('uses yarn install syntax when packageManager is yarn', () => {
    const result = emitCommand(plan({ packageManager: 'yarn', modules: ['zustand'] }), registry);
    expect(result.script).toContain('yarn add zustand@');
  });

  it('renders each setup step kind into the script', () => {
    const withSteps: ModuleManifest = {
      ...fixtureVite,
      id: 'multistep',
      category: 'misc',
      framework: undefined,
      appliesTo: ['vite'],
      setup: [
        { kind: 'writeFile', path: 'nested/a.json', content: '{"a":1}', ifMissing: true },
        { kind: 'patchJson', path: 'package.json', patch: { name: '{name}' } },
        { kind: 'appendScript', name: 'dev', script: '{pm} run start' },
        { kind: 'envVar', key: 'API_URL', example: 'https://api.example.com' },
        { kind: 'envVar', key: 'BLANK' },
        { kind: 'shell', command: 'echo {name} via {pm}', when: 'postInstall' },
        { kind: 'shell', command: 'echo pre', when: 'preInstall' },
      ],
    };
    const reg = createRegistry([fixtureVite, withSteps]);
    const result = emitCommand(plan({ modules: ['multistep'] }), reg);
    expect(result.script).toContain("mkdir -p 'nested'");
    expect(result.script).toContain("[ -f 'nested/a.json' ] ||");
    expect(result.script).toContain('BB_EOF');
    expect(result.script).toContain('deepMerge');
    expect(result.script).toContain('cur.scripts');
    expect(result.script).toContain('API_URL=https://api.example.com');
    expect(result.script).toContain('BLANK=# set BLANK');
    expect(result.script).toContain('echo my-app via pnpm');
    // preInstall step injected before `cd`
    const lines = result.script.split('\n');
    const preIdx = lines.findIndex((l) => l === 'echo pre');
    const cdIdx = lines.findIndex((l) => l.startsWith('cd '));
    expect(preIdx).toBeGreaterThan(-1);
    expect(preIdx).toBeLessThan(cdIdx);
  });

  it('throws when base framework has no createCommand', () => {
    const noFramework: ModuleManifest = {
      ...fixtureVite,
      id: 'bare',
      framework: undefined,
    };
    const reg = createRegistry([noFramework]);
    expect(() => emitCommand(plan({ base: 'bare' }), reg)).toThrow(EmitterError);
  });
});

describe('escape helpers', () => {
  it('escapes single quotes in shell strings', () => {
    expect(shellSingleQuote("it's")).toBe("'it'\\''s'");
  });

  it('appends trailing newline to heredoc content', () => {
    expect(heredocBody('hi')).toBe('hi\n');
    expect(heredocBody('hi\n')).toBe('hi\n');
  });

  it('rejects heredoc marker collisions', () => {
    expect(() => heredocBody('contains BB_EOF inside')).toThrow();
  });
});

describe('pm helpers', () => {
  it('exposes commands for every supported package manager', () => {
    for (const id of ['pnpm', 'npm', 'yarn', 'bun'] as const) {
      const pm = getPm(id);
      expect(pm.install).toContain(id);
      expect(pm.add([])).toBe('');
      expect(pm.addDev([])).toBe('');
      expect(pm.add([{ name: 'x', version: '1.0.0' }])).toContain('x@1.0.0');
      expect(pm.addDev([{ name: 'x', version: '1.0.0' }])).toContain('x@1.0.0');
      expect(pm.exec('foo')).toMatch(/foo/);
      expect(pm.runScript('build')).toContain('build');
    }
  });

  it('leaves unknown template placeholders intact', () => {
    expect(renderCreateCommand('{pm} create {name} --x={unknown}', { name: 'a', pm: 'pnpm' })).toBe(
      'pnpm create a --x={unknown}',
    );
  });
});
