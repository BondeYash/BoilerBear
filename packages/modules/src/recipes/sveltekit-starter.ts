import type { Recipe } from './types.js';

export const sveltekitStarter: Recipe = {
  id: 'sveltekit-starter',
  name: 'SvelteKit Starter',
  description:
    'SvelteKit + Tailwind + Drizzle ORM + Superforms + Auth.js + Vercel adapter + Vitest.',
  tags: ['sveltekit', 'fullstack', 'tailwind'],
  template: {
    v: 1,
    language: 'js',
    packageManager: 'pnpm',
    base: 'sveltekit',
    modules: [
      'tailwindcss',
      'drizzle-orm',
      'sveltekit-superforms',
      'auth-sveltekit',
      'sveltekit-vercel',
      'vitest',
    ],
    options: {},
  },
};
