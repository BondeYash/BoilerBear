import type { ModuleManifest } from '@boilerbear/core';

export const qwik: ModuleManifest = {
  id: 'qwik',
  name: 'Qwik',
  category: 'framework',
  tags: ['qwik', 'resumability', 'ssr'],
  description: 'Resumable web framework with O(1) hydration.',
  homepage: 'https://qwik.dev',
  license: 'MIT',
  popularity: 400_000,
  versions: { range: '^1.9.0', min: '1.9.0' },
  languages: ['js'],
  packages: { deps: [], devDeps: [] },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  framework: {
    template: 'qwik-basic',
    createCommand: '{pm} create qwik@latest {name}',
  },
  setup: [],
  maintainers: ['BuilderIO'],
  docs: { quickstart: 'https://qwik.dev/docs/getting-started/' },
};
