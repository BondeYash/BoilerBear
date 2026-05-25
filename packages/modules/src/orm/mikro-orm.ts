import type { ModuleManifest } from '@boilerbear/core';

export const mikroOrm: ModuleManifest = {
  id: 'mikro-orm',
  name: 'MikroORM',
  category: 'orm',
  tags: ['orm', 'unit-of-work', 'identity-map', 'typescript'],
  description: 'TypeScript ORM based on Data Mapper, Unit of Work, and Identity Map patterns.',
  homepage: 'https://mikro-orm.io',
  license: 'MIT',
  popularity: 480_000,
  versions: { range: '^6.4.0', min: '6.4.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: '@mikro-orm/core', version: '^6.4.0' },
      { name: 'reflect-metadata', version: '^0.2.2' },
    ],
    devDeps: [{ name: '@mikro-orm/cli', version: '^6.4.0' }],
  },
  requires: [],
  conflicts: [{ id: 'typeorm', severity: 'warning', reason: 'Pick one decorator-based ORM.' }],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['B4nan'],
  docs: { quickstart: 'https://mikro-orm.io/docs/quick-start' },
};
