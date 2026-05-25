import type { ModuleManifest } from '@boilerbear/core';

export const pg: ModuleManifest = {
  id: 'pg',
  name: 'node-postgres (pg)',
  category: 'database',
  tags: ['postgres', 'driver', 'sql'],
  description: 'Non-blocking PostgreSQL client for Node.js.',
  homepage: 'https://node-postgres.com',
  license: 'MIT',
  popularity: 8_000_000,
  versions: { range: '^8.13.0', min: '8.13.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'pg', version: '^8.13.0' }],
    devDeps: [{ name: '@types/pg', version: '^8.11.0' }],
  },
  requires: [],
  conflicts: [
    { id: 'slonik', severity: 'warning', reason: 'Slonik wraps pg — usually one or the other.' },
  ],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['brianc'],
  docs: { quickstart: 'https://node-postgres.com/features/queries' },
};
