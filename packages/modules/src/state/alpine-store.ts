import type { ModuleManifest } from '@boilerbear/core';

export const alpineStore: ModuleManifest = {
  id: 'alpine-store',
  name: 'Alpine Store',
  category: 'state',
  tags: ['state', 'store', 'alpine'],
  description: 'Global reactive store for Alpine.js using Alpine.store().',
  homepage: 'https://alpinejs.dev/globals/alpine-store',
  license: 'MIT',
  popularity: 100_000,
  versions: { range: '^3.14.0', min: '3.14.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'alpinejs', version: '^3.14.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['alpine'],
  setup: [],
  maintainers: ['alpinejs'],
  docs: { quickstart: 'https://alpinejs.dev/globals/alpine-store' },
};
