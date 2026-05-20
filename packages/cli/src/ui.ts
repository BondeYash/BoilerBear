import type { CompiledPlan, Plan, PlanWarning, Suggestion } from '@boilerbear/core';
import pc from 'picocolors';

export const log = {
  banner(text: string): void {
    console.log();
    console.log(pc.bold(pc.cyan('▌ BoilerBear ')) + pc.dim(`— ${text}`));
    console.log();
  },
  step(text: string): void {
    console.log(`${pc.cyan('›')} ${text}`);
  },
  ok(text: string): void {
    console.log(`${pc.green('✓')} ${text}`);
  },
  warn(text: string): void {
    console.log(`${pc.yellow('⚠')} ${text}`);
  },
  error(text: string): void {
    console.log(`${pc.red('✗')} ${text}`);
  },
  dim(text: string): void {
    console.log(pc.dim(text));
  },
  raw(text: string): void {
    console.log(text);
  },
};

export function printPlanSummary(plan: Plan, compiled: CompiledPlan): void {
  log.raw(`${pc.bold('Project')}        ${plan.projectName}`);
  log.raw(`${pc.bold('Package mgr')}    ${plan.packageManager}`);
  log.raw(`${pc.bold('Base framework')} ${plan.base}`);
  log.raw(
    `${pc.bold('Modules')}        ${compiled.moduleOrder.slice(1).join(', ') || pc.dim('(none)')}`,
  );
  log.raw(`${pc.bold('Packages')}       ${compiled.resolvedPackages.length} total`);
}

export function printWarnings(warnings: ReadonlyArray<PlanWarning>): void {
  if (warnings.length === 0) return;
  for (const w of warnings) {
    const tag =
      w.severity === 'error'
        ? pc.red(`[${w.code}]`)
        : w.severity === 'warning'
          ? pc.yellow(`[${w.code}]`)
          : pc.cyan(`[${w.code}]`);
    log.raw(`  ${tag} ${w.message}`);
  }
}

export function printSuggestions(suggestions: ReadonlyArray<Suggestion>): void {
  if (suggestions.length === 0) return;
  log.raw('');
  log.dim('Suggested additions:');
  for (const s of suggestions) {
    log.raw(`  ${pc.cyan('+')} ${pc.bold(s.id)} ${pc.dim(`(via ${s.fromId}: ${s.reason})`)}`);
  }
}

export function printScript(script: string): void {
  log.raw('');
  log.dim('---- script ----');
  for (const line of script.split('\n')) {
    log.raw(pc.gray('  ') + line);
  }
  log.dim('----------------');
  log.raw('');
}
