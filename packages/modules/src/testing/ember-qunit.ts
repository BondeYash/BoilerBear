import type { ModuleManifest } from '@boilerbear/core';

export const emberQunit: ModuleManifest = {
  id: 'ember-qunit',
  name: 'Ember QUnit',
  category: 'testing',
  tags: ['testing', 'unit', 'ember', 'qunit'],
  description: 'QUnit-based testing helpers for Ember apps and addons.',
  homepage: 'https://github.com/emberjs/ember-qunit',
  license: 'MIT',
  popularity: 400_000,
  versions: { range: '^8.1.0', min: '8.1.0' },
  languages: ['js'],
  packages: {
    deps: [],
    devDeps: [
      { name: 'ember-qunit', version: '^8.1.0' },
      { name: 'qunit', version: '^2.22.0' },
    ],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['ember'],
  setup: [],
  maintainers: ['emberjs'],
  docs: { quickstart: 'https://github.com/emberjs/ember-qunit#readme' },
};
