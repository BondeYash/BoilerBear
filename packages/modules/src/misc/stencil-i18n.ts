import type { ModuleManifest } from '@boilerbear/core';

export const stencilI18n: ModuleManifest = {
  id: 'stencil-i18n',
  name: 'Stencil i18n',
  category: 'misc',
  tags: ['i18n', 'translation', 'stencil'],
  description: 'Internationalization helpers for Stencil components.',
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
