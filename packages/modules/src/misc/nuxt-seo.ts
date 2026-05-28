import type { ModuleManifest } from '@boilerbear/core';

export const nuxtSeo: ModuleManifest = {
  id: 'nuxt-seo',
  name: 'Nuxt SEO',
  category: 'misc',
  tags: ['seo', 'meta', 'nuxt'],
  description: 'All-in-one SEO module bundle for Nuxt with sitemaps, robots, and OG images.',
  homepage: 'https://nuxtseo.com',
  license: 'MIT',
  popularity: 300_000,
  versions: { range: '^2.0.0', min: '2.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@nuxtjs/seo', version: '^2.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['nuxt'],
  setup: [],
  maintainers: ['harlan-zw'],
  docs: { quickstart: 'https://nuxtseo.com/nuxt-seo/getting-started/installation' },
};
