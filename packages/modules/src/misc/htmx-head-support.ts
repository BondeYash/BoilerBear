import type { ModuleManifest } from '@boilerbear/core';

export const htmxHeadSupport: ModuleManifest = {
  id: 'htmx-head-support',
  name: 'HTMX Head Support',
  category: 'misc',
  tags: ['head', 'seo', 'htmx'],
  description: 'HTMX extension that merges document head fragments from responses.',
  homepage: 'https://htmx.org/extensions/head-support/',
  license: 'BSD-2-Clause',
  popularity: 25_000,
  versions: { range: '^2.0.2', min: '2.0.2' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'htmx-ext-head-support', version: '^2.0.2' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['htmx'],
  setup: [],
  maintainers: ['bigskysoftware'],
  docs: { quickstart: 'https://htmx.org/extensions/head-support/' },
};
