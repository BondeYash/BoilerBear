import type { ModuleManifest } from '@boilerbear/core';

export const stencilRouter: ModuleManifest = {
  id: 'stencil-router',
  name: 'Stencil Router',
  category: 'routing',
  tags: ['router', 'stencil', 'spa'],
  description: 'Client-side router for Stencil web components.',
  homepage: 'https://github.com/ionic-team/stencil-router',
  license: 'MIT',
  popularity: 25_000,
  versions: { range: '^1.0.1', min: '1.0.1' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@stencil/router', version: '^1.0.1' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['stencil'],
  setup: [],
  maintainers: ['ionic-team'],
  docs: { quickstart: 'https://github.com/ionic-team/stencil-router' },
};
