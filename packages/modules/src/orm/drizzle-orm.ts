import type { ModuleManifest } from '@boilerbear/core';

export const drizzleOrm: ModuleManifest = {
  id: 'drizzle-orm',
  name: 'Drizzle ORM',
  category: 'orm',
  tags: ['orm', 'sql', 'typescript', 'edge'],
  description: 'Lightweight, SQL-first TypeScript ORM with full type inference.',
  homepage: 'https://orm.drizzle.team',
  license: 'Apache-2.0',
  popularity: 1_400_000,
  versions: { range: '^0.34.0', min: '0.34.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'drizzle-orm', version: '^0.34.0' }],
    devDeps: [{ name: 'drizzle-kit', version: '^0.25.0' }],
  },
  requires: [],
  conflicts: [
    { id: 'prisma', severity: 'warning', reason: 'Pick one ORM.' },
    { id: 'typeorm', severity: 'warning', reason: 'Pick one ORM.' },
  ],
  recommends: [],
  appliesTo: ['react', 'next', 'vite'],
  setup: [],
  maintainers: ['drizzle-team'],
  docs: { quickstart: 'https://orm.drizzle.team/docs/get-started' },
};
