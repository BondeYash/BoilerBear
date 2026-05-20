import { execa } from 'execa';

export interface ExecOptions {
  cwd: string;
  env?: NodeJS.ProcessEnv;
}

export class ExecError extends Error {
  readonly exitCode: number | undefined;
  constructor(message: string, exitCode: number | undefined) {
    super(message);
    this.name = 'ExecError';
    this.exitCode = exitCode;
  }
}

/** Run a multi-line bash script with `set -euo pipefail`, streaming output to the parent. */
export async function runScript(script: string, opts: ExecOptions): Promise<void> {
  try {
    await execa('bash', ['-c', script], {
      cwd: opts.cwd,
      stdio: 'inherit',
      env: { ...process.env, ...opts.env },
    });
  } catch (err) {
    const e = err as { exitCode?: number; shortMessage?: string; message?: string };
    throw new ExecError(e.shortMessage ?? e.message ?? 'Command failed', e.exitCode);
  }
}
