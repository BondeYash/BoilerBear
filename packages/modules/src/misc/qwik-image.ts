import type { ModuleManifest } from '@boilerbear/core';

export const qwikImage: ModuleManifest = {
  id: 'qwik-image',
  name: 'Qwik Image',
  category: 'misc',
  tags: ['image', 'optimization', 'qwik'],
  description: 'Optimized, responsive image component for Qwik.',
  homepage: 'https://github.com/qwikifiers/qwik-image',
  license: 'MIT',
  popularity: 20_000,
  versions: { range: '^0.0.10', min: '0.0.10' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'qwik-image', version: '^0.0.10' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['qwik'],
  setup: [],
  maintainers: ['qwikifiers'],
  docs: { quickstart: 'https://github.com/qwikifiers/qwik-image' },
};
