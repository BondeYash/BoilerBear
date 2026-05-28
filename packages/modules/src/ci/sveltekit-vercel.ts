import type { ModuleManifest } from '@boilerbear/core';

export const sveltekitVercel: ModuleManifest = {
  id: 'sveltekit-vercel',
  name: 'SvelteKit Vercel Adapter',
  category: 'ci',
  tags: ['deploy', 'vercel', 'sveltekit'],
  description: 'SvelteKit adapter for deploying to Vercel with edge and serverless support.',
  homepage: 'https://kit.svelte.dev/docs/adapter-vercel',
  license: 'MIT',
  popularity: 400_000,
  versions: { range: '^5.4.0', min: '5.4.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@sveltejs/adapter-vercel', version: '^5.4.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['sveltekit'],
  setup: [],
  maintainers: ['sveltejs'],
  docs: { quickstart: 'https://kit.svelte.dev/docs/adapter-vercel' },
};
