import type { ModuleManifest } from '@boilerbear/core';

export const objection: ModuleManifest = {
  id: 'objection',
  name: 'Objection.js',
  category: 'orm',
  tags: ['orm', 'knex', 'sql'],
  description: 'SQL-friendly ORM built on top of Knex with graph fetching and relations.',
  homepage: 'https://vincit.github.io/objection.js',
  license: 'MIT',
  popularity: 410_000,
  versions: { range: '^3.1.4', min: '3.1.4' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'objection', version: '^3.1.4' },
      { name: 'knex', version: '^3.1.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [{ id: 'knex', reason: 'Objection sits on top of Knex.' }],
  appliesTo: [],
  setup: [],
  maintainers: ['Vincit'],
  docs: { quickstart: 'https://vincit.github.io/objection.js/guide/installation.html' },
};
