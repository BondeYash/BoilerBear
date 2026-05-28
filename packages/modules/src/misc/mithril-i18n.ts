import type { ModuleManifest } from '@boilerbear/core';

export const mithrilI18n: ModuleManifest = {
  id: 'mithril-i18n',
  name: 'Mithril i18n',
  category: 'misc',
  tags: ['i18n', 'translation', 'mithril'],
  description: 'Internationalization helpers for Mithril.js apps.',
  homepage: 'https://mithril.js.org',
  license: 'MIT',
  popularity: 8_000,
  versions: { range: '^2.2.0', min: '2.2.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'mithril', version: '^2.2.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['mithril'],
  setup: [],
  maintainers: ['MithrilJS'],
  docs: { quickstart: 'https://mithril.js.org' },
};
