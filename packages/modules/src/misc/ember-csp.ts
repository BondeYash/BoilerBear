import type { ModuleManifest } from '@boilerbear/core';

export const emberCliContentSecurityPolicy: ModuleManifest = {
  id: 'ember-cli-content-security-policy',
  name: 'ember-cli-content-security-policy',
  category: 'misc',
  tags: ['security', 'csp', 'ember'],
  description: 'Ember CLI addon that configures Content Security Policy headers and meta tags.',
  homepage: 'https://github.com/rwjblue/ember-cli-content-security-policy',
  license: 'MIT',
  popularity: 100_000,
  versions: { range: '^2.0.3', min: '2.0.3' },
  languages: ['js'],
  packages: {
    deps: [],
    devDeps: [{ name: 'ember-cli-content-security-policy', version: '^2.0.3' }],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['ember'],
  setup: [],
  maintainers: ['rwjblue'],
  docs: { quickstart: 'https://github.com/rwjblue/ember-cli-content-security-policy#readme' },
};
