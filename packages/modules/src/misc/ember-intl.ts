import type { ModuleManifest } from '@boilerbear/core';

export const emberIntl: ModuleManifest = {
  id: 'ember-intl',
  name: 'ember-intl',
  category: 'misc',
  tags: ['i18n', 'translation', 'ember'],
  description: 'Internationalization (i18n) addon for Ember built on the ECMAScript Intl APIs.',
  homepage: 'https://github.com/ember-intl/ember-intl',
  license: 'MIT',
  popularity: 200_000,
  versions: { range: '^7.1.4', min: '7.1.4' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'ember-intl', version: '^7.1.4' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['ember'],
  setup: [],
  maintainers: ['ember-intl'],
  docs: { quickstart: 'https://ember-intl.github.io/ember-intl/' },
};
