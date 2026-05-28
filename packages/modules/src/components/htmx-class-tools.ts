import type { ModuleManifest } from '@boilerbear/core';

export const htmxClassTools: ModuleManifest = {
  id: 'htmx-class-tools',
  name: 'HTMX Class Tools',
  category: 'animation',
  tags: ['animation', 'classes', 'htmx'],
  description: 'HTMX extension to add, remove, and toggle classes for animations.',
  homepage: 'https://htmx.org/extensions/class-tools/',
  license: 'BSD-2-Clause',
  popularity: 30_000,
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
  docs: { quickstart: 'https://htmx.org/extensions/class-tools/' },
};
