import type { Recipe } from './types.js';

export const viteClassic: Recipe = {
  id: 'vite-classic',
  name: 'Vite Classic (React + TS)',
  description:
    'Vite + TypeScript + Tailwind + shadcn/ui + Zustand + TanStack Query + Vitest + Biome.',
  tags: ['vite', 'react', 'spa', 'tailwind'],
  template: {
    v: 1,
    packageManager: 'pnpm',
    base: 'vite',
    modules: [
      'tailwindcss',
      'shadcn-ui',
      'zustand',
      'tanstack-query',
      'react-router',
      'vitest',
      'testing-library',
      'biome',
      'github-actions',
    ],
    options: {},
  },
};
