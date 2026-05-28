import type { ModuleManifest } from '@boilerbear/core';

export const nuxtUploadthing: ModuleManifest = {
  id: 'nuxt-uploadthing',
  name: 'UploadThing for Nuxt',
  category: 'storage',
  tags: ['uploads', 'files', 'nuxt'],
  description: 'Type-safe file uploads for Nuxt 3 via the official UploadThing module.',
  homepage: 'https://docs.uploadthing.com',
  license: 'MIT',
  popularity: 60_000,
  versions: { range: '^7.2.0', min: '7.2.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'uploadthing', version: '^7.2.0' },
      { name: '@uploadthing/nuxt', version: '^7.0.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['nuxt'],
  setup: [
    {
      kind: 'envVar',
      key: 'UPLOADTHING_TOKEN',
      example: 'sk_live_...',
      required: true,
    },
  ],
  maintainers: ['pingdotgg'],
  docs: { quickstart: 'https://docs.uploadthing.com/getting-started/nuxt' },
};
