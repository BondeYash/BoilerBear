import type { ModuleManifest } from '@boilerbear/core';

export const mongoose: ModuleManifest = {
  id: 'mongoose',
  name: 'Mongoose',
  category: 'orm',
  tags: ['mongodb', 'odm', 'schema'],
  description: 'Elegant MongoDB object modeling for Node.js.',
  homepage: 'https://mongoosejs.com',
  license: 'MIT',
  popularity: 5_900_000,
  versions: { range: '^8.7.0', min: '8.7.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'mongoose', version: '^8.7.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [
    { id: 'typegoose', severity: 'warning', reason: 'Typegoose wraps mongoose; usually pick one.' },
  ],
  recommends: [],
  appliesTo: [],
  setup: [
    { kind: 'envVar', key: 'MONGODB_URI', example: 'mongodb://localhost:27017/db', required: true },
  ],
  maintainers: ['Automattic'],
  docs: { quickstart: 'https://mongoosejs.com/docs/index.html' },
};
