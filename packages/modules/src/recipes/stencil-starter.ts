import type { Recipe } from './types.js';

export const stencilStarter: Recipe = {
  id: 'stencil-starter',
  name: 'Stencil Starter',
  description: 'Stencil + Tailwind + Store + Router + Jest.',
  tags: ['stencil', 'web-components', 'tailwind'],
  template: {
    v: 1,
    language: 'js',
    packageManager: 'pnpm',
    base: 'stencil',
    modules: ['tailwindcss', 'stencil-store', 'stencil-router', 'stencil-jest'],
    options: {},
  },
};
