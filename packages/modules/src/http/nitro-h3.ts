import type { ModuleManifest } from '@boilerbear/core';

export const nitroH3: ModuleManifest = {
  id: 'nitro-h3',
  name: 'Nitro + H3',
  category: 'http',
  tags: ['http', 'server', 'nuxt'],
  description: 'Universal HTTP server framework and Nitro server engine powering Nuxt.',
  homepage: 'https://h3.unjs.io',
  license: 'MIT',
  popularity: 2_800_000,
  versions: { range: '^1.13.0', min: '1.13.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'h3', version: '^1.13.0' },
      { name: 'nitropack', version: '^2.10.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['nuxt'],
  setup: [],
  maintainers: ['unjs'],
  docs: { quickstart: 'https://h3.unjs.io/guide' },
};
