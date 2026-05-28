import type { ModuleManifest } from '@boilerbear/core';

export const nanostores: ModuleManifest = {
  id: 'nanostores',
  name: 'Nanostores',
  category: 'state',
  tags: ['state', 'store', 'tiny', 'svelte', 'astro'],
  description:
    'Tiny (334 bytes) state manager for React, Preact, Vue, Svelte, Solid, Lit, Angular, and vanilla JS.',
  homepage: 'https://github.com/nanostores/nanostores',
  license: 'MIT',
  popularity: 400_000,
  versions: { range: '^0.11.0', min: '0.11.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'nanostores', version: '^0.11.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['svelte', 'astro'],
  setup: [],
  maintainers: ['ai'],
  docs: { quickstart: 'https://github.com/nanostores/nanostores#guide' },
};
