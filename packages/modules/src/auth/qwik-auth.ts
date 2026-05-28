import type { ModuleManifest } from '@boilerbear/core';

export const qwikAuth: ModuleManifest = {
  id: 'qwik-auth',
  name: 'Auth.js for Qwik',
  category: 'auth',
  tags: ['auth', 'oauth', 'qwik'],
  description: 'Auth.js integration for Qwik with multiple OAuth providers and sessions.',
  homepage: 'https://qwik.dev/docs/integrations/authjs/',
  license: 'ISC',
  popularity: 40_000,
  versions: { range: '^0.2.2', min: '0.2.2' },
  languages: ['js'],
  packages: {
    deps: [
      { name: '@auth/qwik', version: '^0.2.2' },
      { name: '@auth/core', version: '^0.37.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['qwik'],
  setup: [
    {
      kind: 'envVar',
      key: 'AUTH_SECRET',
      example: '32-char random string',
      required: true,
    },
  ],
  maintainers: ['authjs'],
  docs: { quickstart: 'https://qwik.dev/docs/integrations/authjs/' },
};
