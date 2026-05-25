import type { ModuleManifest } from '@boilerbear/core';

export const nodeFetch: ModuleManifest = {
  id: 'node-fetch',
  name: 'node-fetch',
  category: 'http',
  tags: ['fetch', 'http'],
  description: 'A light-weight module that brings the Fetch API to Node.js.',
  homepage: 'https://github.com/node-fetch/node-fetch',
  license: 'MIT',
  popularity: 50_000_000,
  versions: { range: '^3.3.2', min: '3.3.2' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'node-fetch', version: '^3.3.2' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [{ id: 'cross-fetch', severity: 'warning', reason: 'Pick one fetch polyfill.' }],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['node-fetch'],
  docs: { quickstart: 'https://github.com/node-fetch/node-fetch#common-usage' },
};
