import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { runCommand } from '../src/commands/run.js';

describe('runCommand --dry-run', () => {
  const logs: string[] = [];
  const originalLog = console.log;

  beforeEach(() => {
    logs.length = 0;
    console.log = (...args: unknown[]) => {
      logs.push(args.map((a) => String(a)).join(' '));
    };
  });

  afterEach(() => {
    console.log = originalLog;
    vi.restoreAllMocks();
  });

  it('returns 0 and prints script for a recipe', async () => {
    const code = await runCommand({
      recipe: 'vite-classic',
      name: 'demo-app',
      dryRun: true,
    });
    expect(code).toBe(0);
    const output = logs.join('\n');
    expect(output).toContain('demo-app');
    expect(output).toContain('Dry run');
    expect(output).toContain('pnpm create vite@latest');
  });

  it('honors --pm override', async () => {
    const code = await runCommand({
      recipe: 'vite-classic',
      name: 'demo-app',
      pm: 'npm',
      dryRun: true,
    });
    expect(code).toBe(0);
    expect(logs.join('\n')).toContain('npm create vite@latest');
  });

  it('returns 2 when no plan source is given', async () => {
    const code = await runCommand({ dryRun: true });
    expect(code).toBe(2);
  });

  it('returns 2 on unknown package manager', async () => {
    const code = await runCommand({
      recipe: 'vite-classic',
      pm: 'cargo' as never,
      dryRun: true,
    });
    expect(code).toBe(2);
  });
});
