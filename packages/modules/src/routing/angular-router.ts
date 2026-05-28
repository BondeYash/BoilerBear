import type { ModuleManifest } from '@boilerbear/core';

export const angularRouter: ModuleManifest = {
  id: 'angular-router',
  name: 'Angular Router',
  category: 'routing',
  tags: ['router', 'angular', 'spa'],
  description: 'Official router for Angular with lazy-loading and guards.',
  homepage: 'https://angular.dev/guide/routing',
  license: 'MIT',
  popularity: 3_900_000,
  versions: { range: '^18.2.0', min: '18.2.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@angular/router', version: '^18.2.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['angular'],
  setup: [],
  maintainers: ['angular'],
  docs: { quickstart: 'https://angular.dev/guide/routing' },
};
