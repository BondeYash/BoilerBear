/**
 * Nightly synthetic install test for every recipe in `@boilerbear/modules`.
 *
 * For each recipe × package-manager in the matrix:
 *   1. Build a `Plan` from the recipe and override the package manager.
 *   2. Compile it with `emitCommand` from `@boilerbear/core`.
 *   3. Write the resulting shell script into a temp dir.
 *   4. Execute it with a hard timeout.
 *   5. Assert the project's `package.json` exists.
 *   6. Run `<pm> exec tsc --noEmit` inside the project.
 *
 * Results are aggregated into `manifest-health.json`. Process exits non-zero
 * when any recipe fails so nightly CI surfaces drift.
 *
 * CLI:
 *   --matrix=pnpm,npm        package managers to test (default: pnpm)
 *   --lang-matrix=js,py      languages to include (default: js)
 *   --filter=id1,id2         only these recipe ids
 *   --output=path/health.json output JSON path (default: repo-root manifest-health.json)
 *   --timeout=300            per-step seconds (default: 300)
 *   --keep                   keep temp dirs after run (debug)
 *   --tsc                    run `tsc --noEmit` after install (default: on)
 *   --no-tsc                 skip tsc check
 *   --check-build            run per-language build check (tsc/ruff+pytest/go build/cargo check)
 *   --no-check-build         skip build check (default for non-JS during rollout)
 */

import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { createRegistry, emitCommand, pmsForLanguage } from '@boilerbear/core';
import type { Language, PackageManager, Plan } from '@boilerbear/core';
import { allManifests, allRecipes } from '../src/index.js';

interface Args {
  matrix: PackageManager[];
  langMatrix: Language[];
  filter: string[] | null;
  output: string;
  timeoutSec: number;
  keep: boolean;
  tsc: boolean;
  checkBuild: boolean;
}

interface StepResult {
  step: 'emit' | 'install' | 'tsc';
  ok: boolean;
  durationMs: number;
  exitCode: number | null;
  signal: NodeJS.Signals | null;
  stdoutTail: string;
  stderrTail: string;
  error?: string;
}

interface RecipeResult {
  recipe: string;
  packageManager: PackageManager;
  ok: boolean;
  tempDir: string;
  startedAt: string;
  finishedAt: string;
  totalDurationMs: number;
  steps: StepResult[];
}

interface HealthReport {
  generatedAt: string;
  matrix: PackageManager[];
  totals: { recipes: number; runs: number; passed: number; failed: number };
  results: RecipeResult[];
}

const TAIL_BYTES = 4_000;

function parseArgs(): Args {
  const argv = process.argv.slice(2);
  const out: Args = {
    matrix: ['pnpm'],
    langMatrix: ['js'],
    filter: null,
    output: resolve(rootDir(), 'manifest-health.json'),
    timeoutSec: 300,
    keep: false,
    tsc: true,
    checkBuild: false,
  };

  for (const raw of argv) {
    if (raw === '--' || raw === '') continue;
    const [key, valueRaw] = raw.startsWith('--') ? raw.slice(2).split('=', 2) : [raw, undefined];
    switch (key) {
      case 'matrix':
        out.matrix = (valueRaw ?? '')
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean) as PackageManager[];
        break;
      case 'lang-matrix':
        out.langMatrix = (valueRaw ?? '')
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean) as Language[];
        break;
      case 'filter':
        out.filter = (valueRaw ?? '')
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean);
        break;
      case 'output':
        if (valueRaw) out.output = resolve(valueRaw);
        break;
      case 'timeout':
        if (valueRaw) out.timeoutSec = Math.max(10, Number.parseInt(valueRaw, 10));
        break;
      case 'keep':
        out.keep = true;
        break;
      case 'tsc':
        out.tsc = true;
        break;
      case 'no-tsc':
        out.tsc = false;
        break;
      case 'check-build':
        out.checkBuild = true;
        break;
      case 'no-check-build':
        out.checkBuild = false;
        break;
      default:
        console.warn(`Unknown flag: --${key}`);
    }
  }

  if (out.matrix.length === 0) out.matrix = ['pnpm'];
  if (out.langMatrix.length === 0) out.langMatrix = ['js'];
  return out;
}

function rootDir(): string {
  const here = dirname(fileURLToPath(import.meta.url));
  return resolve(here, '..', '..', '..');
}

function tail(buf: string): string {
  if (buf.length <= TAIL_BYTES) return buf;
  return `…[truncated ${buf.length - TAIL_BYTES} bytes]…\n${buf.slice(-TAIL_BYTES)}`;
}

function runShell(
  cmd: string,
  args: string[],
  cwd: string,
  timeoutSec: number,
  step: StepResult['step'],
): StepResult {
  const startedAt = Date.now();
  const r = spawnSync(cmd, args, {
    cwd,
    timeout: timeoutSec * 1000,
    encoding: 'utf8',
    env: {
      ...process.env,
      CI: '1',
      BB_NONINTERACTIVE: '1',
      NPM_CONFIG_YES: 'true',
      ADBLOCK: '1',
      DISABLE_OPENCOLLECTIVE: '1',
      npm_config_fund: 'false',
      npm_config_audit: 'false',
    },
    maxBuffer: 32 * 1024 * 1024,
    shell: false,
  });
  const durationMs = Date.now() - startedAt;
  const stdout = r.stdout ?? '';
  const stderr = r.stderr ?? '';
  const exitCode = r.status;
  const signal = r.signal;
  const ok = !r.error && exitCode === 0 && !signal;
  return {
    step,
    ok,
    durationMs,
    exitCode,
    signal,
    stdoutTail: tail(stdout),
    stderrTail: tail(stderr),
    error: r.error?.message,
  };
}

function recipePlan(recipeIdx: number, pm: PackageManager): { plan: Plan; projectName: string } {
  const recipe = allRecipes[recipeIdx];
  if (!recipe) throw new Error(`recipe index out of range: ${recipeIdx}`);
  const projectName = `bb-${recipe.id}`;
  const plan: Plan = {
    ...recipe.template,
    projectName,
    packageManager: pm,
  };
  return { plan, projectName };
}

function runRecipe(
  recipeIdx: number,
  pm: PackageManager,
  args: Args,
  registry: ReturnType<typeof createRegistry>,
): RecipeResult {
  const recipe = allRecipes[recipeIdx];
  if (!recipe) throw new Error(`recipe index out of range: ${recipeIdx}`);
  const recipeId = recipe.id;
  const startedAt = new Date();
  const tempDir = mkdtempSync(join(tmpdir(), `bb-recipe-${recipeId}-${pm}-`));
  const steps: StepResult[] = [];
  let ok = true;

  try {
    const { plan, projectName } = recipePlan(recipeIdx, pm);

    const emitStarted = Date.now();
    let script = '';
    try {
      const result = emitCommand(plan, registry);
      script = result.script;
      steps.push({
        step: 'emit',
        ok: true,
        durationMs: Date.now() - emitStarted,
        exitCode: 0,
        signal: null,
        stdoutTail: '',
        stderrTail: '',
      });
    } catch (err) {
      ok = false;
      steps.push({
        step: 'emit',
        ok: false,
        durationMs: Date.now() - emitStarted,
        exitCode: null,
        signal: null,
        stdoutTail: '',
        stderrTail: '',
        error: (err as Error).message,
      });
      return finish();
    }

    const scriptPath = join(tempDir, 'install.sh');
    writeFileSync(scriptPath, script, { mode: 0o755 });

    const install = runShell('bash', [scriptPath], tempDir, args.timeoutSec, 'install');
    steps.push(install);

    const projectDir = join(tempDir, projectName);
    if (!install.ok || !existsSync(join(projectDir, 'package.json'))) {
      ok = false;
      return finish();
    }

    // Per-language build check. JS uses tsc; Python uses ruff + pytest; Go uses go
    // build; Rust uses cargo check. Defaults: JS = tsc on, others = check-build off
    // during Phase 2 rollout (turn on once tooling stabilizes).
    const lang = recipe.template.language;
    const shouldCheck = lang === 'js' ? args.tsc : args.checkBuild;
    if (shouldCheck) {
      const checks = buildCheckCommand(lang, pm);
      for (const c of checks) {
        const result = runShell(c.cmd, c.args, projectDir, args.timeoutSec, 'tsc');
        steps.push(result);
        if (!result.ok) {
          ok = false;
          break;
        }
      }
    }
  } finally {
    if (!args.keep) {
      try {
        rmSync(tempDir, { recursive: true, force: true });
      } catch {
        // best-effort cleanup
      }
    }
  }

  function finish(): RecipeResult {
    const finishedAt = new Date();
    return {
      recipe: recipeId,
      packageManager: pm,
      ok,
      tempDir,
      startedAt: startedAt.toISOString(),
      finishedAt: finishedAt.toISOString(),
      totalDurationMs: finishedAt.getTime() - startedAt.getTime(),
      steps,
    };
  }

  return finish();
}

function buildCheckCommand(
  lang: Language,
  pm: PackageManager,
): ReadonlyArray<{ cmd: string; args: string[] }> {
  switch (lang) {
    case 'js': {
      const tscArgs =
        pm === 'pnpm' ? ['exec', 'tsc', '--noEmit'] : ['exec', '--', 'tsc', '--noEmit'];
      return [{ cmd: pm, args: tscArgs }];
    }
    case 'py':
      // Both ruff and pytest are gated behind --check-build; harmless when absent.
      return [
        { cmd: 'uv', args: ['run', 'ruff', 'check', '.'] },
        { cmd: 'uv', args: ['run', 'pytest', '-q'] },
      ];
    case 'go':
      return [{ cmd: 'go', args: ['build', './...'] }];
    case 'rust':
      return [{ cmd: 'cargo', args: ['check'] }];
  }
}

function main(): void {
  const args = parseArgs();
  const registry = createRegistry(allManifests);

  const selected = allRecipes
    .map((r, i) => ({ r, i }))
    .filter(({ r }) => (args.filter ? args.filter.includes(r.id) : true))
    .filter(({ r }) => args.langMatrix.includes(r.template.language));

  if (selected.length === 0) {
    console.error(
      `No recipes matched filter [${args.filter?.join(',') ?? '<none>'}]. Available: ${allRecipes
        .map((r) => r.id)
        .join(', ')}`,
    );
    process.exit(1);
  }

  console.log(
    `Running install matrix: ${selected.length} recipe(s) × ${args.matrix.join(',')} pm(s) ` +
      `× langs=${args.langMatrix.join(',')} (timeout ${args.timeoutSec}s, tsc=${args.tsc}, check-build=${args.checkBuild}).`,
  );

  const results: RecipeResult[] = [];
  for (const { r, i } of selected) {
    const validPms = pmsForLanguage(r.template.language);
    for (const pm of args.matrix) {
      if (!validPms.includes(pm)) {
        // PM not valid for this recipe's language — skip silently rather than
        // emit a runtime EmitterError. Keep the matrix clean.
        continue;
      }
      const label = `${r.id} @ ${pm}`;
      const startedAt = Date.now();
      process.stdout.write(`  ▶ ${label} … `);
      const result = runRecipe(i, pm, args, registry);
      results.push(result);
      const ms = Date.now() - startedAt;
      const tag = result.ok ? 'PASS' : 'FAIL';
      process.stdout.write(`${tag} (${(ms / 1000).toFixed(1)}s)\n`);
      if (!result.ok) {
        for (const step of result.steps) {
          if (step.ok) continue;
          console.error(
            `    × ${step.step} exit=${step.exitCode ?? 'null'} signal=${step.signal ?? 'null'}${
              step.error ? ` err="${step.error}"` : ''
            }`,
          );
          if (step.stderrTail) console.error(indent(step.stderrTail, '      '));
        }
      }
    }
  }

  const passed = results.filter((r) => r.ok).length;
  const failed = results.length - passed;
  const report: HealthReport = {
    generatedAt: new Date().toISOString(),
    matrix: args.matrix,
    totals: { recipes: selected.length, runs: results.length, passed, failed },
    results,
  };

  mkdirSync(dirname(args.output), { recursive: true });
  writeFileSync(args.output, `${JSON.stringify(report, null, 2)}\n`);
  console.log(`Wrote ${args.output} (${passed} passed, ${failed} failed).`);

  if (failed > 0) process.exit(1);
}

function indent(text: string, prefix: string): string {
  return text
    .split('\n')
    .map((line) => `${prefix}${line}`)
    .join('\n');
}

main();
