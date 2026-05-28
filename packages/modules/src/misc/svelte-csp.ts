import type { ModuleManifest } from '@boilerbear/core';

export const svelteCsp: ModuleManifest = {
  id: 'svelte-csp',
  name: 'SvelteKit CSP',
  category: 'misc',
  tags: ['security', 'csp', 'sveltekit'],
  description: 'Content Security Policy configuration via SvelteKit built-in csp option.',
  homepage: 'https://kit.svelte.dev/docs/configuration#csp',
  license: 'MIT',
  popularity: 300_000,
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
  docs: { quickstart: 'https://kit.svelte.dev/docs/configuration#csp' },
};
