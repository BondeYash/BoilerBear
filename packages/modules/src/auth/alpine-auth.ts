import type { ModuleManifest } from '@boilerbear/core';

export const alpineAuth: ModuleManifest = {
  id: 'alpine-auth',
  name: 'Alpine Auth',
  category: 'auth',
  tags: ['auth', 'session', 'alpine'],
  description: 'Lightweight client-side auth helpers for Alpine.js apps.',
  homepage: 'https://alpinejs.dev',
  license: 'MIT',
  popularity: 30_000,
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
  docs: { quickstart: 'https://alpinejs.dev' },
};
