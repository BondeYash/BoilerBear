import type { Recipe } from './types.js';

export const nextSaasStarter: Recipe = {
  id: 'next-saas-starter',
  name: 'Next.js SaaS Starter',
  description:
    'Next.js App Router + Tailwind + shadcn/ui + Clerk auth + TanStack Query + Zod + RHF + Vitest + Playwright + Biome + GitHub Actions.',
  tags: ['next', 'saas', 'clerk', 'tailwind'],
  template: {
    v: 1,
    packageManager: 'pnpm',
    base: 'next',
    modules: [
      'tailwindcss',
      'shadcn-ui',
      'clerk',
      'tanstack-query',
      'zod',
      'react-hook-form',
      'vitest',
      'testing-library',
      'playwright',
      'biome',
      'husky-lint-staged',
      'github-actions',
      'posthog',
    ],
    options: {},
  },
};
