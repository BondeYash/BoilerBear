import type { ModuleManifest } from '@boilerbear/core';

export const remixSeo: ModuleManifest = {
  id: 'remix-seo',
  name: 'remix-seo',
  category: 'misc',
  tags: ['seo', 'sitemap', 'remix'],
  description: 'Sitemap and robots.txt generator helpers for Remix apps.',
  homepage: 'https://github.com/balavishnuvj/remix-seo',
  license: 'MIT',
  popularity: 10_000,
  versions: { range: '^0.0.3', min: '0.0.3' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@balavishnuvj/remix-seo', version: '^0.0.3' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['remix'],
  setup: [],
  maintainers: ['balavishnuvj'],
  docs: { quickstart: 'https://github.com/balavishnuvj/remix-seo#readme' },
};
