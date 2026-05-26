import type { ModuleManifest } from '@boilerbear/core';

export const astro: ModuleManifest = {
  id: 'astro',
  name: 'Astro',
  category: 'framework',
  tags: ['astro', 'ssg', 'islands'],
  description: 'Content-driven web framework with islands architecture.',
  homepage: 'https://astro.build',
  license: 'MIT',
  popularity: 1_800_000,
  versions: { range: '^5.0.0', min: '5.0.0' },
  languages: ['js'],
  packages: { deps: [], devDeps: [] },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  framework: {
    template: 'astro-basic',
    createCommand: '{pm} create astro@latest {name}',
  },
  setup: [],
  maintainers: ['withastro'],
  docs: { quickstart: 'https://docs.astro.build/en/install/auto/' },
};
