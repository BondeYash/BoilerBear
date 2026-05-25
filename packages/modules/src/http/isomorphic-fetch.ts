import type { ModuleManifest } from '@boilerbear/core';

export const isomorphicFetch: ModuleManifest = {
  id: 'isomorphic-fetch',
  name: 'isomorphic-fetch',
  category: 'http',
  tags: ['fetch', 'polyfill', 'isomorphic'],
  description: 'Fetch polyfill that runs in both Node and the browser.',
  homepage: 'https://github.com/matthew-andrews/isomorphic-fetch',
  license: 'MIT',
  popularity: 8_000_000,
  versions: { range: '^3.0.0', min: '3.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'isomorphic-fetch', version: '^3.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [{ id: 'cross-fetch', severity: 'warning', reason: 'Pick one isomorphic fetch.' }],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['matthew-andrews'],
  docs: { quickstart: 'https://github.com/matthew-andrews/isomorphic-fetch#installation' },
};
