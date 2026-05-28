import type { ModuleManifest } from '@boilerbear/core';

export const litMotion: ModuleManifest = {
  id: 'lit-motion',
  name: 'Lit Motion',
  category: 'animation',
  tags: ['animation', 'motion', 'lit'],
  description: 'Animation primitives for Lit components using the motion library.',
  homepage: 'https://lit.dev/docs/api/directives/#animate',
  license: 'MIT',
  popularity: 30_000,
  versions: { range: '^11.11.0', min: '11.11.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'lit', version: '^3.2.0' },
      { name: 'motion', version: '^11.11.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['lit'],
  setup: [],
  maintainers: ['lit'],
  docs: { quickstart: 'https://lit.dev/docs/api/directives/#animate' },
};
