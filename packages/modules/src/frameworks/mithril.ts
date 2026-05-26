import type { ModuleManifest } from '@boilerbear/core';

export const mithril: ModuleManifest = {
  id: 'mithril',
  name: 'Mithril.js',
  category: 'framework',
  tags: ['mithril', 'spa', 'small'],
  description: 'Modern client-side JavaScript framework with built-in router and XHR.',
  homepage: 'https://mithril.js.org',
  license: 'MIT',
  popularity: 100_000,
  versions: { range: '^2.2.0', min: '2.2.0' },
  languages: ['js'],
  packages: { deps: [], devDeps: [] },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  framework: {
    template: 'mithril-basic',
    createCommand: '{pm} install mithril',
  },
  setup: [],
  maintainers: ['MithrilJS'],
  docs: { quickstart: 'https://mithril.js.org/installation.html' },
};
