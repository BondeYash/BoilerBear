import type { ModuleManifest } from '@boilerbear/core';

export const nuxtDevtools: ModuleManifest = {
  id: 'nuxt-devtools',
  name: 'Nuxt DevTools',
  category: 'components',
  tags: ['devtools', 'debug', 'nuxt'],
  description: 'In-app devtools for inspecting and debugging Nuxt applications.',
  homepage: 'https://devtools.nuxt.com',
  license: 'MIT',
  popularity: 1_200_000,
  versions: { range: '^1.6.0', min: '1.6.0' },
  languages: ['js'],
  packages: {
    deps: [],
    devDeps: [{ name: '@nuxt/devtools', version: '^1.6.0' }],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['nuxt'],
  setup: [],
  maintainers: ['nuxt'],
  docs: { quickstart: 'https://devtools.nuxt.com/guide/getting-started' },
};
