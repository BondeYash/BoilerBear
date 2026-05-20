import { z } from 'zod';
import { Category, ModuleId, ModuleRef, PkgSpec } from './refs.js';
import { SetupStep } from './steps.js';

export const OptionDef = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('boolean'),
    label: z.string(),
    description: z.string().optional(),
    default: z.boolean().default(false),
  }),
  z.object({
    type: z.literal('select'),
    label: z.string(),
    description: z.string().optional(),
    choices: z.array(z.object({ value: z.string(), label: z.string() })).min(1),
    default: z.string(),
  }),
  z.object({
    type: z.literal('multiselect'),
    label: z.string(),
    description: z.string().optional(),
    choices: z.array(z.object({ value: z.string(), label: z.string() })).min(1),
    default: z.array(z.string()).default([]),
  }),
]);
export type OptionDef = z.infer<typeof OptionDef>;

export const FrameworkInit = z.object({
  template: z.string().min(1),
  createCommand: z
    .string()
    .min(1)
    .describe('e.g. "npm create vite@latest {name} -- --template react-ts"'),
});
export type FrameworkInit = z.infer<typeof FrameworkInit>;

export const Versions = z.object({
  range: z.string().min(1),
  min: z.string().min(1),
});
export type Versions = z.infer<typeof Versions>;

export const ModuleManifest = z.object({
  id: ModuleId,
  name: z.string().min(1),
  category: Category,
  tags: z.array(z.string()).default([]),
  description: z.string().min(1),
  homepage: z.string().url(),
  license: z.string().default('MIT'),
  popularity: z.number().int().nonnegative().optional(),
  versions: Versions,
  packages: z
    .object({
      deps: z.array(PkgSpec).default([]),
      devDeps: z.array(PkgSpec).default([]),
    })
    .default({ deps: [], devDeps: [] }),
  requires: z.array(ModuleRef).default([]),
  conflicts: z.array(ModuleRef).default([]),
  recommends: z.array(ModuleRef).default([]),
  appliesTo: z.array(ModuleId).default([]),
  framework: FrameworkInit.optional(),
  options: z.record(OptionDef).optional(),
  setup: z.array(SetupStep).default([]),
  docs: z
    .object({
      quickstart: z.string().url(),
      examples: z.array(z.string().url()).optional(),
    })
    .optional(),
  maintainers: z.array(z.string()).default([]),
});
export type ModuleManifest = z.infer<typeof ModuleManifest>;
