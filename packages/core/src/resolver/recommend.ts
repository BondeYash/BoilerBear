import type { Registry } from '../registry/types.js';
import type { Plan } from '../schema/plan.js';
import type { ModuleId } from '../schema/refs.js';

export interface Suggestion {
  id: ModuleId;
  fromId: ModuleId;
  reason: string;
}

export function recommendAdditions(plan: Plan, registry: Registry): Suggestion[] {
  const selected = new Set<ModuleId>([plan.base, ...plan.modules]);
  const suggestions = new Map<ModuleId, Suggestion>();

  for (const id of selected) {
    const manifest = registry.get(id);
    if (!manifest) continue;
    for (const rec of manifest.recommends) {
      if (selected.has(rec.id)) continue;
      if (!registry.has(rec.id)) continue;
      if (suggestions.has(rec.id)) continue;

      const target = registry.require(rec.id);
      if (target.appliesTo.length > 0 && !target.appliesTo.includes(plan.base)) continue;

      suggestions.set(rec.id, {
        id: rec.id,
        fromId: id,
        reason: rec.reason ?? `Often paired with ${manifest.name}.`,
      });
    }
  }

  return [...suggestions.values()];
}
