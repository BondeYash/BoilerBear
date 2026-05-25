import type { ModuleManifest } from '@boilerbear/core';

export const nano: ModuleManifest = {
  id: 'nano',
  name: 'Nano (CouchDB)',
  category: 'database',
  tags: ['couchdb', 'driver'],
  description: 'Official Apache CouchDB driver for Node.js.',
  homepage: 'https://github.com/apache/couchdb-nano',
  license: 'Apache-2.0',
  popularity: 180_000,
  versions: { range: '^10.1.0', min: '10.1.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'nano', version: '^10.1.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['apache'],
  docs: { quickstart: 'https://github.com/apache/couchdb-nano#getting-started' },
};
