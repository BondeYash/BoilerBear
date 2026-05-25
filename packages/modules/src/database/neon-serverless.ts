import type { ModuleManifest } from '@boilerbear/core';

export const neonServerless: ModuleManifest = {
  id: 'neon-serverless',
  name: 'Neon Serverless Driver',
  category: 'database',
  tags: ['neon', 'postgres', 'serverless', 'edge'],
  description: 'Edge-compatible Postgres driver for Neon over WebSockets / HTTP.',
  homepage: 'https://neon.tech/docs/serverless/serverless-driver',
  license: 'MIT',
  popularity: 280_000,
  versions: { range: '^0.10.0', min: '0.10.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@neondatabase/serverless', version: '^0.10.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [{ kind: 'envVar', key: 'DATABASE_URL', example: 'postgres://...', required: true }],
  maintainers: ['neondatabase'],
  docs: { quickstart: 'https://neon.tech/docs/serverless/serverless-driver' },
};
