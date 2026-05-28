import type { ModuleManifest } from '@boilerbear/core';

export const astroSeo: ModuleManifest = {
  id: 'astro-seo',
  name: 'Astro SEO',
  category: 'misc',
  tags: ['seo', 'meta', 'og', 'astro'],
  description: 'SEO component for Astro with Open Graph, Twitter Card and structured data support.',
  homepage: 'https://github.com/jonasmerlin/astro-seo',
  license: 'MIT',
  popularity: 60_000,
  versions: { range: '^0.8.4', min: '0.8.4' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'astro-seo', version: '^0.8.4' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['astro'],
  setup: [],
  maintainers: ['jonasmerlin'],
  docs: { quickstart: 'https://github.com/jonasmerlin/astro-seo' },
};
