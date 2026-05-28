import type { ModuleManifest } from '@boilerbear/core';

export const alpineI18n: ModuleManifest = {
  id: 'alpine-i18n',
  name: 'Alpine i18n',
  category: 'misc',
  tags: ['i18n', 'translation', 'alpine'],
  description: 'Internationalization plugin for Alpine.js applications.',
  homepage: 'https://github.com/rehhouari/alpinejs-i18n',
  license: 'MIT',
  popularity: 15_000,
  versions: { range: '^2.0.0', min: '2.0.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'alpinejs-i18n', version: '^2.0.0' },
      { name: 'alpinejs', version: '^3.14.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['alpine'],
  setup: [],
  maintainers: ['rehhouari'],
  docs: { quickstart: 'https://github.com/rehhouari/alpinejs-i18n' },
};
