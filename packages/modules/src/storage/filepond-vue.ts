import type { ModuleManifest } from '@boilerbear/core';

export const filepondVue: ModuleManifest = {
  id: 'filepond-vue',
  name: 'FilePond (Vue)',
  category: 'storage',
  tags: ['uploads', 'files', 'vue'],
  description: 'Flexible file upload component for Vue with image previews and drag-and-drop.',
  homepage: 'https://pqina.nl/filepond/',
  license: 'MIT',
  popularity: 120_000,
  versions: { range: '^8.0.0', min: '8.0.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'filepond', version: '^4.32.0' },
      { name: 'vue-filepond', version: '^8.0.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['vue', 'nuxt'],
  setup: [],
  maintainers: ['pqina'],
  docs: { quickstart: 'https://pqina.nl/filepond/docs/getting-started/installation/vue/' },
};
