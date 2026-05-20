import { ModuleManifest } from '../schema/module.js';
import type { Category } from '../schema/refs.js';
import { type Registry, RegistryValidationError } from './types.js';

export function createRegistry(input: ReadonlyArray<unknown>): Registry {
  const issues: { index: number; id?: string; message: string }[] = [];
  const parsed: ModuleManifest[] = [];

  input.forEach((raw, index) => {
    const result = ModuleManifest.safeParse(raw);
    if (!result.success) {
      const probeId =
        typeof raw === 'object' && raw !== null && 'id' in raw && typeof raw.id === 'string'
          ? raw.id
          : undefined;
      for (const err of result.error.errors) {
        issues.push({
          index,
          id: probeId,
          message: `${err.path.join('.') || '<root>'}: ${err.message}`,
        });
      }
      return;
    }
    parsed.push(result.data);
  });

  const seen = new Set<string>();
  for (const [index, manifest] of parsed.entries()) {
    if (seen.has(manifest.id)) {
      issues.push({ index, id: manifest.id, message: 'duplicate id' });
    } else {
      seen.add(manifest.id);
    }
  }

  if (issues.length > 0) {
    throw new RegistryValidationError(issues);
  }

  return buildRegistry(parsed);
}

function buildRegistry(manifests: ReadonlyArray<ModuleManifest>): Registry {
  const byId = new Map<string, ModuleManifest>();
  const byCategory = new Map<Category, ModuleManifest[]>();
  const byFramework = new Map<string, ModuleManifest[]>();
  const frameworks: ModuleManifest[] = [];

  for (const manifest of manifests) {
    byId.set(manifest.id, manifest);
    const list = byCategory.get(manifest.category) ?? [];
    list.push(manifest);
    byCategory.set(manifest.category, list);
    if (manifest.category === 'framework') frameworks.push(manifest);
    for (const fw of manifest.appliesTo) {
      const fwList = byFramework.get(fw) ?? [];
      fwList.push(manifest);
      byFramework.set(fw, fwList);
    }
  }

  return {
    all: manifests,
    get: (id) => byId.get(id),
    has: (id) => byId.has(id),
    require(id) {
      const found = byId.get(id);
      if (!found) throw new Error(`Module not in registry: ${id}`);
      return found;
    },
    byCategory: (category) => byCategory.get(category) ?? [],
    frameworks: () => frameworks,
    forFramework: (frameworkId) => byFramework.get(frameworkId) ?? [],
  };
}

export type { Registry } from './types.js';
export { RegistryValidationError } from './types.js';
