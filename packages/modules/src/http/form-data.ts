import type { ModuleManifest } from '@boilerbear/core';

export const formData: ModuleManifest = {
  id: 'form-data',
  name: 'form-data',
  category: 'http',
  tags: ['multipart', 'upload', 'http'],
  description: 'A library to create readable multipart/form-data streams.',
  homepage: 'https://github.com/form-data/form-data',
  license: 'MIT',
  popularity: 90_000_000,
  versions: { range: '^4.0.1', min: '4.0.1' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'form-data', version: '^4.0.1' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['form-data'],
  docs: { quickstart: 'https://github.com/form-data/form-data#usage' },
};
