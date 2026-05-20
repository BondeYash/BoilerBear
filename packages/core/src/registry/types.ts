import type { ModuleManifest } from '../schema/module.js';
import type { Category, ModuleId } from '../schema/refs.js';

export interface Registry {
  readonly all: ReadonlyArray<ModuleManifest>;
  get(id: ModuleId): ModuleManifest | undefined;
  require(id: ModuleId): ModuleManifest;
  has(id: ModuleId): boolean;
  byCategory(category: Category): ReadonlyArray<ModuleManifest>;
  frameworks(): ReadonlyArray<ModuleManifest>;
  forFramework(frameworkId: ModuleId): ReadonlyArray<ModuleManifest>;
}

export class RegistryValidationError extends Error {
  readonly issues: ReadonlyArray<{ index: number; id?: string; message: string }>;

  constructor(issues: ReadonlyArray<{ index: number; id?: string; message: string }>) {
    super(
      `Registry validation failed:\n${issues.map((i) => `  [${i.index}] ${i.id ?? '<unknown>'}: ${i.message}`).join('\n')}`,
    );
    this.name = 'RegistryValidationError';
    this.issues = issues;
  }
}
