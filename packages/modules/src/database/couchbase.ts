import type { ModuleManifest } from '@boilerbear/core';

export const couchbase: ModuleManifest = {
  id: 'couchbase',
  name: 'Couchbase Node SDK',
  category: 'database',
  tags: ['couchbase', 'nosql', 'document'],
  description: 'Official Couchbase SDK for Node.js.',
  homepage: 'https://docs.couchbase.com/nodejs-sdk/current',
  license: 'Apache-2.0',
  popularity: 120_000,
  versions: { range: '^4.4.0', min: '4.4.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'couchbase', version: '^4.4.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['couchbase'],
  docs: {
    quickstart: 'https://docs.couchbase.com/nodejs-sdk/current/hello-world/start-using-sdk.html',
  },
};
