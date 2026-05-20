import { resolve } from 'node:path';
import {
  type CompiledPlan,
  EmitterError,
  type PackageManager,
  type Plan,
  createRegistry,
  detectConflicts,
  emitCommand,
  recommendAdditions,
} from '@boilerbear/core';
import { allManifests } from '@boilerbear/modules';
import prompts from 'prompts';
import { ExecError, runScript } from '../exec.js';
import { type PlanSourceArgs, PlanSourceError, loadPlan } from '../plan-source.js';
import { log, printPlanSummary, printScript, printSuggestions, printWarnings } from '../ui.js';

export interface RunOptions extends PlanSourceArgs {
  pm?: PackageManager;
  name?: string;
  cwd?: string;
  dryRun?: boolean;
  yes?: boolean;
}

const VALID_PM: ReadonlyArray<PackageManager> = ['pnpm', 'npm', 'yarn', 'bun'];

export async function runCommand(opts: RunOptions): Promise<number> {
  log.banner('run');

  if (opts.pm && !VALID_PM.includes(opts.pm)) {
    log.error(`Unknown package manager "${opts.pm}". Use one of: ${VALID_PM.join(', ')}.`);
    return 2;
  }

  let plan: Plan;
  try {
    plan = await loadPlan(opts);
  } catch (err) {
    if (err instanceof PlanSourceError) {
      log.error(err.message);
      return 2;
    }
    throw err;
  }

  if (opts.pm) plan = { ...plan, packageManager: opts.pm };
  if (opts.name) plan = { ...plan, projectName: opts.name };

  const registry = createRegistry(allManifests);

  const conflicts = detectConflicts(plan, registry);
  if (conflicts.hasErrors) {
    log.error('Plan has unresolved errors:');
    printWarnings(conflicts.warnings);
    return 1;
  }

  let compiled: CompiledPlan & { script: string };
  try {
    compiled = emitCommand(plan, registry);
  } catch (err) {
    if (err instanceof EmitterError) {
      log.error(`Could not compile plan: ${err.message}`);
      return 1;
    }
    throw err;
  }

  printPlanSummary(plan, compiled);
  if (compiled.warnings.length > 0) {
    log.raw('');
    log.warn('Warnings:');
    printWarnings(compiled.warnings);
  }
  printSuggestions(recommendAdditions(plan, registry));
  printScript(compiled.script);

  const cwd = resolve(opts.cwd ?? process.cwd());
  log.dim(`Target directory: ${cwd}`);

  if (opts.dryRun) {
    log.ok('Dry run — nothing executed.');
    return 0;
  }

  if (!opts.yes) {
    const { confirm } = await prompts({
      type: 'confirm',
      name: 'confirm',
      message: `Run this script in ${cwd}?`,
      initial: false,
    });
    if (!confirm) {
      log.warn('Cancelled.');
      return 130;
    }
  }

  log.step('Running script...');
  try {
    await runScript(compiled.script, { cwd });
  } catch (err) {
    if (err instanceof ExecError) {
      log.error(
        `Script failed${err.exitCode !== undefined ? ` (exit ${err.exitCode})` : ''}: ${err.message}`,
      );
      return err.exitCode ?? 1;
    }
    throw err;
  }

  log.ok(`Project "${plan.projectName}" scaffolded.`);
  return 0;
}
