import type { ModuleManifest } from '@boilerbear/core';

export const motionV: ModuleManifest = {
  id: 'motion-v',
  name: 'Motion for Vue',
  category: 'animation',
  tags: ['animation', 'vue', 'gestures'],
  description: 'Production-ready animation library for Vue with layout animations and gestures.',
  homepage: 'https://motion.dev/docs/vue',
  license: 'MIT',
  popularity: 90_000,
  versions: { range: '^0.18.0', min: '0.18.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'motion-v', version: '^0.18.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['vue', 'nuxt'],
  setup: [],
  maintainers: ['motiondivision'],
  docs: { quickstart: 'https://motion.dev/docs/vue-quick-start' },
};
