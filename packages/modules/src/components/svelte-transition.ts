import type { ModuleManifest } from '@boilerbear/core';

export const svelteTransition: ModuleManifest = {
  id: 'svelte-transition',
  name: 'Svelte Built-in Transitions',
  category: 'animation',
  tags: ['animation', 'transition', 'svelte', 'sveltekit'],
  description:
    'Built-in transition directives (fade, fly, slide, scale, draw) shipped with Svelte.',
  homepage: 'https://svelte.dev/docs/svelte/transition',
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
  appliesTo: ['svelte', 'sveltekit'],
  setup: [],
  maintainers: ['sveltejs'],
  docs: { quickstart: 'https://svelte.dev/docs/svelte/transition' },
};
