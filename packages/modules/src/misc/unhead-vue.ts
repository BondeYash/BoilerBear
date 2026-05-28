import type { ModuleManifest } from '@boilerbear/core';

export const unheadVue: ModuleManifest = {
  id: 'unhead-vue',
  name: 'Unhead (Vue)',
  category: 'misc',
  tags: ['seo', 'meta', 'head', 'vue'],
  description: 'Universal document head manager for Vue with SSR and reactive bindings.',
  homepage: 'https://unhead.unjs.io',
  license: 'MIT',
  popularity: 1_900_000,
  versions: { range: '^1.11.0', min: '1.11.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@unhead/vue', version: '^1.11.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['vue'],
  setup: [],
  maintainers: ['unjs'],
  docs: { quickstart: 'https://unhead.unjs.io/setup/vue/installation' },
};
