import type { ModuleManifest } from '@boilerbear/core';

export const knex: ModuleManifest = {
  id: 'knex',
  name: 'Knex.js',
  category: 'orm',
  tags: ['query-builder', 'sql', 'migrations'],
  description: 'Batteries-included SQL query builder for Postgres, MySQL, SQLite, and more.',
  homepage: 'https://knexjs.org',
  license: 'MIT',
  popularity: 3_800_000,
  versions: { range: '^3.1.0', min: '3.1.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'knex', version: '^3.1.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [{ id: 'kysely', severity: 'warning', reason: 'Pick one SQL query builder.' }],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['knex'],
  docs: { quickstart: 'https://knexjs.org/guide/' },
};
