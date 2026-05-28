import type { ModuleManifest } from '@boilerbear/core';

export const nuxtVercel: ModuleManifest = {
  id: 'nuxt-vercel',
  name: 'Nuxt on Vercel',
  category: 'ci',
  tags: ['deploy', 'vercel', 'nuxt'],
  description: 'Zero-config Nuxt 3 deployment preset for Vercel.',
  homepage: 'https://nuxt.com/deploy/vercel',
  license: 'MIT',
  popularity: 1_000_000,
  versions: { range: '^3.14.0', min: '3.14.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'nuxt', version: '^3.14.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['nuxt'],
  setup: [],
  maintainers: ['nuxt'],
  docs: { quickstart: 'https://nuxt.com/deploy/vercel' },
};
