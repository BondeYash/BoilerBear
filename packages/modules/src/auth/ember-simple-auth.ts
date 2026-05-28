import type { ModuleManifest } from '@boilerbear/core';

export const emberSimpleAuth: ModuleManifest = {
  id: 'ember-simple-auth',
  name: 'Ember Simple Auth',
  category: 'auth',
  tags: ['auth', 'ember', 'session'],
  description: 'Lightweight authentication library for Ember apps with session management.',
  homepage: 'https://github.com/mainmatter/ember-simple-auth',
  license: 'MIT',
  popularity: 150_000,
  versions: { range: '^6.0.0', min: '6.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'ember-simple-auth', version: '^6.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['ember'],
  setup: [],
  maintainers: ['mainmatter'],
  docs: { quickstart: 'https://github.com/mainmatter/ember-simple-auth#readme' },
};
