import type { ModuleManifest } from '@boilerbear/core';

export const contentlayer: ModuleManifest = {
  id: 'contentlayer',
  name: 'Contentlayer',
  category: 'misc',
  tags: ['cms', 'mdx', 'content'],
  description: 'Content SDK that turns local files into type-safe data for Next.js.',
  homepage: 'https://contentlayer.dev',
  license: 'MIT',
  popularity: 250_000,
  versions: { range: '^0.5.3', min: '0.5.3' },
  languages: ['js'],
  packages: {
    deps: [],
    devDeps: [
      { name: 'contentlayer2', version: '^0.5.3' },
      { name: 'next-contentlayer2', version: '^0.5.3' },
    ],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['next'],
  setup: [],
  maintainers: ['contentlayerdev'],
  docs: { quickstart: 'https://contentlayer.dev/docs/getting-started' },
};
