import type { ModuleManifest } from '@boilerbear/core';

export const sparkpost: ModuleManifest = {
  id: 'sparkpost',
  name: 'SparkPost',
  category: 'email',
  tags: ['email', 'transactional', 'sparkpost'],
  description: 'Official SparkPost Node.js client.',
  homepage: 'https://www.sparkpost.com',
  license: 'Apache-2.0',
  popularity: 60_000,
  versions: { range: '^2.3.0', min: '2.3.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'sparkpost', version: '^2.3.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [{ kind: 'envVar', key: 'SPARKPOST_API_KEY', example: 'xxx', required: true }],
  maintainers: ['SparkPost'],
  docs: { quickstart: 'https://github.com/SparkPost/node-sparkpost#getting-started' },
};
