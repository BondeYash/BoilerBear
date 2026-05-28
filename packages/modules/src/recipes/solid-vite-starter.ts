import type { Recipe } from './types.js';

export const solidViteStarter: Recipe = {
  id: 'solid-vite-starter',
  name: 'Solid Vite Starter',
  description:
    'Solid + Vite + Tailwind + Solid Store + TanStack Query + Solid Router + Modular Forms + Vitest.',
  tags: ['solid', 'vite', 'spa', 'tailwind'],
  template: {
    v: 1,
    language: 'js',
    packageManager: 'pnpm',
    base: 'solid',
    modules: [
      'tailwindcss',
      'solid-store',
      'tanstack-query-solid',
      'solid-router',
      'modular-forms-solid',
      'vitest',
    ],
    options: {},
  },
};
