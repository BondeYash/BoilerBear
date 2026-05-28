import type { ModuleManifest } from '@boilerbear/core';

export const alpineFetch: ModuleManifest = {
  id: 'alpine-fetch',
  name: 'Alpine Fetch',
  category: 'http',
  tags: ['http', 'fetch', 'alpine'],
  description: 'Fetch-based data loading patterns for Alpine.js components.',
  homepage: 'https://alpinejs.dev',
  license: 'MIT',
  popularity: 60_000,
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
