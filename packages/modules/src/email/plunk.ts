import type { ModuleManifest } from '@boilerbear/core';

export const plunk: ModuleManifest = {
  id: 'plunk',
  name: 'Plunk',
  category: 'email',
  tags: ['email', 'transactional', 'plunk'],
  description: 'Official Plunk Node SDK for transactional email and marketing automation.',
  homepage: 'https://www.useplunk.com',
  license: 'MIT',
  popularity: 8_000,
  versions: { range: '^3.0.0', min: '3.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@plunk/node', version: '^3.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [{ kind: 'envVar', key: 'PLUNK_API_KEY', example: 'sk_xxx', required: true }],
  maintainers: ['useplunk'],
  docs: { quickstart: 'https://docs.useplunk.com/api-reference/introduction' },
};
