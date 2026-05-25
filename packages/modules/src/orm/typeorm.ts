import type { ModuleManifest } from '@boilerbear/core';

export const typeorm: ModuleManifest = {
  id: 'typeorm',
  name: 'TypeORM',
  category: 'orm',
  tags: ['orm', 'decorators', 'typescript'],
  description: 'ORM for TypeScript and JavaScript supporting Postgres, MySQL, SQLite, and more.',
  homepage: 'https://typeorm.io',
  license: 'MIT',
  popularity: 2_500_000,
  versions: { range: '^0.3.20', min: '0.3.20' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'typeorm', version: '^0.3.20' },
      { name: 'reflect-metadata', version: '^0.2.2' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [
    { id: 'prisma', severity: 'warning', reason: 'Pick one ORM.' },
    { id: 'mikro-orm', severity: 'warning', reason: 'Pick one decorator-based ORM.' },
  ],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['typeorm'],
  docs: { quickstart: 'https://typeorm.io/#installation' },
};
