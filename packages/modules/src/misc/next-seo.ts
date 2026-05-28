import type { ModuleManifest } from '@boilerbear/core';

export const nextSeo: ModuleManifest = {
  id: 'next-seo',
  name: 'next-seo',
  category: 'misc',
  tags: ['seo', 'meta', 'next'],
  description: 'SEO management for Next.js with JSON-LD and Open Graph helpers.',
  homepage: 'https://github.com/garmeeh/next-seo',
  license: 'MIT',
  popularity: 1_600_000,
  versions: { range: '^6.6.0', min: '6.6.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'next-seo', version: '^6.6.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['next'],
  setup: [],
  maintainers: ['garmeeh'],
  docs: { quickstart: 'https://github.com/garmeeh/next-seo#readme' },
};
