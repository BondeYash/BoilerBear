import type { ModuleManifest } from '@boilerbear/core';

export const markoHead: ModuleManifest = {
  id: 'marko-head',
  name: 'Marko Head',
  category: 'misc',
  tags: ['seo', 'head', 'meta', 'marko'],
  description: 'Document head and meta tag management for Marko apps.',
  homepage: 'https://markojs.com',
  license: 'MIT',
  popularity: 10_000,
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
