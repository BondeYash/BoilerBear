import type { ModuleManifest } from '@boilerbear/core';

export const remixI18next: ModuleManifest = {
  id: 'remix-i18next',
  name: 'remix-i18next',
  category: 'i18n',
  tags: ['i18n', 'localization', 'remix'],
  description: 'i18next integration for Remix with SSR and route-based locale detection.',
  homepage: 'https://github.com/sergiodxa/remix-i18next',
  license: 'MIT',
  popularity: 80_000,
  versions: { range: '^6.4.1', min: '6.4.1' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'remix-i18next', version: '^6.4.1' },
      { name: 'i18next', version: '^23.16.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['remix'],
  setup: [],
  maintainers: ['sergiodxa'],
  docs: { quickstart: 'https://github.com/sergiodxa/remix-i18next#readme' },
};
