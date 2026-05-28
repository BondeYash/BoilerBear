import type { Recipe } from './types.js';

export const mithrilStarter: Recipe = {
  id: 'mithril-starter',
  name: 'Mithril Starter',
  description: 'Mithril.js + Tailwind + Stream + Request + Route + Mocha.',
  tags: ['mithril', 'tailwind', 'spa'],
  template: {
    v: 1,
    language: 'js',
    packageManager: 'pnpm',
    base: 'mithril',
    modules: ['tailwindcss', 'mithril-stream', 'mithril-request', 'mithril-route', 'mocha'],
    options: {},
  },
};
