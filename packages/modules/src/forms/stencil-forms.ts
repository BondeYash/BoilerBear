import type { ModuleManifest } from '@boilerbear/core';

export const stencilForms: ModuleManifest = {
  id: 'stencil-forms',
  name: 'Stencil Forms',
  category: 'validation',
  tags: ['forms', 'validation', 'stencil'],
  description: 'Form handling and validation patterns for Stencil components.',
  homepage: 'https://stenciljs.com/docs/forms',
  license: 'MIT',
  popularity: 30_000,
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
  docs: { quickstart: 'https://stenciljs.com/docs/forms' },
};
