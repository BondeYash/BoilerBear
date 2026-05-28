import type { ModuleManifest } from '@boilerbear/core';

export const storybookAngular: ModuleManifest = {
  id: 'storybook-angular',
  name: 'Storybook for Angular',
  category: 'components',
  tags: ['devtools', 'components', 'docs', 'angular'],
  description: 'Storybook workshop integration for Angular components.',
  homepage: 'https://storybook.js.org/docs/get-started/angular',
  license: 'MIT',
  popularity: 1_200_000,
  versions: { range: '^8.4.0', min: '8.4.0' },
  languages: ['js'],
  packages: {
    deps: [],
    devDeps: [{ name: '@storybook/angular', version: '^8.4.0' }],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['angular'],
  setup: [],
  maintainers: ['storybookjs'],
  docs: { quickstart: 'https://storybook.js.org/docs/get-started/angular' },
};
