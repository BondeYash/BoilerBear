import type { ModuleManifest } from '@boilerbear/core';

export const solid: ModuleManifest = {
  id: 'solid',
  name: 'SolidJS',
  category: 'framework',
  tags: ['solid', 'spa', 'signals', 'vite'],
  description: 'Fine-grained reactive UI library via Vite + TypeScript.',
  homepage: 'https://www.solidjs.com',
  license: 'MIT',
  popularity: 900_000,
  versions: { range: '^1.9.0', min: '1.9.0' },
  languages: ['js'],
  packages: { deps: [], devDeps: [] },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  framework: {
    template: 'solid-ts',
    createCommand: '{pm} create vite@latest {name} -- --template solid-ts',
  },
  setup: [],
  maintainers: ['solidjs'],
  docs: { quickstart: 'https://docs.solidjs.com/quick-start' },
};
