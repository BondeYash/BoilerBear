import type { ModuleManifest } from '@boilerbear/core';

export const mithrilMeta: ModuleManifest = {
  id: 'mithril-meta',
  name: 'Mithril Meta',
  category: 'misc',
  tags: ['seo', 'meta', 'head', 'mithril'],
  description: 'Document head and meta tag management for Mithril.js apps.',
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
