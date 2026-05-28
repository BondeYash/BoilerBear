import type { ModuleManifest } from '@boilerbear/core';

export const sveltekitUploadthing: ModuleManifest = {
  id: 'sveltekit-uploadthing',
  name: 'UploadThing for SvelteKit',
  category: 'storage',
  tags: ['uploads', 'storage', 'sveltekit'],
  description: 'File uploads for SvelteKit with type-safe APIs and easy integration.',
  homepage: 'https://docs.uploadthing.com/getting-started/sveltekit',
  license: 'MIT',
  popularity: 80_000,
  versions: { range: '^7.2.0', min: '7.2.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'uploadthing', version: '^7.2.0' },
      { name: '@uploadthing/svelte', version: '^7.0.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['sveltekit'],
  setup: [
    {
      kind: 'envVar',
      key: 'UPLOADTHING_TOKEN',
      example: 'sk_live_...',
      required: true,
    },
  ],
  maintainers: ['pingdotgg'],
  docs: { quickstart: 'https://docs.uploadthing.com/getting-started/sveltekit' },
};
