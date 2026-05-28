import type { ModuleManifest } from '@boilerbear/core';

export const ngxFileDrop: ModuleManifest = {
  id: 'ngx-file-drop',
  name: 'ngx-file-drop',
  category: 'storage',
  tags: ['upload', 'files', 'drag-and-drop', 'angular'],
  description: 'Angular file and folder drag-and-drop upload component.',
  homepage: 'https://github.com/georgipeltekov/ngx-file-drop',
  license: 'MIT',
  popularity: 80_000,
  versions: { range: '^16.0.0', min: '16.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'ngx-file-drop', version: '^16.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['angular'],
  setup: [],
  maintainers: ['georgipeltekov'],
  docs: { quickstart: 'https://github.com/georgipeltekov/ngx-file-drop#readme' },
};
