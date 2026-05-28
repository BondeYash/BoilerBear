import type { ModuleManifest } from '@boilerbear/core';

export const emberAnimated: ModuleManifest = {
  id: 'ember-animated',
  name: 'Ember Animated',
  category: 'animation',
  tags: ['animation', 'ember', 'transitions'],
  description: 'Animation primitives and transitions for Ember apps.',
  homepage: 'https://ember-animation.github.io/ember-animated/',
  license: 'MIT',
  popularity: 90_000,
  versions: { range: '^1.1.1', min: '1.1.1' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'ember-animated', version: '^1.1.1' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['ember'],
  setup: [],
  maintainers: ['ember-animation'],
  docs: { quickstart: 'https://ember-animation.github.io/ember-animated/docs' },
};
