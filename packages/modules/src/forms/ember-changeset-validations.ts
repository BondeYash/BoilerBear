import type { ModuleManifest } from '@boilerbear/core';

export const emberChangesetValidations: ModuleManifest = {
  id: 'ember-changeset-validations',
  name: 'Ember Changeset Validations',
  category: 'validation',
  tags: ['forms', 'validation', 'ember', 'changeset'],
  description: 'Validation engine for ember-changeset with declarative validator rules.',
  homepage: 'https://github.com/adopted-ember-addons/ember-changeset-validations',
  license: 'MIT',
  popularity: 120_000,
  versions: { range: '^4.1.1', min: '4.1.1' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'ember-changeset', version: '^4.1.2' },
      { name: 'ember-changeset-validations', version: '^4.1.1' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['ember'],
  setup: [],
  maintainers: ['adopted-ember-addons'],
  docs: {
    quickstart: 'https://github.com/adopted-ember-addons/ember-changeset-validations#readme',
  },
};
