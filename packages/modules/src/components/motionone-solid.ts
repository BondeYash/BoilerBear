import type { ModuleManifest } from '@boilerbear/core';

export const motiononeSolid: ModuleManifest = {
  id: 'motionone-solid',
  name: 'Motion One (Solid)',
  category: 'animation',
  tags: ['animation', 'solid', 'motion'],
  description: 'Tiny, performant animation library for Solid powered by the Web Animations API.',
  homepage: 'https://motion.dev/docs/solid-quick-start',
  license: 'MIT',
  popularity: 80_000,
  versions: { range: '^10.16.4', min: '10.16.4' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@motionone/solid', version: '^10.16.4' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['solid', 'solid-start'],
  setup: [],
  maintainers: ['motiondivision'],
  docs: { quickstart: 'https://motion.dev/docs/solid-quick-start' },
};
