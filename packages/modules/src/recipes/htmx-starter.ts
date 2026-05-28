import type { Recipe } from './types.js';

export const htmxStarter: Recipe = {
  id: 'htmx-starter',
  name: 'HTMX Starter',
  description: 'HTMX + Tailwind + Hyperscript + AJAX + Forms + Boost.',
  tags: ['htmx', 'tailwind', 'hypermedia'],
  template: {
    v: 1,
    language: 'js',
    packageManager: 'pnpm',
    base: 'htmx',
    modules: ['tailwindcss', 'hyperscript', 'htmx-ajax', 'htmx-forms', 'htmx-boost'],
    options: {},
  },
};
