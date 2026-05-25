import type { ModuleManifest } from '@boilerbear/core';

export const phin: ModuleManifest = {
  id: 'phin',
  name: 'phin',
  category: 'http',
  tags: ['http', 'tiny', 'node'],
  description: 'The ultra-lightweight Node.js HTTP client.',
  homepage: 'https://github.com/ethanent/phin',
  license: 'MIT',
  popularity: 800_000,
  versions: { range: '^3.7.1', min: '3.7.1' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'phin', version: '^3.7.1' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['ethanent'],
  docs: { quickstart: 'https://github.com/ethanent/phin#usage' },
};
