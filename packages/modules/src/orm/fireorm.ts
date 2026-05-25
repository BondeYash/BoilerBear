import type { ModuleManifest } from '@boilerbear/core';

export const fireorm: ModuleManifest = {
  id: 'fireorm',
  name: 'Fireorm',
  category: 'orm',
  tags: ['firestore', 'firebase', 'decorators'],
  description: 'Decorator-based TypeScript ORM for Firestore.',
  homepage: 'https://github.com/wovalle/fireorm',
  license: 'MIT',
  popularity: 60_000,
  versions: { range: '^0.23.3', min: '0.23.3' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'fireorm', version: '^0.23.3' },
      { name: 'reflect-metadata', version: '^0.2.2' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [
    { id: 'firebase-admin', reason: 'Fireorm runs against Firestore via firebase-admin.' },
  ],
  appliesTo: [],
  setup: [],
  maintainers: ['wovalle'],
  docs: { quickstart: 'https://github.com/wovalle/fireorm#usage' },
};
