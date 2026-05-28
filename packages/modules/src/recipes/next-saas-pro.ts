import type { Recipe } from './types.js';

export const nextSaasPro: Recipe = {
  id: 'next-saas-pro',
  name: 'Next.js SaaS Pro',
  description:
    'Production-grade Next.js stack with Tailwind, Zustand, Prisma, tRPC, React Hook Form, Auth.js, Sentry, and Vitest.',
  tags: ['next', 'saas', 'trpc', 'prisma'],
  template: {
    v: 1,
    language: 'js',
    packageManager: 'pnpm',
    base: 'next',
    modules: [
      'tailwindcss',
      'zustand',
      'prisma',
      'trpc',
      'react-hook-form',
      'next-auth',
      'sentry-nextjs',
      'vitest',
    ],
    options: {},
  },
};
