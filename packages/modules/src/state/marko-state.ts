import type { ModuleManifest } from '@boilerbear/core';

export const markoState: ModuleManifest = {
  id: 'marko-state',
  name: 'Marko State',
  category: 'state',
  tags: ['state', 'marko'],
  description: 'Reactive component state primitives for Marko 5 apps.',
  homepage: 'https://markojs.com',
  license: 'MIT',
  popularity: 20_000,
  versions: { range: '^5.35.0', min: '5.35.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'marko', version: '^5.35.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['marko'],
  setup: [],
  maintainers: ['marko-js'],
  docs: { quickstart: 'https://markojs.com' },
};
