import type { ModuleManifest } from '@boilerbear/core';

export const framerMotion: ModuleManifest = {
  id: 'framer-motion',
  name: 'Framer Motion',
  category: 'animation',
  tags: ['animation', 'react', 'gestures'],
  description: 'Production-ready motion library for React with layout animations and gestures.',
  homepage: 'https://www.framer.com/motion/',
  license: 'MIT',
  popularity: 8_600_000,
  versions: { range: '^11.11.0', min: '11.11.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'framer-motion', version: '^11.11.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['react', 'next', 'remix', 'preact'],
  setup: [],
  maintainers: ['framer'],
  docs: { quickstart: 'https://www.framer.com/motion/introduction/' },
};
