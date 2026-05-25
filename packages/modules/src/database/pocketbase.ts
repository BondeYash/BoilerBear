import type { ModuleManifest } from '@boilerbear/core';

export const pocketbase: ModuleManifest = {
  id: 'pocketbase',
  name: 'PocketBase JS SDK',
  category: 'database',
  tags: ['pocketbase', 'baas', 'sqlite'],
  description: 'Client SDK for PocketBase, a single-file open-source backend.',
  homepage: 'https://pocketbase.io',
  license: 'MIT',
  popularity: 220_000,
  versions: { range: '^0.22.0', min: '0.22.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'pocketbase', version: '^0.22.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['pocketbase'],
  docs: { quickstart: 'https://pocketbase.io/docs/' },
};
