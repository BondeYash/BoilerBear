import type { ModuleManifest } from '@boilerbear/core';

export const solidStore: ModuleManifest = {
  id: 'solid-store',
  name: 'Solid Store',
  category: 'state',
  tags: ['state', 'solid', 'store', 'reactive'],
  description: 'Fine-grained reactive stores built into Solid for nested state.',
  homepage: 'https://docs.solidjs.com/concepts/stores',
  license: 'MIT',
  popularity: 300_000,
  versions: { range: '^1.9.0', min: '1.9.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'solid-js', version: '^1.9.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['solid', 'solid-start'],
  setup: [],
  maintainers: ['solidjs'],
  docs: { quickstart: 'https://docs.solidjs.com/concepts/stores' },
};
