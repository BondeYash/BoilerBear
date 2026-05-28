import type { ModuleManifest } from '@boilerbear/core';

export const mithrilRequest: ModuleManifest = {
  id: 'mithril-request',
  name: 'Mithril Request',
  category: 'http',
  tags: ['http', 'fetch', 'mithril'],
  description: 'XHR/fetch wrapper for Mithril.js with auto-redraw integration.',
  homepage: 'https://mithril.js.org/request.html',
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
  docs: { quickstart: 'https://mithril.js.org/request.html' },
};
