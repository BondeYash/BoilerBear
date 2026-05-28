import type { ModuleManifest } from '@boilerbear/core';

export const felte: ModuleManifest = {
  id: 'felte',
  name: 'Felte',
  category: 'validation',
  tags: ['forms', 'validation', 'svelte'],
  description: 'An extensible form library for Svelte with first-class validation support.',
  homepage: 'https://felte.dev',
  license: 'MIT',
  popularity: 50_000,
  versions: { range: '^1.2.14', min: '1.2.14' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'felte', version: '^1.2.14' },
      { name: '@felte/validator-zod', version: '^1.0.18' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [{ id: 'zod', reason: 'Validate Felte forms with Zod schemas.' }],
  appliesTo: ['svelte'],
  setup: [],
  maintainers: ['pablo-abc'],
  docs: { quickstart: 'https://felte.dev/docs/svelte/getting-started' },
};
