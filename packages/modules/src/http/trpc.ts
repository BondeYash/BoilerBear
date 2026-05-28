import type { ModuleManifest } from '@boilerbear/core';

export const trpc: ModuleManifest = {
  id: 'trpc',
  name: 'tRPC',
  category: 'http',
  tags: ['rpc', 'typesafe', 'api'],
  description: 'End-to-end typesafe APIs without schemas or codegen.',
  homepage: 'https://trpc.io',
  license: 'MIT',
  popularity: 1_200_000,
  versions: { range: '^11.0.0-rc.0', min: '11.0.0-rc.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: '@trpc/server', version: '^11.0.0-rc.0' },
      { name: '@trpc/client', version: '^11.0.0-rc.0' },
      { name: '@trpc/react-query', version: '^11.0.0-rc.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['next'],
  setup: [],
  maintainers: ['trpc'],
  docs: { quickstart: 'https://trpc.io/docs/quickstart' },
};
