import type { ModuleManifest } from '@boilerbear/core';

export const nuxtUi: ModuleManifest = {
  id: 'nuxt-ui',
  name: 'Nuxt UI',
  category: 'styling',
  tags: ['ui', 'components', 'nuxt'],
  description: 'Fully styled and customizable component library for Nuxt.',
  homepage: 'https://ui.nuxt.com',
  license: 'MIT',
  popularity: 400_000,
  versions: { range: '^2.19.0', min: '2.19.0' },
  languages: ['js'],
  packages: {
    deps: [],
    devDeps: [{ name: '@nuxt/ui', version: '^2.19.0' }],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['nuxt'],
  setup: [],
  maintainers: ['nuxt'],
  docs: { quickstart: 'https://ui.nuxt.com/getting-started/installation' },
};
