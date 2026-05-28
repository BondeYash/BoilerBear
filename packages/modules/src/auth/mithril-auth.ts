import type { ModuleManifest } from '@boilerbear/core';

export const mithrilAuth: ModuleManifest = {
  id: 'mithril-auth',
  name: 'Mithril Auth',
  category: 'auth',
  tags: ['auth', 'session', 'mithril'],
  description: 'Client-side auth helpers for Mithril.js applications.',
  homepage: 'https://mithril.js.org',
  license: 'MIT',
  popularity: 15_000,
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
