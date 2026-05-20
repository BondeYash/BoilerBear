import { z } from 'zod';

export const ID_REGEX = /^[a-z0-9][a-z0-9-]*$/;

export const ModuleId = z.string().regex(ID_REGEX, {
  message: 'ID must be lowercase, start with a letter or digit, contain only a-z 0-9 -',
});
export type ModuleId = z.infer<typeof ModuleId>;

export const FrameworkId = ModuleId.brand<'FrameworkId'>();
export type FrameworkId = z.infer<typeof FrameworkId>;

export const PackageManager = z.enum(['pnpm', 'npm', 'yarn', 'bun']);
export type PackageManager = z.infer<typeof PackageManager>;

export const Category = z.enum([
  'framework',
  'language',
  'styling',
  'components',
  'state',
  'data',
  'auth',
  'routing',
  'testing',
  'lint',
  'ci',
  'deploy',
  'analytics',
  'i18n',
  'misc',
]);
export type Category = z.infer<typeof Category>;

export const Severity = z.enum(['error', 'warning', 'info']);
export type Severity = z.infer<typeof Severity>;

export const PkgSpec = z.object({
  name: z.string().min(1),
  version: z.string().min(1),
});
export type PkgSpec = z.infer<typeof PkgSpec>;

export const ModuleRef = z.object({
  id: ModuleId,
  reason: z.string().optional(),
  severity: Severity.optional(),
});
export type ModuleRef = z.infer<typeof ModuleRef>;
