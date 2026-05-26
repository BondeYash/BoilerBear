import type { ModuleManifest } from '@boilerbear/core';

export const sveltekit: ModuleManifest = {
  id: 'sveltekit',
  name: 'SvelteKit',
  category: 'framework',
  tags: ['sveltekit', 'svelte', 'ssr'],
  description: 'Svelte meta-framework with file-based routing, SSR, and adapters.',
  homepage: 'https://kit.svelte.dev',
  license: 'MIT',
  popularity: 1_200_000,
  versions: { range: '^2.8.0', min: '2.8.0' },
  languages: ['js'],
  packages: { deps: [], devDeps: [] },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  framework: {
    template: 'sveltekit-basic',
    createCommand: 'npx sv create {name}',
  },
  setup: [],
  maintainers: ['sveltejs'],
  docs: { quickstart: 'https://svelte.dev/docs/kit/creating-a-project' },
};
