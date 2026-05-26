import type { ModuleManifest } from '@boilerbear/core';

export const marko: ModuleManifest = {
  id: 'marko',
  name: 'Marko',
  category: 'framework',
  tags: ['marko', 'ssr', 'streaming'],
  description: 'eBay-built UI framework with streaming SSR and progressive enhancement.',
  homepage: 'https://markojs.com',
  license: 'MIT',
  popularity: 150_000,
  versions: { range: '^6.0.0', min: '6.0.0' },
  languages: ['js'],
  packages: { deps: [], devDeps: [] },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  framework: {
    template: 'marko-basic',
    createCommand: '{pm} create marko {name}',
  },
  setup: [],
  maintainers: ['marko-js'],
  docs: { quickstart: 'https://markojs.com/docs/getting-started/' },
};
