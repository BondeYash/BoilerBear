import type { ModuleManifest } from '@boilerbear/core';

export const sveltekitSuperforms: ModuleManifest = {
  id: 'sveltekit-superforms',
  name: 'SvelteKit Superforms',
  category: 'validation',
  tags: ['forms', 'validation', 'sveltekit'],
  description: 'Powerful form library for SvelteKit with end-to-end type safety and validation.',
  homepage: 'https://superforms.rocks',
  license: 'MIT',
  popularity: 150_000,
  versions: { range: '^2.20.0', min: '2.20.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'sveltekit-superforms', version: '^2.20.0' },
      { name: 'zod', version: '^3.23.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [{ id: 'zod', reason: 'Validate Superforms with Zod schemas.' }],
  appliesTo: ['sveltekit'],
  setup: [],
  maintainers: ['ciscoheat'],
  docs: { quickstart: 'https://superforms.rocks/get-started' },
};
