import type { ModuleManifest } from '@boilerbear/core';

export const angularSanitizer: ModuleManifest = {
  id: 'angular-sanitizer',
  name: 'Angular DomSanitizer',
  category: 'misc',
  tags: ['security', 'sanitize', 'angular', 'xss'],
  description: 'Built-in DomSanitizer from @angular/platform-browser for safe HTML/URL handling.',
  homepage: 'https://angular.dev/api/platform-browser/DomSanitizer',
  license: 'MIT',
  popularity: 1_500_000,
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
  docs: { quickstart: 'https://angular.dev/api/platform-browser/DomSanitizer' },
};
