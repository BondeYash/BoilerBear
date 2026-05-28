import type { ModuleManifest } from '@boilerbear/core';

export const vercel: ModuleManifest = {
  id: 'vercel',
  name: 'Vercel',
  category: 'deploy',
  tags: ['deploy', 'edge', 'serverless'],
  description: 'Zero-config deployment platform with preview URLs and edge runtime.',
  homepage: 'https://vercel.com',
  license: 'Proprietary',
  popularity: 9_000_000,
  versions: { range: '^37.0.0', min: '37.0.0' },
  languages: ['js'],
  packages: {
    deps: [],
    devDeps: [{ name: 'vercel', version: '^37.0.0' }],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['react', 'next', 'vite', 'vue', 'svelte', 'solid', 'preact', 'lit'],
  setup: [],
  maintainers: ['vercel'],
  docs: { quickstart: 'https://vercel.com/docs/getting-started-with-vercel' },
};
