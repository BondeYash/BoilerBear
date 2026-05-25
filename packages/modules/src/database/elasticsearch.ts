import type { ModuleManifest } from '@boilerbear/core';

export const elasticsearch: ModuleManifest = {
  id: 'elasticsearch',
  name: 'Elasticsearch Client',
  category: 'database',
  tags: ['elasticsearch', 'search', 'analytics'],
  description: 'Official Elasticsearch client for Node.js.',
  homepage:
    'https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html',
  license: 'Apache-2.0',
  popularity: 1_100_000,
  versions: { range: '^8.15.0', min: '8.15.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@elastic/elasticsearch', version: '^8.15.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['elastic'],
  docs: {
    quickstart:
      'https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/getting-started-js.html',
  },
};
