import type { ModuleManifest } from '@boilerbear/core';

export const alpineValidate: ModuleManifest = {
  id: 'alpine-validate',
  name: 'Alpine Validate',
  category: 'validation',
  tags: ['forms', 'validation', 'alpine'],
  description: 'Simple form validation plugin for Alpine.js.',
  homepage: 'https://github.com/colinaut/alpinejs-plugin-simple-validate',
  license: 'MIT',
  popularity: 20_000,
  versions: { range: '^1.0.0', min: '1.0.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: '@colinaut/alpinejs-plugin-simple-validate', version: '^1.0.0' },
      { name: 'alpinejs', version: '^3.14.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['alpine'],
  setup: [],
  maintainers: ['colinaut'],
  docs: { quickstart: 'https://github.com/colinaut/alpinejs-plugin-simple-validate' },
};
