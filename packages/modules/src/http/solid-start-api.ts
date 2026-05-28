import type { ModuleManifest } from '@boilerbear/core';

export const solidStartApi: ModuleManifest = {
  id: 'solid-start-api',
  name: 'SolidStart API Routes',
  category: 'http',
  tags: ['api', 'http', 'solid-start', 'ssr'],
  description: 'File-based API routes and server functions for SolidStart.',
  homepage: 'https://docs.solidjs.com/solid-start/building-your-application/api-routes',
  license: 'MIT',
  popularity: 100_000,
  versions: { range: '^1.0.0', min: '1.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@solidjs/start', version: '^1.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['solid-start'],
  setup: [],
  maintainers: ['solidjs'],
  docs: {
    quickstart: 'https://docs.solidjs.com/solid-start/building-your-application/api-routes',
  },
};
