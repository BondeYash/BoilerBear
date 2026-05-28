import type { ModuleManifest } from '@boilerbear/core';

export const histoire: ModuleManifest = {
  id: 'histoire',
  name: 'Histoire',
  category: 'misc',
  tags: ['devtools', 'components', 'vue', 'svelte'],
  description: 'Fast and beautiful component story builder powered by Vite.',
  homepage: 'https://histoire.dev',
  license: 'MIT',
  popularity: 220_000,
  versions: { range: '^0.17.0', min: '0.17.0' },
  languages: ['js'],
  packages: {
    deps: [],
    devDeps: [
      { name: 'histoire', version: '^0.17.0' },
      { name: '@histoire/plugin-vue', version: '^0.17.0' },
    ],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['vue', 'svelte', 'sveltekit'],
  setup: [
    {
      kind: 'appendScript',
      name: 'story:dev',
      script: 'histoire dev',
    },
    {
      kind: 'appendScript',
      name: 'story:build',
      script: 'histoire build',
    },
  ],
  maintainers: ['Akryum'],
  docs: { quickstart: 'https://histoire.dev/guide/getting-started.html' },
};
