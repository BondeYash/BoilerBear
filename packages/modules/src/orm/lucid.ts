import type { ModuleManifest } from '@boilerbear/core';

export const lucid: ModuleManifest = {
  id: 'lucid',
  name: 'AdonisJS Lucid',
  category: 'orm',
  tags: ['adonisjs', 'orm', 'sql', 'activerecord'],
  description: 'Active Record ORM for AdonisJS and standalone Node apps.',
  homepage: 'https://lucid.adonisjs.com',
  license: 'MIT',
  popularity: 95_000,
  versions: { range: '^21.2.0', min: '21.2.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@adonisjs/lucid', version: '^21.2.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['adonisjs'],
  docs: { quickstart: 'https://lucid.adonisjs.com/docs/introduction' },
};
