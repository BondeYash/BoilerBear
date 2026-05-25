import type { ModuleManifest } from '@boilerbear/core';

export const pouchdb: ModuleManifest = {
  id: 'pouchdb',
  name: 'PouchDB',
  category: 'database',
  tags: ['pouchdb', 'couchdb', 'offline-first'],
  description: 'In-browser and Node JavaScript database that syncs with CouchDB.',
  homepage: 'https://pouchdb.com',
  license: 'Apache-2.0',
  popularity: 420_000,
  versions: { range: '^9.0.0', min: '9.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'pouchdb', version: '^9.0.0' }],
    devDeps: [{ name: '@types/pouchdb', version: '^6.4.0' }],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['pouchdb'],
  docs: { quickstart: 'https://pouchdb.com/guides/' },
};
