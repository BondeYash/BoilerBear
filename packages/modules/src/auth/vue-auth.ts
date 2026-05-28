import type { ModuleManifest } from '@boilerbear/core';

export const vueAuth: ModuleManifest = {
  id: 'vue-auth',
  name: 'Vue Auth (sidebase/nuxt-auth-utils port)',
  category: 'auth',
  tags: ['auth', 'session', 'vue'],
  description: 'Session-based auth helpers for Vue apps, modeled on nuxt-auth-utils.',
  homepage: 'https://github.com/atinux/nuxt-auth-utils',
  license: 'MIT',
  popularity: 50_000,
  versions: { range: '^0.5.0', min: '0.5.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'nuxt-auth-utils', version: '^0.5.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['vue'],
  setup: [
    {
      kind: 'envVar',
      key: 'NUXT_SESSION_PASSWORD',
      example: '32-char random string',
      required: true,
    },
  ],
  maintainers: ['atinux'],
  docs: { quickstart: 'https://github.com/atinux/nuxt-auth-utils#readme' },
};
