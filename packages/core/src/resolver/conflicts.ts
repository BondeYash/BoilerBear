import type { Registry } from '../registry/types.js';
import type { PlanWarning } from '../schema/compiled.js';
import type { Plan } from '../schema/plan.js';
import type { ModuleId, Severity } from '../schema/refs.js';

export interface DetectConflictsResult {
  warnings: PlanWarning[];
  hasErrors: boolean;
}

export function detectConflicts(plan: Plan, registry: Registry): DetectConflictsResult {
  const warnings: PlanWarning[] = [];
  const selected = new Set<ModuleId>([plan.base, ...plan.modules]);

  const baseManifest = registry.get(plan.base);
  if (!baseManifest) {
    warnings.push({
      code: 'unknown-base',
      severity: 'error',
      message: `Base framework "${plan.base}" is not in the registry.`,
      moduleId: plan.base,
    });
  } else if (baseManifest.category !== 'framework') {
    warnings.push({
      code: 'base-not-framework',
      severity: 'error',
      message: `"${plan.base}" is not a framework module (category=${baseManifest.category}).`,
      moduleId: plan.base,
    });
  }

  for (const id of plan.modules) {
    const manifest = registry.get(id);
    if (!manifest) {
      warnings.push({
        code: 'unknown-module',
        severity: 'error',
        message: `Module "${id}" is not in the registry.`,
        moduleId: id,
      });
      continue;
    }

    if (manifest.appliesTo.length > 0 && !manifest.appliesTo.includes(plan.base)) {
      warnings.push({
        code: 'framework-mismatch',
        severity: 'error',
        message: `${manifest.name} does not support framework "${plan.base}". Supports: ${manifest.appliesTo.join(', ')}.`,
        moduleId: id,
      });
    }

    for (const req of manifest.requires) {
      if (!selected.has(req.id)) {
        warnings.push({
          code: 'missing-requirement',
          severity: req.severity ?? 'error',
          message: req.reason ?? `${manifest.name} requires "${req.id}" which is not in the plan.`,
          moduleId: id,
          relatedId: req.id,
        });
      }
    }

    for (const conflict of manifest.conflicts) {
      if (selected.has(conflict.id) && conflict.id !== id) {
        const severity: Severity = conflict.severity ?? 'error';
        warnings.push({
          code: 'conflict',
          severity,
          message: conflict.reason ?? `${manifest.name} conflicts with "${conflict.id}". Pick one.`,
          moduleId: id,
          relatedId: conflict.id,
        });
      }
    }
  }

  const hasErrors = warnings.some((w) => w.severity === 'error');
  return { warnings, hasErrors };
}
