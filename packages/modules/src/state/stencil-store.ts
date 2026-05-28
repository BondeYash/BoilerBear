import type { ModuleManifest } from '@boilerbear/core';

export const stencilStore: ModuleManifest = {
  id: 'stencil-store',
  name: 'Stencil Store',
  category: 'state',
  tags: ['state', 'store', 'stencil'],
  description: 'Lightweight shared state library for Stencil components.',
  homepage: 'https://stenciljs.com/docs/stencil-store',
  license: 'MIT',
  popularity: 50_000,
  versions: { range: '^2.0.16', min: '2.0.16' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@stencil/store', version: '^2.0.16' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['stencil'],
  setup: [],
  maintainers: ['ionic-team'],
  docs: { quickstart: 'https://stenciljs.com/docs/stencil-store' },
};
