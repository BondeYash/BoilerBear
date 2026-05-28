import type { ModuleManifest } from '@boilerbear/core';

export const pinia: ModuleManifest = {
  id: 'pinia',
  name: 'Pinia',
  category: 'state',
  tags: ['state', 'vue', 'store'],
  description: 'The intuitive store for Vue with TypeScript support and devtools.',
  homepage: 'https://pinia.vuejs.org',
  license: 'MIT',
  popularity: 4_500_000,
  versions: { range: '^2.2.0', min: '2.2.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'pinia', version: '^2.2.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['vue', 'nuxt'],
  setup: [],
  maintainers: ['posva'],
  docs: { quickstart: 'https://pinia.vuejs.org/getting-started.html' },
};
