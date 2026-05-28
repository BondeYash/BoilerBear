import type { ModuleManifest } from '@boilerbear/core';

export const mithrilForms: ModuleManifest = {
  id: 'mithril-forms',
  name: 'Mithril Forms',
  category: 'validation',
  tags: ['forms', 'validation', 'mithril'],
  description: 'Form handling and validation utilities for Mithril.js.',
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
