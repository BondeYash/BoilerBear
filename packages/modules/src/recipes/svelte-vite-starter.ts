import type { Recipe } from './types.js';

export const svelteViteStarter: Recipe = {
  id: 'svelte-vite-starter',
  name: 'Svelte Vite Starter',
  description:
    'Svelte + Vite + Tailwind + Nanostores + TanStack Query + Felte + svelte-routing + Vitest.',
  tags: ['svelte', 'vite', 'spa', 'tailwind'],
  template: {
    v: 1,
    language: 'js',
    packageManager: 'pnpm',
    base: 'svelte',
    modules: [
      'tailwindcss',
      'nanostores',
      'tanstack-query-svelte',
      'felte',
      'svelte-routing',
      'vitest',
    ],
    options: {},
  },
};
