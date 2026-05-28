import type { ModuleManifest } from '@boilerbear/core';

export const svelteMotion: ModuleManifest = {
  id: 'svelte-motion',
  name: 'svelte-motion',
  category: 'animation',
  tags: ['animation', 'motion', 'svelte'],
  description: 'A Svelte port of Framer Motion for declarative animations.',
  homepage: 'https://github.com/micha-lmxt/svelte-motion',
  license: 'MIT',
  popularity: 20_000,
  versions: { range: '^0.12.2', min: '0.12.2' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'svelte-motion', version: '^0.12.2' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['svelte'],
  setup: [],
  maintainers: ['micha-lmxt'],
  docs: { quickstart: 'https://github.com/micha-lmxt/svelte-motion#readme' },
};
