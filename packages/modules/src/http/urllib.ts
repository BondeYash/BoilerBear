import type { ModuleManifest } from '@boilerbear/core';

export const urllib: ModuleManifest = {
  id: 'urllib',
  name: 'urllib',
  category: 'http',
  tags: ['http', 'node', 'enterprise'],
  description: 'Help in opening URLs (mostly HTTP) in a complex world.',
  homepage: 'https://github.com/node-modules/urllib',
  license: 'MIT',
  popularity: 600_000,
  versions: { range: '^4.4.0', min: '4.4.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'urllib', version: '^4.4.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['node-modules'],
  docs: { quickstart: 'https://github.com/node-modules/urllib#usage' },
};
