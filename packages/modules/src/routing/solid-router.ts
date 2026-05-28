import type { ModuleManifest } from '@boilerbear/core';

export const solidRouter: ModuleManifest = {
  id: 'solid-router',
  name: 'Solid Router',
  category: 'routing',
  tags: ['routing', 'solid', 'spa'],
  description: 'Universal router for Solid with nested routes and data loading.',
  homepage: 'https://github.com/solidjs/solid-router',
  license: 'MIT',
  popularity: 200_000,
  versions: { range: '^0.15.0', min: '0.15.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@solidjs/router', version: '^0.15.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['solid', 'solid-start'],
  setup: [],
  maintainers: ['solidjs'],
  docs: { quickstart: 'https://github.com/solidjs/solid-router' },
};
