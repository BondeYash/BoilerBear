import type { ModuleManifest } from '@boilerbear/core';

export const crossFetch: ModuleManifest = {
  id: 'cross-fetch',
  name: 'cross-fetch',
  category: 'http',
  tags: ['fetch', 'polyfill', 'isomorphic'],
  description: 'Universal WHATWG Fetch API for Node, browser, and React Native.',
  homepage: 'https://github.com/lquixada/cross-fetch',
  license: 'MIT',
  popularity: 20_000_000,
  versions: { range: '^4.0.0', min: '4.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'cross-fetch', version: '^4.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [
    { id: 'isomorphic-fetch', severity: 'warning', reason: 'Pick one isomorphic fetch.' },
  ],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['lquixada'],
  docs: { quickstart: 'https://github.com/lquixada/cross-fetch#usage' },
};
