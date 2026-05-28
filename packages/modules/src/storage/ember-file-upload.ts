import type { ModuleManifest } from '@boilerbear/core';

export const emberFileUpload: ModuleManifest = {
  id: 'ember-file-upload',
  name: 'ember-file-upload',
  category: 'storage',
  tags: ['upload', 'files', 'ember'],
  description: 'File-upload addon for Ember with queue, progress, and drag-and-drop support.',
  homepage: 'https://adopted-ember-addons.github.io/ember-file-upload/',
  license: 'MIT',
  popularity: 100_000,
  versions: { range: '^9.2.0', min: '9.2.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'ember-file-upload', version: '^9.2.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['ember'],
  setup: [],
  maintainers: ['adopted-ember-addons'],
  docs: { quickstart: 'https://adopted-ember-addons.github.io/ember-file-upload/docs' },
};
