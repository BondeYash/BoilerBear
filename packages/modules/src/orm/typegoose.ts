import type { ModuleManifest } from '@boilerbear/core';

export const typegoose: ModuleManifest = {
  id: 'typegoose',
  name: 'Typegoose',
  category: 'orm',
  tags: ['mongoose', 'typescript', 'decorators'],
  description: 'Define Mongoose models using TypeScript classes.',
  homepage: 'https://typegoose.github.io/typegoose',
  license: 'MIT',
  popularity: 220_000,
  versions: { range: '^12.8.0', min: '12.8.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: '@typegoose/typegoose', version: '^12.8.0' },
      { name: 'mongoose', version: '^8.7.0' },
      { name: 'reflect-metadata', version: '^0.2.2' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [{ id: 'mongoose', reason: 'Typegoose wraps mongoose.' }],
  appliesTo: [],
  setup: [],
  maintainers: ['typegoose'],
  docs: { quickstart: 'https://typegoose.github.io/typegoose/docs/guides/quick-start-guide' },
};
