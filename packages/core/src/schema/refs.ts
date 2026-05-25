import { z } from 'zod';

export const ID_REGEX = /^[a-z0-9][a-z0-9-]*$/;

export const ModuleId = z.string().regex(ID_REGEX, {
  message: 'ID must be lowercase, start with a letter or digit, contain only a-z 0-9 -',
});
export type ModuleId = z.infer<typeof ModuleId>;

export const FrameworkId = ModuleId.brand<'FrameworkId'>();
export type FrameworkId = z.infer<typeof FrameworkId>;

export const Language = z.enum(['js', 'py', 'go', 'rust']);
export type Language = z.infer<typeof Language>;

export const PM_BY_LANGUAGE = {
  js: ['pnpm', 'npm', 'yarn', 'bun'],
  py: ['pip', 'uv', 'poetry'],
  go: ['go'],
  rust: ['cargo'],
} as const satisfies Record<Language, ReadonlyArray<string>>;

export const PackageManager = z.enum([
  'pnpm',
  'npm',
  'yarn',
  'bun',
  'pip',
  'uv',
  'poetry',
  'go',
  'cargo',
]);
export type PackageManager = z.infer<typeof PackageManager>;

export function pmsForLanguage(lang: Language): ReadonlyArray<PackageManager> {
  return PM_BY_LANGUAGE[lang] as ReadonlyArray<PackageManager>;
}

export function languageForPm(pm: PackageManager): Language {
  for (const lang of ['js', 'py', 'go', 'rust'] as const) {
    if ((PM_BY_LANGUAGE[lang] as ReadonlyArray<string>).includes(pm)) return lang;
  }
  throw new Error(`Unknown package manager: ${pm}`);
}

export const Shell = z.enum(['bash', 'pwsh']);
export type Shell = z.infer<typeof Shell>;

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
  'database',
  'orm',
  'http',
  'email',
  'payments',
  'storage',
  'queue',
  'ai',
  'logging',
  'monitoring',
  'validation',
  'animation',
  'charts',
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
