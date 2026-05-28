import type { ModuleManifest } from '@boilerbear/core';

export const remixAuth: ModuleManifest = {
  id: 'remix-auth',
  name: 'Remix Auth',
  category: 'auth',
  tags: ['auth', 'session', 'remix'],
  description: 'Simple and configurable authentication library for Remix.',
  homepage: 'https://github.com/sergiodxa/remix-auth',
  license: 'MIT',
  popularity: 200_000,
  versions: { range: '^3.7.0', min: '3.7.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'remix-auth', version: '^3.7.0' },
      { name: 'remix-auth-form', version: '^1.5.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['remix'],
  setup: [
    {
      kind: 'envVar',
      key: 'SESSION_SECRET',
      example: 'generate with: openssl rand -base64 32',
      required: true,
    },
  ],
  maintainers: ['sergiodxa'],
  docs: { quickstart: 'https://github.com/sergiodxa/remix-auth#readme' },
};
