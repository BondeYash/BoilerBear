import type { ModuleManifest } from '@boilerbear/core';

export const neo4jDriver: ModuleManifest = {
  id: 'neo4j-driver',
  name: 'Neo4j Driver',
  category: 'database',
  tags: ['neo4j', 'graph', 'cypher'],
  description: 'Official Neo4j graph database driver for JavaScript.',
  homepage: 'https://neo4j.com/docs/javascript-manual',
  license: 'Apache-2.0',
  popularity: 280_000,
  versions: { range: '^5.25.0', min: '5.25.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'neo4j-driver', version: '^5.25.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['neo4j'],
  docs: { quickstart: 'https://neo4j.com/docs/javascript-manual/current/' },
};
