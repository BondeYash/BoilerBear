import type { ModuleManifest } from '@boilerbear/core';

export const astroCloudinary: ModuleManifest = {
  id: 'astro-cloudinary',
  name: 'Astro Cloudinary',
  category: 'storage',
  tags: ['images', 'cdn', 'cloudinary', 'astro'],
  description: 'Cloudinary components and helpers for image and video delivery in Astro.',
  homepage: 'https://astro.cloudinary.dev',
  license: 'MIT',
  popularity: 40_000,
  versions: { range: '^1.2.0', min: '1.2.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'astro-cloudinary', version: '^1.2.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['astro'],
  setup: [
    {
      kind: 'envVar',
      key: 'PUBLIC_CLOUDINARY_CLOUD_NAME',
      example: 'your-cloud-name',
      required: true,
    },
  ],
  maintainers: ['colbyfayock'],
  docs: { quickstart: 'https://astro.cloudinary.dev' },
};
