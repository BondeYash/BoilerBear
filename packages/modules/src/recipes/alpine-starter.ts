import type { Recipe } from './types.js';

export const alpineStarter: Recipe = {
  id: 'alpine-starter',
  name: 'Alpine Starter',
  description: 'Alpine.js + Tailwind + Store + Fetch + Validate + Vitest.',
  tags: ['alpine', 'tailwind', 'spa'],
  template: {
    v: 1,
    language: 'js',
    packageManager: 'pnpm',
    base: 'alpine',
    modules: ['tailwindcss', 'alpine-store', 'alpine-fetch', 'alpine-validate', 'vitest'],
    options: {},
  },
};
