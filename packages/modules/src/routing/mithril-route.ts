import type { ModuleManifest } from '@boilerbear/core';

export const mithrilRoute: ModuleManifest = {
  id: 'mithril-route',
  name: 'Mithril Route',
  category: 'routing',
  tags: ['router', 'mithril', 'spa'],
  description: 'Built-in router for Mithril.js single-page applications.',
  homepage: 'https://mithril.js.org/route.html',
  license: 'MIT',
  popularity: 40_000,
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
  docs: { quickstart: 'https://mithril.js.org/route.html' },
};
