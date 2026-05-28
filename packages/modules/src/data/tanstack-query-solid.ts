import type { ModuleManifest } from '@boilerbear/core';

export const tanstackQuerySolid: ModuleManifest = {
  id: 'tanstack-query-solid',
  name: 'TanStack Query (Solid)',
  category: 'data',
  tags: ['data', 'cache', 'solid', 'async'],
  description: 'Async state and server cache for Solid.',
  homepage: 'https://tanstack.com/query/latest/docs/framework/solid/overview',
  license: 'MIT',
  popularity: 150_000,
  versions: { range: '^5.59.0', min: '5.59.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@tanstack/solid-query', version: '^5.59.0' }],
    devDeps: [{ name: '@tanstack/solid-query-devtools', version: '^5.59.0' }],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['solid', 'solid-start'],
  setup: [],
  maintainers: ['tannerlinsley'],
  docs: { quickstart: 'https://tanstack.com/query/latest/docs/framework/solid/overview' },
};
