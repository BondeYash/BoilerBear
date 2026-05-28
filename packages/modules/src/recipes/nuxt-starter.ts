import type { Recipe } from './types.js';

export const nuxtStarter: Recipe = {
  id: 'nuxt-starter',
  name: 'Nuxt Starter',
  description:
    'Opinionated Nuxt 3 stack with Nuxt UI, Pinia, Drizzle ORM, nuxt-auth-utils, VeeValidate, Nitro/H3, and Vitest.',
  tags: ['nuxt', 'starter', 'pinia', 'drizzle'],
  template: {
    v: 1,
    language: 'js',
    packageManager: 'pnpm',
    base: 'nuxt',
    modules: [
      'nuxt-ui',
      'pinia',
      'drizzle-orm',
      'nuxt-auth-utils',
      'vee-validate',
      'nitro-h3',
      'vitest',
    ],
    options: {},
  },
};
