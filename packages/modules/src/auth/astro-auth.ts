import type { ModuleManifest } from '@boilerbear/core';

export const astroAuth: ModuleManifest = {
  id: 'astro-auth',
  name: 'Auth.js for Astro',
  category: 'auth',
  tags: ['auth', 'oauth', 'astro'],
  description: 'Auth.js integration for Astro with multiple OAuth providers.',
  homepage: 'https://github.com/nowaythatworked/auth-astro',
  license: 'ISC',
  popularity: 50_000,
  versions: { range: '^4.2.0', min: '4.2.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'auth-astro', version: '^4.2.0' },
      { name: '@auth/core', version: '^0.37.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['astro'],
  setup: [
    {
      kind: 'envVar',
      key: 'AUTH_SECRET',
      example: '32-char random string',
      required: true,
    },
  ],
  maintainers: ['nowaythatworked'],
  docs: { quickstart: 'https://github.com/nowaythatworked/auth-astro' },
};
