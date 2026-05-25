import type { ModuleManifest } from '@boilerbear/core';

export const prisma: ModuleManifest = {
  id: 'prisma',
  name: 'Prisma',
  category: 'orm',
  tags: ['orm', 'typescript', 'migrations'],
  description: 'Next-generation TypeScript ORM with type-safe queries and migrations.',
  homepage: 'https://www.prisma.io',
  license: 'Apache-2.0',
  popularity: 4_800_000,
  versions: { range: '^5.20.0', min: '5.20.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@prisma/client', version: '^5.20.0' }],
    devDeps: [{ name: 'prisma', version: '^5.20.0' }],
  },
  requires: [],
  conflicts: [
    { id: 'drizzle-orm', severity: 'warning', reason: 'Pick one ORM.' },
    { id: 'typeorm', severity: 'warning', reason: 'Pick one ORM.' },
    { id: 'sequelize', severity: 'warning', reason: 'Pick one ORM.' },
  ],
  recommends: [],
  appliesTo: [],
  setup: [{ kind: 'envVar', key: 'DATABASE_URL', example: 'postgres://...', required: true }],
  maintainers: ['prisma'],
  docs: { quickstart: 'https://www.prisma.io/docs/getting-started/quickstart' },
};
