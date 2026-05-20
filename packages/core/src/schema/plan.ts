import { z } from 'zod';
import { ModuleId, PackageManager } from './refs.js';

export const ProjectName = z
  .string()
  .min(1)
  .max(214)
  .regex(/^(?!\.)(?!-)[a-z0-9._~-]+$/, {
    message:
      'Project name must be lowercase, may contain a-z 0-9 . _ ~ -, and may not start with . or -.',
  });
export type ProjectName = z.infer<typeof ProjectName>;

export const Plan = z.object({
  v: z.literal(1).default(1),
  projectName: ProjectName,
  packageManager: PackageManager.default('pnpm'),
  base: ModuleId.describe('Framework module id, e.g. "vite" or "next"'),
  modules: z.array(ModuleId).default([]),
  options: z.record(z.record(z.unknown())).default({}),
});
export type Plan = z.infer<typeof Plan>;
