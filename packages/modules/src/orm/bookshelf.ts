import type { ModuleManifest } from '@boilerbear/core';

export const bookshelf: ModuleManifest = {
  id: 'bookshelf',
  name: 'Bookshelf.js',
  category: 'orm',
  tags: ['orm', 'knex', 'sql', 'activerecord'],
  description: 'Active Record ORM for Node.js built on Knex.',
  homepage: 'https://bookshelfjs.org',
  license: 'MIT',
  popularity: 80_000,
  versions: { range: '^1.2.0', min: '1.2.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'bookshelf', version: '^1.2.0' },
      { name: 'knex', version: '^3.1.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [{ id: 'knex', reason: 'Bookshelf is built on Knex.' }],
  appliesTo: [],
  setup: [],
  maintainers: ['bookshelf'],
  docs: { quickstart: 'https://bookshelfjs.org/#Installation' },
};
