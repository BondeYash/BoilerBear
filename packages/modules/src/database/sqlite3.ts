import type { ModuleManifest } from '@boilerbear/core';

export const sqlite3: ModuleManifest = {
  id: 'sqlite3',
  name: 'sqlite3',
  category: 'database',
  tags: ['sqlite', 'embedded', 'async'],
  description: 'Asynchronous, non-blocking SQLite3 bindings for Node.js.',
  homepage: 'https://github.com/TryGhost/node-sqlite3',
  license: 'BSD-3-Clause',
  popularity: 2_500_000,
  versions: { range: '^5.1.7', min: '5.1.7' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'sqlite3', version: '^5.1.7' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [{ id: 'better-sqlite3', severity: 'warning', reason: 'Pick one SQLite binding.' }],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['TryGhost'],
  docs: { quickstart: 'https://github.com/TryGhost/node-sqlite3/wiki/API' },
};
