import type { Recipe } from './types.js';

export const remixStarter: Recipe = {
  id: 'remix-starter',
  name: 'Remix Starter',
  description:
    'Opinionated Remix stack with Tailwind, Prisma, Remix Auth, Remix Validated Form, Vercel adapter, and Vitest.',
  tags: ['remix', 'starter', 'prisma', 'vercel'],
  template: {
    v: 1,
    language: 'js',
    packageManager: 'pnpm',
    base: 'remix',
    modules: [
      'tailwindcss',
      'prisma',
      'remix-auth',
      'remix-validated-form',
      'remix-vercel',
      'vitest',
    ],
    options: {},
  },
};
