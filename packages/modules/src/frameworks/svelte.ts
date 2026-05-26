import type { ModuleManifest } from '@boilerbear/core';

export const svelte: ModuleManifest = {
  id: 'svelte',
  name: 'Svelte',
  category: 'framework',
  tags: ['svelte', 'spa', 'vite'],
  description: 'Compiler-first reactive UI framework via Vite + TypeScript.',
  homepage: 'https://svelte.dev',
  license: 'MIT',
  popularity: 2_500_000,
  versions: { range: '^5.0.0', min: '5.0.0' },
  languages: ['js'],
  packages: { deps: [], devDeps: [] },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  framework: {
    template: 'svelte-ts',
    createCommand: '{pm} create vite@latest {name} -- --template svelte-ts',
  },
  setup: [],
  maintainers: ['sveltejs'],
  docs: { quickstart: 'https://svelte.dev/docs/svelte/getting-started' },
};
