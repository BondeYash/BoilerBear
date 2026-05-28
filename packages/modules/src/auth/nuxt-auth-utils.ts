import type { ModuleManifest } from '@boilerbear/core';

export const nuxtAuthUtils: ModuleManifest = {
  id: 'nuxt-auth-utils',
  name: 'nuxt-auth-utils',
  category: 'auth',
  tags: ['auth', 'session', 'nuxt'],
  description: 'Minimal session and OAuth utilities for Nuxt 3 with first-party providers.',
  homepage: 'https://github.com/atinux/nuxt-auth-utils',
  license: 'MIT',
  popularity: 150_000,
  versions: { range: '^0.5.0', min: '0.5.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'nuxt-auth-utils', version: '^0.5.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['nuxt'],
  setup: [
    {
      kind: 'envVar',
      key: 'NUXT_SESSION_PASSWORD',
      example: 'generate with: openssl rand -base64 32',
      required: true,
    },
  ],
  maintainers: ['atinux'],
  docs: { quickstart: 'https://github.com/atinux/nuxt-auth-utils#readme' },
};
