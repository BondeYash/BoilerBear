import type { ModuleManifest } from '@boilerbear/core';

export const sass: ModuleManifest = {
  id: 'sass',
  name: 'Sass',
  category: 'styling',
  tags: ['css', 'preprocessor'],
  description: 'CSS preprocessor with variables, nesting, and mixins.',
  homepage: 'https://sass-lang.com',
  license: 'MIT',
  popularity: 14_000_000,
  versions: { range: '^1.80.0', min: '1.80.0' },
  languages: ['js'],
  packages: {
    deps: [],
    devDeps: [{ name: 'sass', version: '^1.80.0' }],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['vite', 'next'],
  setup: [],
  maintainers: ['sass'],
  docs: { quickstart: 'https://sass-lang.com/install/' },
};
