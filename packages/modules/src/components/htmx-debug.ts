import type { ModuleManifest } from '@boilerbear/core';

export const htmxDebug: ModuleManifest = {
  id: 'htmx-debug',
  name: 'HTMX Debug',
  category: 'components',
  tags: ['debug', 'devtools', 'htmx'],
  description: 'HTMX extension that logs request and response events for debugging.',
  homepage: 'https://htmx.org/extensions/debug/',
  license: 'BSD-2-Clause',
  popularity: 20_000,
  versions: { range: '^2.0.0', min: '2.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'htmx-ext-debug', version: '^2.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['htmx'],
  setup: [],
  maintainers: ['bigskysoftware'],
  docs: { quickstart: 'https://htmx.org/extensions/debug/' },
};
