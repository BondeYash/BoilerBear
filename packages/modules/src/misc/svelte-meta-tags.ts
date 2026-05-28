import type { ModuleManifest } from '@boilerbear/core';

export const svelteMetaTags: ModuleManifest = {
  id: 'svelte-meta-tags',
  name: 'Svelte Meta Tags',
  category: 'misc',
  tags: ['seo', 'meta', 'svelte', 'sveltekit'],
  description: 'Manage document head meta tags for SEO in Svelte and SvelteKit apps.',
  homepage: 'https://github.com/oekazuma/svelte-meta-tags',
  license: 'MIT',
  popularity: 30_000,
  versions: { range: '^4.0.0', min: '4.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'svelte-meta-tags', version: '^4.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['svelte', 'sveltekit'],
  setup: [],
  maintainers: ['oekazuma'],
  docs: { quickstart: 'https://github.com/oekazuma/svelte-meta-tags#readme' },
};
