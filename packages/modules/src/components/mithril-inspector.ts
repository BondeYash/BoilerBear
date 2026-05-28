import type { ModuleManifest } from '@boilerbear/core';

export const mithrilInspector: ModuleManifest = {
  id: 'mithril-inspector',
  name: 'Mithril Inspector',
  category: 'components',
  tags: ['devtools', 'debug', 'mithril'],
  description: 'Browser devtools-style inspector for Mithril.js components.',
  homepage: 'https://mithril.js.org',
  license: 'MIT',
  popularity: 8_000,
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
