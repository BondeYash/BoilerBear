import type { ModuleManifest } from '@boilerbear/core';

export const storybookWebComponents: ModuleManifest = {
  id: 'storybook-web-components',
  name: 'Storybook for Web Components',
  category: 'components',
  tags: ['storybook', 'web-components', 'lit', 'stencil', 'docs'],
  description: 'Develop and document web components in isolation with Storybook + Vite.',
  homepage: 'https://storybook.js.org/docs/get-started/web-components-vite',
  license: 'MIT',
  popularity: 200_000,
  versions: { range: '^8.4.0', min: '8.4.0' },
  languages: ['js'],
  packages: {
    deps: [],
    devDeps: [
      { name: '@storybook/web-components', version: '^8.4.0' },
      { name: '@storybook/web-components-vite', version: '^8.4.0' },
    ],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['lit', 'stencil'],
  setup: [],
  maintainers: ['storybookjs'],
  docs: { quickstart: 'https://storybook.js.org/docs/get-started/web-components-vite' },
};
