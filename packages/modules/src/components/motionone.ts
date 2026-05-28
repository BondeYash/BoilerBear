import type { ModuleManifest } from '@boilerbear/core';

export const motionone: ModuleManifest = {
  id: 'motionone',
  name: 'Motion',
  category: 'animation',
  tags: ['animation', 'motion', 'web-animations'],
  description: 'Tiny, performant animation library powered by the Web Animations API.',
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
  appliesTo: ['qwik', 'stencil', 'marko'],
  setup: [],
  maintainers: ['motiondivision'],
  docs: { quickstart: 'https://motion.dev' },
};
