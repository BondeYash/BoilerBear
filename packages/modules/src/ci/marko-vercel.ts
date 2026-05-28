import type { ModuleManifest } from '@boilerbear/core';

export const markoVercel: ModuleManifest = {
  id: 'marko-vercel',
  name: 'Marko on Vercel',
  category: 'ci',
  tags: ['deploy', 'vercel', 'marko'],
  description: 'Deploy Marko Run apps to Vercel using the official adapter.',
  homepage: 'https://github.com/marko-js/run',
  license: 'MIT',
  popularity: 10_000,
  versions: { range: '^0.6.0', min: '0.6.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@marko/run', version: '^0.6.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['marko'],
  setup: [],
  maintainers: ['marko-js'],
  docs: { quickstart: 'https://github.com/marko-js/run' },
};
