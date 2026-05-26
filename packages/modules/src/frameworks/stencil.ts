import type { ModuleManifest } from '@boilerbear/core';

export const stencil: ModuleManifest = {
  id: 'stencil',
  name: 'Stencil',
  category: 'framework',
  tags: ['stencil', 'web-components'],
  description: 'Web Components compiler with TSX and lazy loading.',
  homepage: 'https://stenciljs.com',
  license: 'MIT',
  popularity: 800_000,
  versions: { range: '^4.22.0', min: '4.22.0' },
  languages: ['js'],
  packages: { deps: [], devDeps: [] },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  framework: {
    template: 'stencil-basic',
    createCommand: '{pm} init stencil {name}',
  },
  setup: [],
  maintainers: ['ionic-team'],
  docs: { quickstart: 'https://stenciljs.com/docs/getting-started' },
};
