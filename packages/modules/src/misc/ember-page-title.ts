import type { ModuleManifest } from '@boilerbear/core';

export const emberPageTitle: ModuleManifest = {
  id: 'ember-page-title',
  name: 'ember-page-title',
  category: 'misc',
  tags: ['seo', 'meta', 'ember'],
  description: 'Set per-route page titles in Ember apps with composable segments.',
  homepage: 'https://github.com/adopted-ember-addons/ember-page-title',
  license: 'MIT',
  popularity: 250_000,
  versions: { range: '^8.2.3', min: '8.2.3' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'ember-page-title', version: '^8.2.3' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['ember'],
  setup: [],
  maintainers: ['adopted-ember-addons'],
  docs: { quickstart: 'https://github.com/adopted-ember-addons/ember-page-title#readme' },
};
