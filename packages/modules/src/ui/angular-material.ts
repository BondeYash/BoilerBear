import type { ModuleManifest } from '@boilerbear/core';

export const angularMaterial: ModuleManifest = {
  id: 'angular-material',
  name: 'Angular Material',
  category: 'styling',
  tags: ['ui', 'components', 'angular', 'material'],
  description: 'Material Design components for Angular.',
  homepage: 'https://material.angular.io',
  license: 'MIT',
  popularity: 1_300_000,
  versions: { range: '^18.2.0', min: '18.2.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@angular/material', version: '^18.2.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['angular'],
  setup: [],
  maintainers: ['angular'],
  docs: { quickstart: 'https://material.angular.io/guide/getting-started' },
};
