import type { ModuleManifest } from '@boilerbear/core';

export const mongodb: ModuleManifest = {
  id: 'mongodb',
  name: 'MongoDB Node Driver',
  category: 'database',
  tags: ['mongodb', 'nosql', 'document', 'driver'],
  description: 'Official MongoDB driver for Node.js.',
  homepage: 'https://www.mongodb.com/docs/drivers/node',
  license: 'Apache-2.0',
  popularity: 6_500_000,
  versions: { range: '^6.10.0', min: '6.10.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'mongodb', version: '^6.10.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [
    {
      id: 'mongoose',
      severity: 'warning',
      reason: 'Mongoose wraps the driver — usually one or the other.',
    },
  ],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['mongodb'],
  docs: { quickstart: 'https://www.mongodb.com/docs/drivers/node/current/quick-start' },
};
