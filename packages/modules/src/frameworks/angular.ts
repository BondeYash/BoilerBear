import type { ModuleManifest } from '@boilerbear/core';

export const angular: ModuleManifest = {
  id: 'angular',
  name: 'Angular',
  category: 'framework',
  tags: ['angular', 'spa', 'rxjs'],
  description: 'Opinionated TypeScript framework with batteries-included tooling.',
  homepage: 'https://angular.dev',
  license: 'MIT',
  popularity: 4_500_000,
  versions: { range: '^18.0.0', min: '18.0.0' },
  languages: ['js'],
  packages: { deps: [], devDeps: [] },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  framework: {
    template: 'angular-strict',
    createCommand: 'npx -p @angular/cli ng new {name} --strict',
  },
  setup: [],
  maintainers: ['angular'],
  docs: { quickstart: 'https://angular.dev/tutorials/first-app' },
};
