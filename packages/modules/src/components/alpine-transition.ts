import type { ModuleManifest } from '@boilerbear/core';

export const alpineTransition: ModuleManifest = {
  id: 'alpine-transition',
  name: 'Alpine Transition',
  category: 'animation',
  tags: ['animation', 'transition', 'alpine'],
  description: 'Built-in transition directives for Alpine.js components.',
  homepage: 'https://alpinejs.dev/directives/transition',
  license: 'MIT',
  popularity: 100_000,
  versions: { range: '^3.14.0', min: '3.14.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'alpinejs', version: '^3.14.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['alpine'],
  setup: [],
  maintainers: ['alpinejs'],
  docs: { quickstart: 'https://alpinejs.dev/directives/transition' },
};
