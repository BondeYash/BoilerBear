import type { ModuleManifest } from '@boilerbear/core';

export const mithrilAnimate: ModuleManifest = {
  id: 'mithril-animate',
  name: 'Mithril Animate',
  category: 'animation',
  tags: ['animation', 'transitions', 'mithril'],
  description: 'Animation helpers and lifecycle hooks for Mithril.js components.',
  homepage: 'https://mithril.js.org',
  license: 'MIT',
  popularity: 10_000,
  versions: { range: '^2.2.0', min: '2.2.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'mithril', version: '^2.2.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['mithril'],
  setup: [],
  maintainers: ['MithrilJS'],
  docs: { quickstart: 'https://mithril.js.org' },
};
