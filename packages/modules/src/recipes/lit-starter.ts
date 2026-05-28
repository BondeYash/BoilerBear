import type { Recipe } from './types.js';

export const litStarter: Recipe = {
  id: 'lit-starter',
  name: 'Lit Starter',
  description: 'Lit + Tailwind + Signals + Router + Web Test Runner + Localize.',
  tags: ['lit', 'web-components', 'tailwind'],
  template: {
    v: 1,
    language: 'js',
    packageManager: 'pnpm',
    base: 'lit',
    modules: ['tailwind-lit', 'lit-signals', 'lit-router', 'web-test-runner', 'lit-localize'],
    options: {},
  },
};
