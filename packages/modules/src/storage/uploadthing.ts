import type { ModuleManifest } from '@boilerbear/core';

export const uploadthing: ModuleManifest = {
  id: 'uploadthing',
  name: 'UploadThing',
  category: 'storage',
  tags: ['uploads', 'files', 'storage'],
  description: 'Type-safe file uploads with first-party Next.js and React adapters.',
  homepage: 'https://uploadthing.com',
  license: 'MIT',
  popularity: 200_000,
  versions: { range: '^7.4.0', min: '7.4.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'uploadthing', version: '^7.4.0' },
      { name: '@uploadthing/react', version: '^7.1.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['react', 'next'],
  setup: [
    {
      kind: 'envVar',
      key: 'UPLOADTHING_TOKEN',
      example: 'sk_live_...',
      required: true,
    },
  ],
  maintainers: ['pingdotgg'],
  docs: { quickstart: 'https://docs.uploadthing.com/getting-started/appdir' },
};
