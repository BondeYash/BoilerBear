import type { ModuleManifest } from '@boilerbear/core';

export const tanstackQuery: ModuleManifest = {
  id: 'tanstack-query',
  name: 'TanStack Query',
  category: 'data',
  tags: ['data', 'cache', 'react'],
  description: 'Async state and server cache for React.',
  homepage: 'https://tanstack.com/query',
  license: 'MIT',
  popularity: 7_400_000,
  versions: { range: '^5.59.0', min: '5.59.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@tanstack/react-query', version: '^5.59.0' }],
    devDeps: [{ name: '@tanstack/react-query-devtools', version: '^5.59.0' }],
  },
  requires: [],
  conflicts: [{ id: 'swr', severity: 'warning', reason: 'Pick one server-cache library.' }],
  recommends: [],
  appliesTo: ['vite', 'next'],
  setup: [],
  maintainers: ['tannerlinsley'],
  docs: { quickstart: 'https://tanstack.com/query/latest/docs/framework/react/quick-start' },
};
