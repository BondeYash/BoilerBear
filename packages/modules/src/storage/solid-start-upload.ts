import type { ModuleManifest } from '@boilerbear/core';

export const solidStartUpload: ModuleManifest = {
  id: 'solid-start-upload',
  name: 'SolidStart File Uploads',
  category: 'storage',
  tags: ['uploads', 'storage', 'solid-start', 'multipart'],
  description: 'Handle multipart form uploads in SolidStart server actions.',
  homepage: 'https://docs.solidjs.com/solid-start',
  license: 'MIT',
  popularity: 40_000,
  versions: { range: '^1.0.0', min: '1.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@solidjs/start', version: '^1.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['solid-start'],
  setup: [],
  maintainers: ['solidjs'],
  docs: { quickstart: 'https://docs.solidjs.com/solid-start' },
};
