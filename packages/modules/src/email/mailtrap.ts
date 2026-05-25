import type { ModuleManifest } from '@boilerbear/core';

export const mailtrap: ModuleManifest = {
  id: 'mailtrap',
  name: 'Mailtrap',
  category: 'email',
  tags: ['email', 'testing', 'sandbox'],
  description: 'Official Mailtrap Node.js client for sending and testing transactional email.',
  homepage: 'https://mailtrap.io',
  license: 'MIT',
  popularity: 90_000,
  versions: { range: '^3.5.0', min: '3.5.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'mailtrap', version: '^3.5.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [{ kind: 'envVar', key: 'MAILTRAP_API_TOKEN', example: 'xxx', required: true }],
  maintainers: ['railsware'],
  docs: { quickstart: 'https://github.com/railsware/mailtrap-nodejs#installation' },
};
