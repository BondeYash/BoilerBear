import type { Registry } from '../registry/types.js';
import { detectConflicts } from '../resolver/conflicts.js';
import { sortModules } from '../resolver/topo.js';
import type { CompiledPlan, ResolvedPackage } from '../schema/compiled.js';
import type { PlanWarning } from '../schema/compiled.js';
import type { ModuleManifest } from '../schema/module.js';
import type { Plan } from '../schema/plan.js';
import type { Language, PkgSpec, Shell } from '../schema/refs.js';
import { getPm, renderCreateCommand } from './pm.js';
import { type ShellDialect, getShell } from './shell/index.js';

export interface EmitCommandResult extends CompiledPlan {
  /** Multi-line script equivalent of `command`, for display in the UI. */
  script: string;
}

export interface EmitCommandOptions {
  shell?: Shell;
}

export class EmitterError extends Error {
  readonly code: string;
  constructor(code: string, message: string) {
    super(message);
    this.code = code;
    this.name = 'EmitterError';
  }
}

interface StepCtx {
  dialect: ShellDialect;
  language: Language;
  vars: { name: string; pm: string };
  lines: string[];
  warnings: PlanWarning[];
}

export function emitCommand(
  plan: Plan,
  registry: Registry,
  opts: EmitCommandOptions = {},
): EmitCommandResult {
  const conflicts = detectConflicts(plan, registry);
  if (conflicts.hasErrors) {
    throw new EmitterError(
      'plan-has-errors',
      `Plan has unresolved errors:\n${conflicts.warnings
        .filter((w) => w.severity === 'error')
        .map((w) => `  - ${w.code}: ${w.message}`)
        .join('\n')}`,
    );
  }

  const ordered = sortModules(plan, registry);
  const base = ordered[0];
  if (!base || base.id !== plan.base) {
    throw new EmitterError('missing-base', `Base framework "${plan.base}" not found after sort.`);
  }
  if (!base.framework) {
    throw new EmitterError(
      'base-not-initable',
      `Framework "${plan.base}" has no framework.createCommand defined.`,
    );
  }

  const shellId: Shell = opts.shell ?? 'bash';
  const dialect = getShell(shellId);
  const pm = getPm(plan.packageManager);
  const lines: string[] = [];
  const warnings: PlanWarning[] = [...conflicts.warnings];
  const resolvedPackages: ResolvedPackage[] = [];

  lines.push(dialect.preamble);
  lines.push(
    renderCreateCommand(base.framework.createCommand, {
      name: plan.projectName,
      pm: plan.packageManager,
    }),
  );
  lines.push(dialect.cd(plan.projectName));

  // Collect deps from ALL modules including the base. JS frameworks ship deps via
  // their `create-*` template (empty `packages` arrays), so this is a no-op for
  // them and bash snapshots stay byte-identical. Python/Go/Rust frameworks rely
  // on the dedicated `pm.add` line after the bare `uv init` / `cargo new`.
  const allDeps = collectPackages(ordered, 'deps');
  const allDevDeps = collectPackages(ordered, 'devDeps');

  for (const pkg of allDeps) resolvedPackages.push({ ...pkg, dev: false });
  for (const pkg of allDevDeps) resolvedPackages.push({ ...pkg, dev: true });

  const addLine = pm.add(allDeps);
  if (addLine) lines.push(addLine);
  const addDevLine = pm.addDev(allDevDeps);
  if (addDevLine) lines.push(addDevLine);

  const vars = { name: plan.projectName, pm: plan.packageManager };
  const ctx: StepCtx = { dialect, language: plan.language, vars, lines, warnings };
  // Iterate setup steps for ALL ordered modules including the base. JS bases
  // have empty setup arrays (snapshot-safe); Python/Go/Rust bases use it to
  // scaffold framework-specific files (e.g. fastapi's app/main.py).
  for (const manifest of ordered) {
    for (const step of manifest.setup) {
      renderStep(step, ctx, manifest.id);
    }
  }

  const script = lines.join('\n');
  const command = dialect.wrapAsOneLiner(script);

  return {
    projectName: plan.projectName,
    packageManager: plan.packageManager,
    base: plan.base,
    moduleOrder: ordered.map((m) => m.id),
    resolvedPackages,
    command,
    shell: shellId,
    script,
    warnings,
  };
}

function collectPackages(
  modules: ReadonlyArray<ModuleManifest>,
  key: 'deps' | 'devDeps',
): PkgSpec[] {
  const seen = new Map<string, PkgSpec>();
  for (const m of modules) {
    for (const spec of m.packages[key]) {
      if (!seen.has(spec.name)) seen.set(spec.name, spec);
    }
  }
  return [...seen.values()].sort((a, b) => a.name.localeCompare(b.name));
}

function renderStep(step: ModuleManifest['setup'][number], ctx: StepCtx, moduleId: string): void {
  switch (step.kind) {
    case 'writeFile': {
      const written = ctx.dialect.writeFile(step.path, step.content, step.ifMissing);
      ctx.lines.push(...written);
      return;
    }
    case 'patchJson': {
      if (ctx.language !== 'js') {
        throw new EmitterError(
          'unsupported-step',
          `Module "${moduleId}" uses patchJson, which is only valid for language "js" (plan language: "${ctx.language}").`,
        );
      }
      const patch = JSON.stringify(step.patch);
      const js = `const fs=require('fs');const p=${JSON.stringify(step.path)};const cur=JSON.parse(fs.readFileSync(p,'utf8'));const patch=${patch};fs.writeFileSync(p,JSON.stringify(deepMerge(cur,patch),null,2)+'\\n');function deepMerge(a,b){if(Array.isArray(b))return b;if(typeof b!=='object'||b===null)return b;const out=Array.isArray(a)?[...a]:{...(a??{})};for(const k of Object.keys(b))out[k]=deepMerge(out?.[k],b[k]);return out;}`;
      ctx.lines.push(ctx.dialect.nodeEval(js));
      return;
    }
    case 'appendScript': {
      if (ctx.language !== 'js') {
        throw new EmitterError(
          'unsupported-step',
          `Module "${moduleId}" uses appendScript (mutates package.json), which is only valid for language "js" (plan language: "${ctx.language}").`,
        );
      }
      const patch = JSON.stringify({ scripts: { [step.name]: step.script } });
      const js = `const fs=require('fs');const p='package.json';const cur=JSON.parse(fs.readFileSync(p,'utf8'));const add=${patch};cur.scripts={...(cur.scripts||{}),...add.scripts};fs.writeFileSync(p,JSON.stringify(cur,null,2)+'\\n');`;
      ctx.lines.push(ctx.dialect.nodeEval(js));
      return;
    }
    case 'envVar': {
      const example = step.example || `# set ${step.key}`;
      ctx.lines.push(ctx.dialect.appendEnvLine('.env.example', `${step.key}=${example}`));
      return;
    }
    case 'shell': {
      const raw = ctx.dialect.id === 'pwsh' ? step.pwshCommand : step.command;
      if (!raw) {
        ctx.warnings.push({
          code: 'pwsh-unsupported-shell-step',
          severity: 'warning',
          message: `Module "${moduleId}" uses a shell step without a PowerShell equivalent. Skipped on pwsh.`,
          moduleId,
        });
        return;
      }
      const command = expandVars(raw, ctx.vars);
      if (step.when === 'preInstall') {
        ctx.lines.splice(2, 0, command);
      } else {
        ctx.lines.push(command);
      }
      return;
    }
  }
}

function expandVars(template: string, vars: { name: string; pm: string }): string {
  return template.replace(/\{(name|pm)\}/g, (_, key: 'name' | 'pm') => vars[key]);
}
