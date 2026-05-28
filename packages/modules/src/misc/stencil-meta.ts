import type { ModuleManifest } from '@boilerbear/core';

export const stencilMeta: ModuleManifest = {
  id: 'stencil-meta',
  name: 'Stencil Meta',
  category: 'misc',
  tags: ['seo', 'meta', 'head', 'stencil'],
  description: 'Meta tag and document head management for Stencil components.',
  homepage: 'https://stenciljs.com',
  license: 'MIT',
  popularity: 15_000,
  versions: { range: '^4.22.0', min: '4.22.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@stencil/core', version: '^4.22.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['stencil'],
  setup: [],
  maintainers: ['ionic-team'],
  docs: { quickstart: 'https://stenciljs.com' },
};
