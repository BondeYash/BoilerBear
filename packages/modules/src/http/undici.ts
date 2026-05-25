import type { ModuleManifest } from '@boilerbear/core';

export const undici: ModuleManifest = {
  id: 'undici',
  name: 'undici',
  category: 'http',
  tags: ['http', 'fetch', 'node', 'fast'],
  description: 'High-performance HTTP/1.1 client written from scratch for Node.js.',
  homepage: 'https://undici.nodejs.org',
  license: 'MIT',
  popularity: 35_000_000,
  versions: { range: '^6.20.0', min: '6.20.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'undici', version: '^6.20.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['nodejs'],
  docs: { quickstart: 'https://undici.nodejs.org/#/' },
};
