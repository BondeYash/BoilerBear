import { z } from 'zod';
import { Language, ModuleId, PackageManager, pmsForLanguage } from './refs.js';

export const ProjectName = z
  .string()
  .min(1)
  .max(214)
  .regex(/^(?!\.)(?!-)[a-z0-9._~-]+$/, {
    message:
      'Project name must be lowercase, may contain a-z 0-9 . _ ~ -, and may not start with . or -.',
  });
export type ProjectName = z.infer<typeof ProjectName>;

export const Plan = z
  .object({
    v: z.literal(1).default(1),
    projectName: ProjectName,
    language: Language.default('js'),
    packageManager: PackageManager.default('pnpm'),
    base: ModuleId.describe('Framework module id, e.g. "vite" or "next"'),
    modules: z.array(ModuleId).default([]),
    options: z.record(z.record(z.unknown())).default({}),
  })
  .superRefine((plan, ctx) => {
    const allowed = pmsForLanguage(plan.language);
    if (!allowed.includes(plan.packageManager)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['packageManager'],
        message: `Package manager "${plan.packageManager}" is not valid for language "${plan.language}". Allowed: ${allowed.join(', ')}.`,
      });
    }
  });
export type Plan = z.infer<typeof Plan>;
