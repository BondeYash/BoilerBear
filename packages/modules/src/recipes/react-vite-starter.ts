import type { Recipe } from './types.js';

export const reactViteStarter: Recipe = {
  id: 'react-vite-starter',
  name: 'React Vite Starter',
  description: 'React + Vite + Tailwind + Zustand + TanStack Query + React Router + Vitest.',
  tags: ['react', 'vite', 'spa', 'tailwind'],
  template: {
    v: 1,
    language: 'js',
    packageManager: 'pnpm',
    base: 'react',
    modules: [
      'tailwindcss',
      'zustand',
      'tanstack-query',
      'react-router',
      'react-hook-form',
      'vitest',
      'testing-library',
    ],
    options: {},
  },
};
