import type { ModuleManifest } from '@boilerbear/core';

export const qwikUploadthing: ModuleManifest = {
  id: 'qwik-uploadthing',
  name: 'UploadThing for Qwik',
  category: 'storage',
  tags: ['uploads', 'storage', 'qwik'],
  description: 'Type-safe file uploads for Qwik powered by UploadThing.',
  homepage: 'https://docs.uploadthing.com',
  license: 'MIT',
  popularity: 60_000,
  versions: { range: '^7.2.0', min: '7.2.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'uploadthing', version: '^7.2.0' },
      { name: '@uploadthing/qwik', version: '^7.0.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['qwik'],
  setup: [
    {
      kind: 'envVar',
      key: 'UPLOADTHING_TOKEN',
      example: 'utt_xxx...',
      required: true,
    },
  ],
  maintainers: ['pingdotgg'],
  docs: { quickstart: 'https://docs.uploadthing.com' },
};
