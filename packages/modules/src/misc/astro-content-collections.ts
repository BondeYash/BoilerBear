import type { ModuleManifest } from '@boilerbear/core';

export const astroContentCollections: ModuleManifest = {
  id: 'astro-content-collections',
  name: 'Astro Content Collections',
  category: 'misc',
  tags: ['content', 'markdown', 'astro', 'cms'],
  description: 'Type-safe content management for Markdown, MDX and data files in Astro.',
  homepage: 'https://docs.astro.build/en/guides/content-collections/',
  license: 'MIT',
  popularity: 250_000,
  versions: { range: '^5.0.0', min: '5.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'astro', version: '^5.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['astro'],
  setup: [],
  maintainers: ['withastro'],
  docs: { quickstart: 'https://docs.astro.build/en/guides/content-collections/' },
};
