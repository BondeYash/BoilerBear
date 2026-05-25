import { z } from 'zod';
import { ModuleId, Severity, Shell } from './refs.js';

export const PlanWarning = z.object({
  code: z.string().min(1),
  severity: Severity,
  message: z.string().min(1),
  moduleId: ModuleId.optional(),
  relatedId: ModuleId.optional(),
});
export type PlanWarning = z.infer<typeof PlanWarning>;

export const ResolvedPackage = z.object({
  name: z.string().min(1),
  version: z.string().min(1),
  dev: z.boolean(),
});
export type ResolvedPackage = z.infer<typeof ResolvedPackage>;

export const CompiledPlan = z.object({
  projectName: z.string(),
  packageManager: z.string(),
  base: ModuleId,
  moduleOrder: z.array(ModuleId),
  resolvedPackages: z.array(ResolvedPackage),
  command: z.string(),
  shell: Shell.default('bash'),
  warnings: z.array(PlanWarning),
});
export type CompiledPlan = z.infer<typeof CompiledPlan>;
