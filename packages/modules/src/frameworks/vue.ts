import type { ModuleManifest } from '@boilerbear/core';

export const vue: ModuleManifest = {
  id: 'vue',
  name: 'Vue',
  category: 'framework',
  tags: ['vue', 'spa'],
  description: 'Progressive JavaScript framework for building user interfaces.',
  homepage: 'https://vuejs.org',
  license: 'MIT',
  popularity: 6_000_000,
  versions: { range: '^3.5.0', min: '3.5.0' },
  languages: ['js'],
  packages: { deps: [], devDeps: [] },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  framework: {
    template: 'vue-ts',
    createCommand: '{pm} create vue@latest {name}',
  },
  setup: [],
  maintainers: ['vuejs'],
  docs: { quickstart: 'https://vuejs.org/guide/quick-start.html' },
};
