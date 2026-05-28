import type { ModuleManifest } from '@boilerbear/core';

export const remixUploadHandler: ModuleManifest = {
  id: 'remix-upload-handler',
  name: 'Remix Upload Handler',
  category: 'storage',
  tags: ['uploads', 'files', 'remix'],
  description: 'Built-in multipart form data parser and upload handlers for Remix.',
  homepage: 'https://remix.run/docs/en/main/utils/parse-multipart-form-data',
  license: 'MIT',
  popularity: 1_500_000,
  versions: { range: '^2.14.0', min: '2.14.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@remix-run/node', version: '^2.14.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['remix'],
  setup: [],
  maintainers: ['remix-run'],
  docs: { quickstart: 'https://remix.run/docs/en/main/utils/parse-multipart-form-data' },
};
