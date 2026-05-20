import { z } from 'zod';

const RelativePath = z
  .string()
  .min(1)
  .refine((p) => !p.startsWith('/') && !p.includes('..'), {
    message: 'Setup paths must be relative and may not contain "..".',
  });

export const WriteFileStep = z.object({
  kind: z.literal('writeFile'),
  path: RelativePath,
  content: z.string(),
  ifMissing: z.boolean().default(false),
});
export type WriteFileStep = z.infer<typeof WriteFileStep>;

export const PatchJsonStep = z.object({
  kind: z.literal('patchJson'),
  path: RelativePath,
  patch: z.record(z.unknown()),
});
export type PatchJsonStep = z.infer<typeof PatchJsonStep>;

export const AppendScriptStep = z.object({
  kind: z.literal('appendScript'),
  name: z.string().min(1),
  script: z.string().min(1),
});
export type AppendScriptStep = z.infer<typeof AppendScriptStep>;

export const EnvVarStep = z.object({
  kind: z.literal('envVar'),
  key: z
    .string()
    .min(1)
    .regex(/^[A-Z][A-Z0-9_]*$/),
  example: z.string().default(''),
  required: z.boolean().default(false),
});
export type EnvVarStep = z.infer<typeof EnvVarStep>;

export const ShellStep = z.object({
  kind: z.literal('shell'),
  command: z.string().min(1),
  when: z.enum(['preInstall', 'postInstall']).default('postInstall'),
});
export type ShellStep = z.infer<typeof ShellStep>;

export const SetupStep = z.discriminatedUnion('kind', [
  WriteFileStep,
  PatchJsonStep,
  AppendScriptStep,
  EnvVarStep,
  ShellStep,
]);
export type SetupStep = z.infer<typeof SetupStep>;
