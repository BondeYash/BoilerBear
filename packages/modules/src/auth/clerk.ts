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
  versions: { range: '^5.18.0', min: '5.18.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@clerk/clerk-react', version: '^5.18.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [{ id: 'next-auth', severity: 'warning', reason: 'Pick a single auth provider.' }],
  recommends: [],
  appliesTo: ['react', 'next', 'lit', 'stencil'],
  setup: [
    {
      kind: 'envVar',
      key: 'VITE_CLERK_PUBLISHABLE_KEY',
      example: 'pk_test_...',
      required: true,
    },
  ],
  maintainers: ['clerkinc'],
  docs: { quickstart: 'https://clerk.com/docs/quickstarts/react' },
};
