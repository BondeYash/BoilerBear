import type { ModuleManifest } from '@boilerbear/core';

export const sequelize: ModuleManifest = {
  id: 'sequelize',
  name: 'Sequelize',
  category: 'orm',
  tags: ['orm', 'sql', 'promise'],
  description: 'Promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and MSSQL.',
  homepage: 'https://sequelize.org',
  license: 'MIT',
  popularity: 3_200_000,
  versions: { range: '^6.37.0', min: '6.37.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'sequelize', version: '^6.37.0' }],
    devDeps: [{ name: 'sequelize-cli', version: '^6.6.2' }],
  },
  requires: [],
  conflicts: [{ id: 'prisma', severity: 'warning', reason: 'Pick one ORM.' }],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['sequelize'],
  docs: { quickstart: 'https://sequelize.org/docs/v6/getting-started/' },
};
