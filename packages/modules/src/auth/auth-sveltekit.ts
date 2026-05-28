import type { ModuleManifest } from '@boilerbear/core';

export const authSveltekit: ModuleManifest = {
  id: 'auth-sveltekit',
  name: 'Auth.js for SvelteKit',
  category: 'auth',
  tags: ['auth', 'oauth', 'sveltekit'],
  description: 'Authentication for SvelteKit using Auth.js (formerly NextAuth.js).',
  homepage: 'https://authjs.dev/reference/sveltekit',
  license: 'ISC',
  popularity: 250_000,
  versions: { range: '^1.7.0', min: '1.7.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: '@auth/sveltekit', version: '^1.7.0' },
      { name: '@auth/core', version: '^0.37.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['sveltekit'],
  setup: [
    {
      kind: 'envVar',
      key: 'AUTH_SECRET',
      example: 'random 32+ char string',
      required: true,
    },
  ],
  maintainers: ['authjs'],
  docs: { quickstart: 'https://authjs.dev/reference/sveltekit' },
};
