import type { Registry } from '../registry/types.js';
import type { ModuleManifest } from '../schema/module.js';
import type { Plan } from '../schema/plan.js';
import type { ModuleId } from '../schema/refs.js';

export class CycleError extends Error {
  readonly cycle: ReadonlyArray<ModuleId>;
  constructor(cycle: ReadonlyArray<ModuleId>) {
    super(`Cycle in module requirements: ${cycle.join(' -> ')}`);
    this.name = 'CycleError';
    this.cycle = cycle;
  }
}

/**
 * Returns selected modules (including base) in install order (dependencies first).
 * Unknown / missing required modules are skipped here — surfaced separately by detectConflicts.
 */
export function sortModules(plan: Plan, registry: Registry): ModuleManifest[] {
  const selected = new Set<ModuleId>([plan.base, ...plan.modules]);
  const nodes = [...selected].filter((id) => registry.has(id));

  const incoming = new Map<ModuleId, Set<ModuleId>>();
  const outgoing = new Map<ModuleId, Set<ModuleId>>();
  for (const id of nodes) {
    incoming.set(id, new Set());
    outgoing.set(id, new Set());
  }

  for (const id of nodes) {
    const manifest = registry.require(id);
    for (const req of manifest.requires) {
      if (!selected.has(req.id) || !registry.has(req.id)) continue;
      outgoing.get(req.id)?.add(id);
      incoming.get(id)?.add(req.id);
    }
  }

  const sorted: ModuleId[] = [];
  const ready: ModuleId[] = nodes.filter((id) => incoming.get(id)?.size === 0).sort();

  while (ready.length > 0) {
    const id = ready.shift() as ModuleId;
    sorted.push(id);
    for (const dependent of outgoing.get(id) ?? []) {
      const set = incoming.get(dependent);
      if (!set) continue;
      set.delete(id);
      if (set.size === 0) {
        ready.push(dependent);
        ready.sort();
      }
    }
  }

  if (sorted.length !== nodes.length) {
    const remaining = nodes.filter((id) => !sorted.includes(id));
    throw new CycleError(remaining);
  }

  // Always keep base first.
  const baseIndex = sorted.indexOf(plan.base);
  if (baseIndex > 0) {
    sorted.splice(baseIndex, 1);
    sorted.unshift(plan.base);
  }

  return sorted.map((id) => registry.require(id));
}
