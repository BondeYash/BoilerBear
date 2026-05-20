import type { ModuleManifest } from '@boilerbear/core';

export const swr: ModuleManifest = {
  id: 'swr',
  name: 'SWR',
  category: 'data',
  tags: ['data', 'cache', 'react', 'vercel'],
  description: 'React Hooks for data fetching with caching and revalidation.',
  homepage: 'https://swr.vercel.app',
  license: 'MIT',
  popularity: 2_300_000,
  versions: { range: '^2.2.0', min: '2.2.0' },
  packages: {
    deps: [{ name: 'swr', version: '^2.2.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [{ id: 'tanstack-query', severity: 'warning' }],
  recommends: [],
  appliesTo: ['vite', 'next'],
  setup: [],
  maintainers: ['vercel'],
  docs: { quickstart: 'https://swr.vercel.app/docs/getting-started' },
};
