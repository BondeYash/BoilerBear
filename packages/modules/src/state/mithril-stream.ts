import type { ModuleManifest } from '@boilerbear/core';

export const mithrilStream: ModuleManifest = {
  id: 'mithril-stream',
  name: 'Mithril Stream',
  category: 'state',
  tags: ['state', 'streams', 'mithril'],
  description: 'Reactive streams for state management in Mithril.js apps.',
  homepage: 'https://mithril.js.org/stream.html',
  license: 'MIT',
  popularity: 30_000,
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
  docs: { quickstart: 'https://mithril.js.org/stream.html' },
};
