import type { ModuleManifest } from '@boilerbear/core';

export const ngrxStore: ModuleManifest = {
  id: 'ngrx-store',
  name: 'NgRx Store',
  category: 'state',
  tags: ['state', 'redux', 'angular'],
  description: 'Reactive state management for Angular apps inspired by Redux.',
  homepage: 'https://ngrx.io',
  license: 'MIT',
  popularity: 800_000,
  versions: { range: '^18.1.0', min: '18.1.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@ngrx/store', version: '^18.1.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['angular'],
  setup: [],
  maintainers: ['ngrx'],
  docs: { quickstart: 'https://ngrx.io/guide/store' },
};
