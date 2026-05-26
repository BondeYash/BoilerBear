import type { ModuleManifest } from '@boilerbear/core';

export const nuxt: ModuleManifest = {
  id: 'nuxt',
  name: 'Nuxt',
  category: 'framework',
  tags: ['nuxt', 'vue', 'ssr'],
  description: 'Vue meta-framework with file-based routing and Nitro server.',
  homepage: 'https://nuxt.com',
  license: 'MIT',
  popularity: 2_000_000,
  versions: { range: '^3.14.0', min: '3.14.0' },
  languages: ['js'],
  packages: { deps: [], devDeps: [] },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  framework: {
    template: 'nuxt-basic',
    createCommand: 'npx nuxi@latest init {name}',
  },
  setup: [],
  maintainers: ['nuxt'],
  docs: { quickstart: 'https://nuxt.com/docs/getting-started/installation' },
};
