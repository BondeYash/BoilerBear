import type { ModuleManifest } from '@boilerbear/core';

export const stencilJest: ModuleManifest = {
  id: 'stencil-jest',
  name: 'Stencil Jest',
  category: 'testing',
  tags: ['testing', 'jest', 'stencil'],
  description: 'Jest-based testing setup for Stencil web components.',
  homepage: 'https://stenciljs.com/docs/testing-overview',
  license: 'MIT',
  popularity: 80_000,
  versions: { range: '^4.22.0', min: '4.22.0' },
  languages: ['js'],
  packages: {
    deps: [],
    devDeps: [
      { name: '@stencil/core', version: '^4.22.0' },
      { name: 'jest', version: '^29.7.0' },
    ],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['stencil'],
  setup: [],
  maintainers: ['ionic-team'],
  docs: { quickstart: 'https://stenciljs.com/docs/testing-overview' },
};
