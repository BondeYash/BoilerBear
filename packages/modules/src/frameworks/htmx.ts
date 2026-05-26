import type { ModuleManifest } from '@boilerbear/core';

export const htmx: ModuleManifest = {
  id: 'htmx',
  name: 'HTMX',
  category: 'framework',
  tags: ['htmx', 'hypermedia', 'drop-in'],
  description: 'Hypermedia attributes for AJAX, swaps, and server-driven UI updates.',
  homepage: 'https://htmx.org',
  license: 'BSD-2-Clause',
  popularity: 500_000,
  versions: { range: '^2.0.0', min: '2.0.0' },
  languages: ['js'],
  packages: { deps: [], devDeps: [] },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  framework: {
    template: 'htmx-dropin',
    createCommand: '{pm} install htmx.org',
  },
  setup: [],
  maintainers: ['bigskysoftware'],
  docs: { quickstart: 'https://htmx.org/docs/' },
};
