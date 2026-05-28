import type { ModuleManifest } from '@boilerbear/core';

export const htmxBoost: ModuleManifest = {
  id: 'htmx-boost',
  name: 'HTMX hx-boost',
  category: 'routing',
  tags: ['routing', 'pjax', 'htmx'],
  description: 'Progressive enhancement for links/forms using hx-boost on HTMX.',
  homepage: 'https://htmx.org/attributes/hx-boost/',
  license: 'BSD-2-Clause',
  popularity: 80_000,
  versions: { range: '^2.0.0', min: '2.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'htmx.org', version: '^2.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['htmx'],
  setup: [],
  maintainers: ['bigskysoftware'],
  docs: { quickstart: 'https://htmx.org/attributes/hx-boost/' },
};
