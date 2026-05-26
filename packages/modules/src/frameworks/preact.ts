import type { ModuleManifest } from '@boilerbear/core';

export const preact: ModuleManifest = {
  id: 'preact',
  name: 'Preact',
  category: 'framework',
  tags: ['preact', 'spa', 'small'],
  description: '3kB React-compatible alternative with same modern API.',
  homepage: 'https://preactjs.com',
  license: 'MIT',
  popularity: 1_400_000,
  versions: { range: '^10.25.0', min: '10.25.0' },
  languages: ['js'],
  packages: { deps: [], devDeps: [] },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  framework: {
    template: 'preact-basic',
    createCommand: '{pm} init preact {name}',
  },
  setup: [],
  maintainers: ['preactjs'],
  docs: { quickstart: 'https://preactjs.com/tutorial' },
};
