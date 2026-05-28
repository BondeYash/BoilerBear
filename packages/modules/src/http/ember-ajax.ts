import type { ModuleManifest } from '@boilerbear/core';

export const emberAjax: ModuleManifest = {
  id: 'ember-ajax',
  name: 'Ember Fetch',
  category: 'http',
  tags: ['http', 'fetch', 'ember'],
  description:
    'Ember addon providing a fetch-based HTTP client used as the modern replacement for ember-ajax.',
  homepage: 'https://github.com/ember-cli/ember-fetch',
  license: 'MIT',
  popularity: 250_000,
  versions: { range: '^8.1.2', min: '8.1.2' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'ember-fetch', version: '^8.1.2' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['ember'],
  setup: [],
  maintainers: ['ember-cli'],
  docs: { quickstart: 'https://github.com/ember-cli/ember-fetch#readme' },
};
