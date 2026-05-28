import type { ModuleManifest } from '@boilerbear/core';

export const veeValidate: ModuleManifest = {
  id: 'vee-validate',
  name: 'VeeValidate',
  category: 'validation',
  tags: ['forms', 'validation', 'vue'],
  description: 'Form validation for Vue with composition API and schema support.',
  homepage: 'https://vee-validate.logaretm.com',
  license: 'MIT',
  popularity: 1_800_000,
  versions: { range: '^4.14.0', min: '4.14.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'vee-validate', version: '^4.14.0' },
      { name: '@vee-validate/zod', version: '^4.14.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [{ id: 'zod', reason: 'Validate VeeValidate forms with Zod schemas.' }],
  appliesTo: ['vue', 'nuxt'],
  setup: [],
  maintainers: ['logaretm'],
  docs: { quickstart: 'https://vee-validate.logaretm.com/v4/guide/overview' },
};
