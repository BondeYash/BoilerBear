import type { ModuleManifest } from '@boilerbear/core';

export const ottoman: ModuleManifest = {
  id: 'ottoman',
  name: 'Ottoman',
  category: 'orm',
  tags: ['couchbase', 'odm'],
  description: 'Schema-based ODM for Couchbase.',
  homepage: 'https://ottomanjs.com',
  license: 'Apache-2.0',
  popularity: 12_000,
  versions: { range: '^2.4.0', min: '2.4.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'ottoman', version: '^2.4.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [{ id: 'couchbase', reason: 'Ottoman runs against the Couchbase SDK.' }],
  appliesTo: [],
  setup: [],
  maintainers: ['couchbaselabs'],
  docs: { quickstart: 'https://ottomanjs.com/guides/getting-started.html' },
};
