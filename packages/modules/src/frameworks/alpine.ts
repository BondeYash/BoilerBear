import type { ModuleManifest } from '@boilerbear/core';

export const alpine: ModuleManifest = {
  id: 'alpine',
  name: 'Alpine.js',
  category: 'framework',
  tags: ['alpine', 'sprinkles', 'drop-in'],
  description: 'Minimal declarative JS for sprinkled interactivity on server-rendered HTML.',
  homepage: 'https://alpinejs.dev',
  license: 'MIT',
  popularity: 600_000,
  versions: { range: '^3.14.0', min: '3.14.0' },
  languages: ['js'],
  packages: { deps: [], devDeps: [] },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  framework: {
    template: 'alpine-dropin',
    createCommand: '{pm} install alpinejs',
  },
  setup: [],
  maintainers: ['alpinejs'],
  docs: { quickstart: 'https://alpinejs.dev/start-here' },
};
