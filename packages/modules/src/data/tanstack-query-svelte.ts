import type { ModuleManifest } from '@boilerbear/core';

export const tanstackQuerySvelte: ModuleManifest = {
  id: 'tanstack-query-svelte',
  name: 'TanStack Query (Svelte)',
  category: 'data',
  tags: ['data', 'cache', 'async', 'svelte'],
  description: 'Powerful asynchronous state management and server-state utilities for Svelte.',
  homepage: 'https://tanstack.com/query/latest/docs/framework/svelte/overview',
  license: 'MIT',
  popularity: 500_000,
  versions: { range: '^5.59.0', min: '5.59.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@tanstack/svelte-query', version: '^5.59.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['svelte'],
  setup: [],
  maintainers: ['tannerlinsley'],
  docs: { quickstart: 'https://tanstack.com/query/latest/docs/framework/svelte/overview' },
};
