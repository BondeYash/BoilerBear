import type { ModuleManifest } from '@boilerbear/core';

export const betterSqlite3: ModuleManifest = {
  id: 'better-sqlite3',
  name: 'better-sqlite3',
  category: 'database',
  tags: ['sqlite', 'embedded', 'sync'],
  description: 'Fastest synchronous SQLite3 binding for Node.js.',
  homepage: 'https://github.com/WiseLibs/better-sqlite3',
  license: 'MIT',
  popularity: 3_500_000,
  versions: { range: '^11.3.0', min: '11.3.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'better-sqlite3', version: '^11.3.0' }],
    devDeps: [{ name: '@types/better-sqlite3', version: '^7.6.0' }],
  },
  requires: [],
  conflicts: [{ id: 'sqlite3', severity: 'warning', reason: 'Pick one SQLite binding.' }],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['WiseLibs'],
  docs: { quickstart: 'https://github.com/WiseLibs/better-sqlite3/blob/master/docs/api.md' },
};
