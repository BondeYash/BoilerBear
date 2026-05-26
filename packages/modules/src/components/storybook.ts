import type { ModuleManifest } from '@boilerbear/core';

export const storybook: ModuleManifest = {
  id: 'storybook',
  name: 'Storybook',
  category: 'misc',
  tags: ['devtools', 'components', 'docs'],
  description: 'Workshop for UI components with isolated stories and addons.',
  homepage: 'https://storybook.js.org',
  license: 'MIT',
  popularity: 8_900_000,
  versions: { range: '^8.4.0', min: '8.4.0' },
  languages: ['js'],
  packages: {
    deps: [],
    devDeps: [
      { name: 'storybook', version: '^8.4.0' },
      { name: '@storybook/react-vite', version: '^8.4.0' },
    ],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['react', 'next', 'vite', 'solid', 'qwik', 'preact', 'marko'],
  setup: [
    {
      kind: 'appendScript',
      name: 'storybook',
      script: 'storybook dev -p 6006',
    },
    {
      kind: 'appendScript',
      name: 'build-storybook',
      script: 'storybook build',
    },
  ],
  maintainers: ['storybookjs'],
  docs: { quickstart: 'https://storybook.js.org/docs/get-started/install' },
};
