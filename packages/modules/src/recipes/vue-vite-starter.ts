import type { Recipe } from './types.js';

export const vueViteStarter: Recipe = {
  id: 'vue-vite-starter',
  name: 'Vue Vite Starter',
  description: 'Vue 3 + Vite + Tailwind + Pinia + Vue Router + Vitest.',
  tags: ['vue', 'vite', 'spa', 'tailwind'],
  template: {
    v: 1,
    language: 'js',
    packageManager: 'pnpm',
    base: 'vue',
    modules: ['tailwindcss', 'pinia', 'vue-router', 'vee-validate', 'vitest'],
    options: {},
  },
};
