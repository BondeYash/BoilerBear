import type { ModuleManifest } from '@boilerbear/core';

export const waterline: ModuleManifest = {
  id: 'waterline',
  name: 'Waterline',
  category: 'orm',
  tags: ['orm', 'sails', 'datastore'],
  description: 'Datastore-agnostic ORM that powers the Sails.js framework.',
  homepage: 'https://waterlinejs.org',
  license: 'MIT',
  popularity: 40_000,
  versions: { range: '^0.15.2', min: '0.15.2' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'waterline', version: '^0.15.2' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['balderdashy'],
  docs: { quickstart: 'https://waterlinejs.org/' },
};
