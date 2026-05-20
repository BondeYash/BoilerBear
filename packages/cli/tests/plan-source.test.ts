import { writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { encodePlan } from '@boilerbear/core';
import { describe, expect, it } from 'vitest';
import { PlanSourceError, loadPlan } from '../src/plan-source.js';

describe('loadPlan', () => {
  it('loads from a recipe id', async () => {
    const plan = await loadPlan({ recipe: 'vite-classic' });
    expect(plan.base).toBe('vite');
    expect(plan.modules.length).toBeGreaterThan(0);
  });

  it('rejects an unknown recipe', async () => {
    await expect(loadPlan({ recipe: 'no-such-recipe' })).rejects.toBeInstanceOf(PlanSourceError);
  });

  it('rejects when no source is provided', async () => {
    await expect(loadPlan({})).rejects.toBeInstanceOf(PlanSourceError);
  });

  it('rejects when multiple sources are provided', async () => {
    await expect(loadPlan({ recipe: 'vite-classic', hash: 'abc' })).rejects.toBeInstanceOf(
      PlanSourceError,
    );
  });

  it('round-trips a hash', async () => {
    const original = {
      v: 1 as const,
      projectName: 'my-app',
      packageManager: 'pnpm' as const,
      base: 'vite',
      modules: ['tailwindcss'],
      options: {},
    };
    const hash = encodePlan(original);
    const plan = await loadPlan({ hash });
    expect(plan).toEqual(original);
  });

  it('loads from a JSON file', async () => {
    const path = join(tmpdir(), `bb-plan-${Date.now()}.json`);
    const original = {
      v: 1,
      projectName: 'from-file',
      packageManager: 'npm',
      base: 'vite',
      modules: ['zustand'],
      options: {},
    };
    await writeFile(path, JSON.stringify(original));
    const plan = await loadPlan({ planPath: path });
    expect(plan.projectName).toBe('from-file');
    expect(plan.packageManager).toBe('npm');
  });

  it('rejects a malformed plan file', async () => {
    const path = join(tmpdir(), `bb-plan-bad-${Date.now()}.json`);
    await writeFile(path, '{ not json }');
    await expect(loadPlan({ planPath: path })).rejects.toBeInstanceOf(PlanSourceError);
  });
});
