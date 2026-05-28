import type { ModuleManifest } from '@boilerbear/core';

export const alpineDevtools: ModuleManifest = {
  id: 'alpine-devtools',
  name: 'Alpine DevTools',
  category: 'components',
  tags: ['devtools', 'debug', 'alpine'],
  description: 'Browser devtools extension for inspecting Alpine.js components.',
  homepage: 'https://github.com/Te7a-Houdini/alpinejs-devtools',
  license: 'MIT',
  popularity: 20_000,
  versions: { range: '^3.14.0', min: '3.14.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'alpinejs', version: '^3.14.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['alpine'],
  setup: [],
  maintainers: ['Te7a-Houdini'],
  docs: { quickstart: 'https://github.com/Te7a-Houdini/alpinejs-devtools' },
};
