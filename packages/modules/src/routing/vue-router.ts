import type { ModuleManifest } from '@boilerbear/core';

export const vueRouter: ModuleManifest = {
  id: 'vue-router',
  name: 'Vue Router',
  category: 'routing',
  tags: ['router', 'vue', 'spa'],
  description: 'Official client-side router for Vue.',
  homepage: 'https://router.vuejs.org',
  license: 'MIT',
  popularity: 5_200_000,
  versions: { range: '^4.4.0', min: '4.4.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'vue-router', version: '^4.4.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['vue'],
  setup: [],
  maintainers: ['vuejs'],
  docs: { quickstart: 'https://router.vuejs.org/guide/' },
};
