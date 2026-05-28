import type { ModuleManifest } from '@boilerbear/core';

export const i18next: ModuleManifest = {
  id: 'i18next',
  name: 'i18next',
  category: 'misc',
  tags: ['i18n', 'translation', 'localization'],
  description: 'Internationalization framework for JavaScript apps.',
  homepage: 'https://www.i18next.com',
  license: 'MIT',
  popularity: 8_000_000,
  versions: { range: '^23.16.0', min: '23.16.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'i18next', version: '^23.16.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['htmx', 'marko'],
  setup: [],
  maintainers: ['i18next'],
  docs: { quickstart: 'https://www.i18next.com' },
};
