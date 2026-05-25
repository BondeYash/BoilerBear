import type { ModuleManifest } from '@boilerbear/core';

export const nodeRedis: ModuleManifest = {
  id: 'node-redis',
  name: 'node-redis',
  category: 'database',
  tags: ['redis', 'cache', 'kv'],
  description: 'Official Redis client for Node.js.',
  homepage: 'https://github.com/redis/node-redis',
  license: 'MIT',
  popularity: 7_000_000,
  versions: { range: '^4.7.0', min: '4.7.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'redis', version: '^4.7.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [{ id: 'ioredis', severity: 'warning', reason: 'Pick one Redis client.' }],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['redis'],
  docs: { quickstart: 'https://redis.io/docs/latest/develop/connect/clients/nodejs' },
};
