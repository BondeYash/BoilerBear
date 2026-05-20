import type { ModuleManifest } from '@boilerbear/core';

export const nextAuth: ModuleManifest = {
  id: 'next-auth',
  name: 'Auth.js (NextAuth)',
  category: 'auth',
  tags: ['auth', 'oss', 'oauth'],
  description:
    'Open-source authentication for Next.js with OAuth, credentials, and database adapters.',
  homepage: 'https://authjs.dev',
  license: 'ISC',
  popularity: 5_300_000,
  versions: { range: '^5.0.0', min: '5.0.0-beta.20' },
  packages: {
    deps: [{ name: 'next-auth', version: '^5.0.0-beta.20' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [{ id: 'clerk', severity: 'warning' }],
  recommends: [],
  appliesTo: ['next'],
  setup: [
    {
      kind: 'envVar',
      key: 'AUTH_SECRET',
      example: 'generate with: openssl rand -base64 32',
      required: true,
    },
  ],
  maintainers: ['nextauthjs'],
  docs: { quickstart: 'https://authjs.dev/getting-started/installation' },
};
