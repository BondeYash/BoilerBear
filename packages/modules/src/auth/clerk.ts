import type { ModuleManifest } from '@boilerbear/core';

export const clerk: ModuleManifest = {
  id: 'clerk',
  name: 'Clerk',
  category: 'auth',
  tags: ['auth', 'managed', 'saas'],
  description: 'Hosted authentication and user management with pre-built UI components.',
  homepage: 'https://clerk.com',
  license: 'Proprietary',
  popularity: 1_700_000,
  versions: { range: '^6.0.0', min: '6.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@clerk/nextjs', version: '^6.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [{ id: 'next-auth', severity: 'warning', reason: 'Pick a single auth provider.' }],
  recommends: [],
  appliesTo: ['next'],
  setup: [
    {
      kind: 'envVar',
      key: 'NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY',
      example: 'pk_test_...',
      required: true,
    },
    {
      kind: 'envVar',
      key: 'CLERK_SECRET_KEY',
      example: 'sk_test_...',
      required: true,
    },
  ],
  maintainers: ['clerkinc'],
  docs: { quickstart: 'https://clerk.com/docs/quickstarts/nextjs' },
};
