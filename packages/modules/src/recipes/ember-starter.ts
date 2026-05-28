import type { Recipe } from './types.js';

export const emberStarter: Recipe = {
  id: 'ember-starter',
  name: 'Ember Starter',
  description: 'Ember + Tailwind + Ember Data + Simple Auth + Changeset Validations + QUnit.',
  tags: ['ember', 'spa', 'tailwind'],
  template: {
    v: 1,
    language: 'js',
    packageManager: 'pnpm',
    base: 'ember',
    modules: [
      'ember-tailwind',
      'ember-data',
      'ember-simple-auth',
      'ember-changeset-validations',
      'ember-qunit',
    ],
    options: {},
  },
};
