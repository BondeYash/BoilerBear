import type { ModuleManifest } from '@boilerbear/core';

export const ember: ModuleManifest = {
  id: 'ember',
  name: 'Ember.js',
  category: 'framework',
  tags: ['ember', 'spa', 'convention'],
  description: 'Battery-included framework with strong conventions and Ember CLI.',
  homepage: 'https://emberjs.com',
  license: 'MIT',
  popularity: 400_000,
  versions: { range: '^5.12.0', min: '5.12.0' },
  languages: ['js'],
  packages: { deps: [], devDeps: [] },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  framework: {
    template: 'ember-basic',
    createCommand: 'npx ember-cli@latest new {name}',
  },
  setup: [],
  maintainers: ['emberjs'],
  docs: { quickstart: 'https://guides.emberjs.com/release/getting-started/quick-start/' },
};
