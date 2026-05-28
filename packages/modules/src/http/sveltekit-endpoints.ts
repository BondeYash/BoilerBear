import type { ModuleManifest } from '@boilerbear/core';

export const sveltekitEndpoints: ModuleManifest = {
  id: 'sveltekit-endpoints',
  name: 'SvelteKit Endpoints (+server)',
  category: 'http',
  tags: ['http', 'api', 'sveltekit'],
  description: 'Built-in server endpoints (+server.ts) for SvelteKit API routes.',
  homepage: 'https://svelte.dev/docs/kit/routing#server',
  license: 'MIT',
  popularity: 700_000,
  versions: { range: '^2.7.0', min: '2.7.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@sveltejs/kit', version: '^2.7.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['sveltekit'],
  setup: [],
  maintainers: ['sveltejs'],
  docs: { quickstart: 'https://svelte.dev/docs/kit/routing#server' },
};
