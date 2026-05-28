import type { ModuleManifest } from '@boilerbear/core';

export const svelteRouting: ModuleManifest = {
  id: 'svelte-routing',
  name: 'svelte-routing',
  category: 'routing',
  tags: ['routing', 'spa', 'svelte'],
  description: 'A declarative Svelte routing library with SSR support.',
  homepage: 'https://github.com/EmilTholin/svelte-routing',
  license: 'MIT',
  popularity: 80_000,
  versions: { range: '^2.13.0', min: '2.13.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'svelte-routing', version: '^2.13.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['svelte'],
  setup: [],
  maintainers: ['EmilTholin'],
  docs: { quickstart: 'https://github.com/EmilTholin/svelte-routing#readme' },
};
