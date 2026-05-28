import type { ModuleManifest } from '@boilerbear/core';

export const preactI18n: ModuleManifest = {
  id: 'preact-i18n',
  name: 'preact-i18n',
  category: 'misc',
  tags: ['i18n', 'translation', 'preact'],
  description: 'Simple localization for Preact components.',
  homepage: 'https://github.com/preactjs/preact-i18n',
  license: 'MIT',
  popularity: 50_000,
  versions: { range: '^2.4.0-preactx', min: '2.4.0-preactx' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'preact-i18n', version: '^2.4.0-preactx' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['preact'],
  setup: [],
  maintainers: ['preactjs'],
  docs: { quickstart: 'https://github.com/preactjs/preact-i18n' },
};
