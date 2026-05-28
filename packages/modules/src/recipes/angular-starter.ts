import type { Recipe } from './types.js';

export const angularStarter: Recipe = {
  id: 'angular-starter',
  name: 'Angular Starter',
  description: 'Angular + Material + NgRx + Router + Reactive Forms + Karma/Jasmine + OIDC auth.',
  tags: ['angular', 'spa', 'material'],
  template: {
    v: 1,
    language: 'js',
    packageManager: 'pnpm',
    base: 'angular',
    modules: [
      'angular-material',
      'ngrx-store',
      'angular-router',
      'angular-reactive-forms',
      'karma-jasmine',
      'angular-auth-oidc-client',
    ],
    options: {},
  },
};
