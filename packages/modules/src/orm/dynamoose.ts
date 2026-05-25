import type { ModuleManifest } from '@boilerbear/core';

export const dynamoose: ModuleManifest = {
  id: 'dynamoose',
  name: 'Dynamoose',
  category: 'orm',
  tags: ['dynamodb', 'aws', 'odm'],
  description: 'Mongoose-inspired modeling tool for Amazon DynamoDB.',
  homepage: 'https://dynamoosejs.com',
  license: 'Unlicense',
  popularity: 180_000,
  versions: { range: '^4.0.2', min: '4.0.2' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'dynamoose', version: '^4.0.2' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['dynamoose'],
  docs: { quickstart: 'https://dynamoosejs.com/getting_started/Introduction/' },
};
