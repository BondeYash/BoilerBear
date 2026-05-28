import type { ModuleManifest } from '@boilerbear/core';

export const nuxtSecurity: ModuleManifest = {
  id: 'nuxt-security',
  name: 'nuxt-security',
  category: 'misc',
  tags: ['security', 'csp', 'headers'],
  description: 'Security headers, CSP, rate limiting, and CSRF protection for Nuxt 3.',
  homepage: 'https://nuxt-security.vercel.app',
  license: 'MIT',
  popularity: 200_000,
  versions: { range: '^2.1.0', min: '2.1.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'nuxt-security', version: '^2.1.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['nuxt'],
  setup: [],
  maintainers: ['baroshem'],
  docs: { quickstart: 'https://nuxt-security.vercel.app/getting-started/setup' },
};
