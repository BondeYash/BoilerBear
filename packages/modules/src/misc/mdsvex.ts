import type { ModuleManifest } from '@boilerbear/core';

export const mdsvex: ModuleManifest = {
  id: 'mdsvex',
  name: 'mdsvex',
  category: 'misc',
  tags: ['markdown', 'mdx', 'svelte', 'sveltekit'],
  description: 'A markdown preprocessor for Svelte components with Svelte-in-markdown support.',
  homepage: 'https://mdsvex.com',
  license: 'MIT',
  popularity: 90_000,
  versions: { range: '^0.12.3', min: '0.12.3' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'mdsvex', version: '^0.12.3' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['sveltekit', 'svelte'],
  setup: [],
  maintainers: ['pngwn'],
  docs: { quickstart: 'https://mdsvex.com/docs' },
};
