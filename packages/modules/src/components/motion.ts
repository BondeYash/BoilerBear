import type { ModuleManifest } from '@boilerbear/core';

export const motion: ModuleManifest = {
  id: 'motion',
  name: 'Motion (Astro)',
  category: 'animation',
  tags: ['animation', 'motion', 'astro'],
  description: 'Lightweight animation library for Astro client islands.',
  homepage: 'https://motion.dev',
  license: 'MIT',
  popularity: 500_000,
  versions: { range: '^11.11.0', min: '11.11.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'motion', version: '^11.11.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['astro'],
  setup: [],
  maintainers: ['motiondivision'],
  docs: { quickstart: 'https://motion.dev' },
};
