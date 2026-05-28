import type { Recipe } from './types.js';

export const preactViteStarter: Recipe = {
  id: 'preact-vite-starter',
  name: 'Preact Vite Starter',
  description: 'Preact + Vite + Tailwind + Signals + Router + Forms + Vitest.',
  tags: ['preact', 'vite', 'spa', 'tailwind'],
  template: {
    v: 1,
    language: 'js',
    packageManager: 'pnpm',
    base: 'preact',
    modules: ['tailwindcss', 'preact-signals', 'preact-router', 'react-hook-form', 'vitest'],
    options: {},
  },
};
