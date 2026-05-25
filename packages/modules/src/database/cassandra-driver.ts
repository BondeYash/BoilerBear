import type { ModuleManifest } from '@boilerbear/core';

export const cassandraDriver: ModuleManifest = {
  id: 'cassandra-driver',
  name: 'DataStax Cassandra Driver',
  category: 'database',
  tags: ['cassandra', 'scylla', 'distributed'],
  description: 'Apache Cassandra and ScyllaDB driver for Node.js.',
  homepage: 'https://github.com/datastax/nodejs-driver',
  license: 'Apache-2.0',
  popularity: 350_000,
  versions: { range: '^4.7.0', min: '4.7.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'cassandra-driver', version: '^4.7.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['datastax'],
  docs: {
    quickstart: 'https://docs.datastax.com/en/developer/nodejs-driver/latest/getting-started/',
  },
};
