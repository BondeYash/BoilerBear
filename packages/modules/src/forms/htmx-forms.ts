import type { ModuleManifest } from '@boilerbear/core';

export const htmxForms: ModuleManifest = {
  id: 'htmx-forms',
  name: 'HTMX Forms',
  category: 'validation',
  tags: ['forms', 'validation', 'htmx'],
  description: 'Inline form validation patterns using HTMX requests.',
  homepage: 'https://htmx.org/examples/inline-validation/',
  license: 'BSD-2-Clause',
  popularity: 100_000,
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
  docs: { quickstart: 'https://htmx.org/examples/inline-validation/' },
};
