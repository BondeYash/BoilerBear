import type { ModuleManifest } from '@boilerbear/core';

export const filepond: ModuleManifest = {
  id: 'filepond',
  name: 'FilePond',
  category: 'storage',
  tags: ['uploads', 'files', 'storage'],
  description:
    'A flexible JavaScript file upload library with image previews, drag and drop, and async uploads.',
  homepage: 'https://pqina.nl/filepond/',
  license: 'MIT',
  popularity: 250_000,
  versions: { range: '^4.31.1', min: '4.31.1' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'filepond', version: '^4.31.1' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['svelte', 'solid', 'preact', 'lit', 'alpine', 'mithril', 'stencil'],
  setup: [],
  maintainers: ['pqina'],
  docs: { quickstart: 'https://pqina.nl/filepond/docs/' },
};
