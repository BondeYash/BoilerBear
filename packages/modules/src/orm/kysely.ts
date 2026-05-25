import type { ModuleManifest } from '@boilerbear/core';

export const kysely: ModuleManifest = {
  id: 'kysely',
  name: 'Kysely',
  category: 'orm',
  tags: ['query-builder', 'typescript', 'sql'],
  description: 'Type-safe SQL query builder for TypeScript with zero runtime overhead.',
  homepage: 'https://kysely.dev',
  license: 'MIT',
  popularity: 850_000,
  versions: { range: '^0.27.0', min: '0.27.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'kysely', version: '^0.27.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [{ id: 'knex', severity: 'warning', reason: 'Pick one SQL query builder.' }],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['koskimas'],
  docs: { quickstart: 'https://kysely.dev/docs/getting-started' },
};
