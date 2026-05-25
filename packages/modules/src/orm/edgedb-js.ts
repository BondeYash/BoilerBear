import type { ModuleManifest } from '@boilerbear/core';

export const edgedbJs: ModuleManifest = {
  id: 'edgedb-js',
  name: 'EdgeDB JS',
  category: 'orm',
  tags: ['edgedb', 'gel', 'graph', 'typescript'],
  description: 'Official JavaScript / TypeScript client and query builder for EdgeDB.',
  homepage: 'https://www.edgedb.com/docs/clients/js/index',
  license: 'Apache-2.0',
  popularity: 60_000,
  versions: { range: '^1.5.0', min: '1.5.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'edgedb', version: '^1.5.0' }],
    devDeps: [{ name: '@edgedb/generate', version: '^0.5.0' }],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['edgedb'],
  docs: { quickstart: 'https://www.edgedb.com/docs/clients/js/index' },
};
