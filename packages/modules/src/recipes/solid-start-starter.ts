import type { Recipe } from './types.js';

export const solidStartStarter: Recipe = {
  id: 'solid-start-starter',
  name: 'SolidStart Starter',
  description: 'SolidStart + Tailwind + Solid Store + Solid Router + Auth.js + Vercel + Vitest.',
  tags: ['solid-start', 'ssr', 'tailwind'],
  template: {
    v: 1,
    language: 'js',
    packageManager: 'pnpm',
    base: 'solid-start',
    modules: [
      'tailwindcss',
      'solid-store',
      'solid-router',
      'solid-auth',
      'solid-start-vercel',
      'vitest',
    ],
    options: {},
  },
};
