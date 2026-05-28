import type { ModuleManifest } from '@boilerbear/core';

export const nuxtI18n: ModuleManifest = {
  id: 'nuxt-i18n',
  name: '@nuxtjs/i18n',
  category: 'i18n',
  tags: ['i18n', 'localization', 'nuxt'],
  description: 'Internationalization module for Nuxt 3 with routing and lazy loading.',
  homepage: 'https://i18n.nuxtjs.org',
  license: 'MIT',
  popularity: 700_000,
  versions: { range: '^9.0.0', min: '9.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@nuxtjs/i18n', version: '^9.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['nuxt'],
  setup: [],
  maintainers: ['nuxt-modules'],
  docs: { quickstart: 'https://i18n.nuxtjs.org/docs/getting-started' },
};
