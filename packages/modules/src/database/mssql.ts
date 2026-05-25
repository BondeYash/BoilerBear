import type { ModuleManifest } from '@boilerbear/core';

export const mssql: ModuleManifest = {
  id: 'mssql',
  name: 'node-mssql',
  category: 'database',
  tags: ['mssql', 'sqlserver', 'tds'],
  description: 'Microsoft SQL Server client for Node.js built on tedious.',
  homepage: 'https://github.com/tediousjs/node-mssql',
  license: 'MIT',
  popularity: 1_200_000,
  versions: { range: '^11.0.0', min: '11.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'mssql', version: '^11.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['tediousjs'],
  docs: { quickstart: 'https://github.com/tediousjs/node-mssql#example' },
};
