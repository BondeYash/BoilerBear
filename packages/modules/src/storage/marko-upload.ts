import type { ModuleManifest } from '@boilerbear/core';

export const markoUpload: ModuleManifest = {
  id: 'marko-upload',
  name: 'Marko Upload',
  category: 'storage',
  tags: ['uploads', 'files', 'marko', 'storage'],
  description: 'File upload handling for Marko apps.',
  homepage: 'https://markojs.com',
  license: 'MIT',
  popularity: 10_000,
  versions: { range: '^5.35.0', min: '5.35.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'marko', version: '^5.35.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['marko'],
  setup: [],
  maintainers: ['marko-js'],
  docs: { quickstart: 'https://markojs.com' },
};
