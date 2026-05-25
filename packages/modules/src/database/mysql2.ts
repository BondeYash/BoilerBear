import type { ModuleManifest } from '@boilerbear/core';

export const mysql2: ModuleManifest = {
  id: 'mysql2',
  name: 'mysql2',
  category: 'database',
  tags: ['mysql', 'mariadb', 'driver'],
  description: 'Fast MySQL/MariaDB driver for Node.js with prepared statements and pool support.',
  homepage: 'https://sidorares.github.io/node-mysql2',
  license: 'MIT',
  popularity: 5_500_000,
  versions: { range: '^3.11.0', min: '3.11.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'mysql2', version: '^3.11.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['sidorares'],
  docs: { quickstart: 'https://sidorares.github.io/node-mysql2/docs' },
};
