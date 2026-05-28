import type { ModuleManifest } from '@boilerbear/core';

export const angularHttpClient: ModuleManifest = {
  id: 'angular-http-client',
  name: 'Angular HttpClient',
  category: 'http',
  tags: ['http', 'fetch', 'angular'],
  description: 'Built-in HTTP client from @angular/common/http for making API calls.',
  homepage: 'https://angular.dev/guide/http',
  license: 'MIT',
  popularity: 4_000_000,
  versions: { range: '^18.2.0', min: '18.2.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@angular/common', version: '^18.2.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['angular'],
  setup: [],
  maintainers: ['angular'],
  docs: { quickstart: 'https://angular.dev/guide/http' },
};
