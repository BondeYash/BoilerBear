import type { Registry } from '../registry/types.js';
import { detectConflicts } from '../resolver/conflicts.js';
import { sortModules } from '../resolver/topo.js';
import type { CompiledPlan, ResolvedPackage } from '../schema/compiled.js';
import type { ModuleManifest } from '../schema/module.js';
import type { Plan } from '../schema/plan.js';
import type { PkgSpec } from '../schema/refs.js';
import { heredocBody, shellSingleQuote } from './escape.js';
import { getPm, renderCreateCommand } from './pm.js';

export interface EmitCommandResult extends CompiledPlan {
  /** Multi-line script equivalent of `command`, for display in the UI. */
  script: string;
}

export class EmitterError extends Error {
  readonly code: string;
  constructor(code: string, message: string) {
    super(message);
    this.code = code;
    this.name = 'EmitterError';
  }
}

export function emitCommand(plan: Plan, registry: Registry): EmitCommandResult {
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

  const pm = getPm(plan.packageManager);
  const lines: string[] = [];
  const resolvedPackages: ResolvedPackage[] = [];

  lines.push('set -euo pipefail');
  lines.push(
    renderCreateCommand(base.framework.createCommand, {
      name: plan.projectName,
      pm: plan.packageManager,
    }),
  );
  lines.push(`cd ${shellSingleQuote(plan.projectName)}`);

  const otherModules = ordered.slice(1);

  const allDeps = collectPackages(otherModules, 'deps');
  const allDevDeps = collectPackages(otherModules, 'devDeps');

  for (const pkg of allDeps) resolvedPackages.push({ ...pkg, dev: false });
  for (const pkg of allDevDeps) resolvedPackages.push({ ...pkg, dev: true });

  const addLine = pm.add(allDeps);
  if (addLine) lines.push(addLine);
  const addDevLine = pm.addDev(allDevDeps);
  if (addDevLine) lines.push(addDevLine);

  const vars = { name: plan.projectName, pm: plan.packageManager };
  for (const manifest of otherModules) {
    for (const step of manifest.setup) {
      renderStep(step, lines, vars);
    }
  }

  const script = lines.join('\n');
  const command = `bash -c ${shellSingleQuote(script)}`;

  return {
    projectName: plan.projectName,
    packageManager: plan.packageManager,
    base: plan.base,
    moduleOrder: ordered.map((m) => m.id),
    resolvedPackages,
    command,
    script,
    warnings: conflicts.warnings,
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

function renderStep(
  step: ModuleManifest['setup'][number],
  lines: string[],
  vars: { name: string; pm: string },
): void {
  switch (step.kind) {
    case 'writeFile': {
      const body = heredocBody(step.content);
      const guard = step.ifMissing ? `[ -f ${shellSingleQuote(step.path)} ] || ` : '';
      lines.push(`mkdir -p ${shellSingleQuote(parentDir(step.path))}`);
      lines.push(`${guard}cat > ${shellSingleQuote(step.path)} <<'BB_EOF'\n${body}BB_EOF`);
      return;
    }
    case 'patchJson': {
      const patch = JSON.stringify(step.patch);
      lines.push(
        `node -e ${shellSingleQuote(
          `const fs=require('fs');const p=${JSON.stringify(step.path)};const cur=JSON.parse(fs.readFileSync(p,'utf8'));const patch=${patch};fs.writeFileSync(p,JSON.stringify(deepMerge(cur,patch),null,2)+'\\n');function deepMerge(a,b){if(Array.isArray(b))return b;if(typeof b!=='object'||b===null)return b;const out=Array.isArray(a)?[...a]:{...(a??{})};for(const k of Object.keys(b))out[k]=deepMerge(out?.[k],b[k]);return out;}`,
        )}`,
      );
      return;
    }
    case 'appendScript': {
      const patch = JSON.stringify({ scripts: { [step.name]: step.script } });
      lines.push(
        `node -e ${shellSingleQuote(
          `const fs=require('fs');const p='package.json';const cur=JSON.parse(fs.readFileSync(p,'utf8'));const add=${patch};cur.scripts={...(cur.scripts||{}),...add.scripts};fs.writeFileSync(p,JSON.stringify(cur,null,2)+'\\n');`,
        )}`,
      );
      return;
    }
    case 'envVar': {
      const example = step.example || `# set ${step.key}`;
      lines.push(`printf '%s\\n' ${shellSingleQuote(`${step.key}=${example}`)} >> .env.example`);
      return;
    }
    case 'shell': {
      const command = expandVars(step.command, vars);
      if (step.when === 'preInstall') {
        lines.splice(2, 0, command);
      } else {
        lines.push(command);
      }
      return;
    }
  }
}

function expandVars(template: string, vars: { name: string; pm: string }): string {
  return template.replace(/\{(name|pm)\}/g, (_, key: 'name' | 'pm') => vars[key]);
}

function parentDir(path: string): string {
  const idx = path.lastIndexOf('/');
  return idx === -1 ? '.' : path.slice(0, idx) || '.';
}
