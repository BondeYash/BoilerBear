import type { ModuleManifest } from '@boilerbear/core';

export const nestjsTypeorm: ModuleManifest = {
  id: 'nestjs-typeorm',
  name: '@nestjs/typeorm',
  category: 'orm',
  tags: ['nestjs', 'typeorm', 'di'],
  description: 'TypeORM integration for NestJS with DI-friendly repositories.',
  homepage: 'https://docs.nestjs.com/techniques/database',
  license: 'MIT',
  popularity: 1_100_000,
  versions: { range: '^10.0.2', min: '10.0.2' },
  languages: ['js'],
  packages: {
    deps: [
      { name: '@nestjs/typeorm', version: '^10.0.2' },
      { name: 'typeorm', version: '^0.3.20' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [{ id: 'typeorm', reason: 'Wraps typeorm for NestJS DI.' }],
  appliesTo: [],
  setup: [],
  maintainers: ['nestjs'],
  docs: { quickstart: 'https://docs.nestjs.com/techniques/database' },
};
