import type { ModuleManifest } from '@boilerbear/core';

export const preactClerk: ModuleManifest = {
  id: 'preact-clerk',
  name: 'Clerk for Preact',
  category: 'auth',
  tags: ['auth', 'session', 'preact'],
  description: 'Authentication and user management for Preact apps using Clerk React SDK.',
  homepage: 'https://clerk.com/docs/quickstarts/preact',
  license: 'MIT',
  popularity: 100_000,
  versions: { range: '^5.18.0', min: '5.18.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@clerk/clerk-react', version: '^5.18.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['preact'],
  setup: [
    {
      kind: 'envVar',
      key: 'VITE_CLERK_PUBLISHABLE_KEY',
      example: 'pk_test_...',
      required: true,
    },
  ],
  maintainers: ['clerkinc'],
  docs: { quickstart: 'https://clerk.com/docs/quickstarts/preact' },
};
