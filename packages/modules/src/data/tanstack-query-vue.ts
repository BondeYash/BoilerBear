import type { ModuleManifest } from '@boilerbear/core';

export const tanstackQueryVue: ModuleManifest = {
  id: 'tanstack-query-vue',
  name: 'TanStack Query (Vue)',
  category: 'data',
  tags: ['data', 'cache', 'vue'],
  description: 'Async state and server cache for Vue.',
  homepage: 'https://tanstack.com/query',
  license: 'MIT',
  popularity: 800_000,
  versions: { range: '^5.59.0', min: '5.59.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@tanstack/vue-query', version: '^5.59.0' }],
    devDeps: [{ name: '@tanstack/vue-query-devtools', version: '^5.59.0' }],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['vue', 'nuxt'],
  setup: [],
  maintainers: ['tannerlinsley'],
  docs: { quickstart: 'https://tanstack.com/query/latest/docs/framework/vue/quick-start' },
};
