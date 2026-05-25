import type { ModuleManifest } from '@boilerbear/core';

export const planetscaleDatabase: ModuleManifest = {
  id: 'planetscale-database',
  name: 'PlanetScale Serverless Driver',
  category: 'database',
  tags: ['planetscale', 'mysql', 'serverless', 'edge'],
  description: 'Edge-compatible MySQL driver for PlanetScale over HTTP.',
  homepage: 'https://github.com/planetscale/database-js',
  license: 'Apache-2.0',
  popularity: 350_000,
  versions: { range: '^1.19.0', min: '1.19.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@planetscale/database', version: '^1.19.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [{ kind: 'envVar', key: 'DATABASE_URL', example: 'mysql://...', required: true }],
  maintainers: ['planetscale'],
  docs: { quickstart: 'https://planetscale.com/docs/tutorials/planetscale-serverless-driver' },
};
