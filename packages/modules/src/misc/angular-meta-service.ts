import type { ModuleManifest } from '@boilerbear/core';

export const angularMetaService: ModuleManifest = {
  id: 'angular-meta-service',
  name: 'Angular Meta Service',
  category: 'misc',
  tags: ['seo', 'meta', 'angular'],
  description: 'Built-in Meta and Title services from @angular/platform-browser for SEO tags.',
  homepage: 'https://angular.dev/api/platform-browser/Meta',
  license: 'MIT',
  popularity: 1_000_000,
  versions: { range: '^18.2.0', min: '18.2.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@angular/platform-browser', version: '^18.2.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['angular'],
  setup: [],
  maintainers: ['angular'],
  docs: { quickstart: 'https://angular.dev/api/platform-browser/Meta' },
};
