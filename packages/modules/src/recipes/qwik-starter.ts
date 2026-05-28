import type { Recipe } from './types.js';

export const qwikStarter: Recipe = {
  id: 'qwik-starter',
  name: 'Qwik Starter',
  description: 'Qwik + Qwik City + Tailwind + Signals + Modular Forms + Auth.js + Vitest.',
  tags: ['qwik', 'ssr', 'tailwind'],
  template: {
    v: 1,
    language: 'js',
    packageManager: 'pnpm',
    base: 'qwik',
    modules: [
      'tailwindcss',
      'qwik-signals',
      'qwik-city',
      'modular-forms-qwik',
      'qwik-auth',
      'vitest',
    ],
    options: {},
  },
};
