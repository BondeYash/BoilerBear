import type { ModuleManifest } from '@boilerbear/core';

export const ofetch: ModuleManifest = {
  id: 'ofetch',
  name: 'ofetch',
  category: 'http',
  tags: ['fetch', 'http', 'nuxt'],
  description: 'A better fetch API. Works on Node, browser, and workers.',
  homepage: 'https://github.com/unjs/ofetch',
  license: 'MIT',
  popularity: 4_200_000,
  versions: { range: '^1.4.0', min: '1.4.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'ofetch', version: '^1.4.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['unjs'],
  docs: { quickstart: 'https://github.com/unjs/ofetch#usage' },
};
