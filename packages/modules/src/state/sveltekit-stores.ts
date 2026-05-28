import type { ModuleManifest } from '@boilerbear/core';

export const sveltekitStores: ModuleManifest = {
  id: 'sveltekit-stores',
  name: 'SvelteKit Built-in Stores',
  category: 'state',
  tags: ['state', 'store', 'svelte', 'sveltekit'],
  description: 'Svelte built-in writable, readable, and derived stores for app state.',
  homepage: 'https://svelte.dev/docs/svelte/stores',
  license: 'MIT',
  popularity: 800_000,
  versions: { range: '^5.0.0', min: '5.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'svelte', version: '^5.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['sveltekit'],
  setup: [],
  maintainers: ['sveltejs'],
  docs: { quickstart: 'https://svelte.dev/docs/svelte/stores' },
};
