import type { ModuleManifest } from '@boilerbear/core';

export const vueI18n: ModuleManifest = {
  id: 'vue-i18n',
  name: 'Vue I18n',
  category: 'i18n',
  tags: ['i18n', 'localization', 'vue'],
  description: 'Internationalization plugin for Vue with composition API support.',
  homepage: 'https://vue-i18n.intlify.dev',
  license: 'MIT',
  popularity: 2_400_000,
  versions: { range: '^10.0.0', min: '10.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'vue-i18n', version: '^10.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['vue'],
  setup: [],
  maintainers: ['intlify'],
  docs: { quickstart: 'https://vue-i18n.intlify.dev/guide/' },
};
