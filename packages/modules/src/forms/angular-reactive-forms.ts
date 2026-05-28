import type { ModuleManifest } from '@boilerbear/core';

export const angularReactiveForms: ModuleManifest = {
  id: 'angular-reactive-forms',
  name: 'Angular Reactive Forms',
  category: 'validation',
  tags: ['forms', 'validation', 'angular'],
  description: 'Model-driven reactive forms with built-in validators for Angular.',
  homepage: 'https://angular.dev/guide/forms/reactive-forms',
  license: 'MIT',
  popularity: 3_800_000,
  versions: { range: '^18.2.0', min: '18.2.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@angular/forms', version: '^18.2.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['angular'],
  setup: [],
  maintainers: ['angular'],
  docs: { quickstart: 'https://angular.dev/guide/forms/reactive-forms' },
};
