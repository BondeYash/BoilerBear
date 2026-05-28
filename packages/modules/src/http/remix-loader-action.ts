import type { ModuleManifest } from '@boilerbear/core';

export const remixLoaderAction: ModuleManifest = {
  id: 'remix-loader-action',
  name: 'Remix Loaders & Actions',
  category: 'http',
  tags: ['http', 'server', 'remix'],
  description: 'Server runtime utilities for Remix loaders, actions, and responses.',
  homepage: 'https://remix.run/docs/en/main/route/loader',
  license: 'MIT',
  popularity: 1_500_000,
  versions: { range: '^2.14.0', min: '2.14.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@remix-run/node', version: '^2.14.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['remix'],
  setup: [],
  maintainers: ['remix-run'],
  docs: { quickstart: 'https://remix.run/docs/en/main/route/loader' },
};
