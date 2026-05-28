import type { ModuleManifest } from '@boilerbear/core';

export const htmxAjax: ModuleManifest = {
  id: 'htmx-ajax',
  name: 'HTMX AJAX',
  category: 'http',
  tags: ['http', 'ajax', 'htmx'],
  description: 'HTMX-driven AJAX requests directly from HTML attributes.',
  homepage: 'https://htmx.org/api/#ajax',
  license: 'BSD-2-Clause',
  popularity: 300_000,
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
  docs: { quickstart: 'https://htmx.org/api/#ajax' },
};
