import type { Recipe } from './types.js';

export const markoStarter: Recipe = {
  id: 'marko-starter',
  name: 'Marko Starter',
  description: 'Marko + Tailwind + State + Run API + Forms + Vitest.',
  tags: ['marko', 'tailwind', 'ssr'],
  template: {
    v: 1,
    language: 'js',
    packageManager: 'pnpm',
    base: 'marko',
    modules: ['tailwindcss', 'marko-state', 'marko-run-api', 'marko-forms', 'vitest'],
    options: {},
  },
};
