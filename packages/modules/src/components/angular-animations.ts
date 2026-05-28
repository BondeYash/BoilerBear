import type { ModuleManifest } from '@boilerbear/core';

export const angularAnimations: ModuleManifest = {
  id: 'angular-animations',
  name: 'Angular Animations',
  category: 'animation',
  tags: ['animation', 'angular', 'transitions'],
  description: 'Official animations module for Angular built on the Web Animations API.',
  homepage: 'https://angular.dev/guide/animations',
  license: 'MIT',
  popularity: 2_700_000,
  versions: { range: '^18.2.0', min: '18.2.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@angular/animations', version: '^18.2.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['angular'],
  setup: [],
  maintainers: ['angular'],
  docs: { quickstart: 'https://angular.dev/guide/animations' },
};
