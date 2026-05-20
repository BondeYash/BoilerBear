import { createRegistry, detectConflicts, emitCommand, sortModules } from '@boilerbear/core';
import type { Plan, Registry } from '@boilerbear/core';
import { allManifests, allRecipes } from '../src/index.js';

const errors: string[] = [];

let registry: Registry;
try {
  registry = createRegistry(allManifests);
} catch (err) {
  console.error('Registry failed to load:');
  console.error(err);
  process.exit(1);
}

const knownIds = new Set(allManifests.map((m) => m.id));
const frameworkIds = new Set(
  allManifests.filter((m) => m.category === 'framework').map((m) => m.id),
);

for (const manifest of allManifests) {
  const where = `[${manifest.id}]`;

  for (const ref of [...manifest.requires, ...manifest.conflicts, ...manifest.recommends]) {
    if (!knownIds.has(ref.id)) {
      errors.push(`${where} references unknown module "${ref.id}"`);
    }
  }

  for (const fw of manifest.appliesTo) {
    if (!frameworkIds.has(fw)) {
      errors.push(`${where} appliesTo unknown framework "${fw}"`);
    }
  }

  if (manifest.category === 'framework' && !manifest.framework) {
    errors.push(`${where} is a framework but has no framework.createCommand`);
  }
}

for (const recipe of allRecipes) {
  const where = `[recipe:${recipe.id}]`;
  if (!frameworkIds.has(recipe.template.base)) {
    errors.push(`${where} base "${recipe.template.base}" is not a framework`);
  }
  for (const id of recipe.template.modules) {
    if (!knownIds.has(id)) {
      errors.push(`${where} references unknown module "${id}"`);
    }
  }

  const plan: Plan = { ...recipe.template, projectName: 'demo' };
  const result = detectConflicts(plan, registry);
  const hardErrors = result.warnings.filter((w) => w.severity === 'error');
  if (hardErrors.length > 0) {
    for (const w of hardErrors) {
      errors.push(`${where} conflict: ${w.code} — ${w.message}`);
    }
  }

  try {
    sortModules(plan, registry);
    emitCommand(plan, registry);
  } catch (err) {
    errors.push(`${where} emitCommand failed: ${(err as Error).message}`);
  }
}

if (errors.length > 0) {
  console.error(`Manifest validation failed (${errors.length} issues):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log(`OK — ${allManifests.length} manifests, ${allRecipes.length} recipes validated.`);
