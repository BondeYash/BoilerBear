import type { ModuleManifest } from '@boilerbear/core';

export const emberData: ModuleManifest = {
  id: 'ember-data',
  name: 'Ember Data',
  category: 'state',
  tags: ['data', 'state', 'ember', 'orm'],
  description: 'Official data persistence library for Ember with stores, models, and adapters.',
  homepage: 'https://github.com/emberjs/data',
  license: 'MIT',
  popularity: 700_000,
  versions: { range: '^5.3.0', min: '5.3.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'ember-data', version: '^5.3.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['ember'],
  setup: [],
  maintainers: ['emberjs'],
  docs: { quickstart: 'https://api.emberjs.com/ember-data/release' },
};
