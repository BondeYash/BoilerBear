import type { ModuleManifest } from '@boilerbear/core';

export const ioredis: ModuleManifest = {
  id: 'ioredis',
  name: 'ioredis',
  category: 'database',
  tags: ['redis', 'cluster', 'sentinel'],
  description: 'Robust Redis client with built-in cluster and Sentinel support.',
  homepage: 'https://github.com/redis/ioredis',
  license: 'MIT',
  popularity: 6_000_000,
  versions: { range: '^5.4.0', min: '5.4.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'ioredis', version: '^5.4.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [{ id: 'node-redis', severity: 'warning', reason: 'Pick one Redis client.' }],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['redis'],
  docs: { quickstart: 'https://github.com/redis/ioredis#quick-start' },
};
