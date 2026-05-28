import type { ModuleManifest } from '@boilerbear/core';

export const hyperscript: ModuleManifest = {
  id: 'hyperscript',
  name: 'Hyperscript',
  category: 'state',
  tags: ['state', 'scripting', 'htmx', 'hyperscript'],
  description: 'A scripting language for the web designed to work with HTMX.',
  homepage: 'https://hyperscript.org',
  license: 'BSD-2-Clause',
  popularity: 50_000,
  versions: { range: '^0.9.13', min: '0.9.13' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'hyperscript.org', version: '^0.9.13' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['htmx'],
  setup: [],
  maintainers: ['bigskysoftware'],
  docs: { quickstart: 'https://hyperscript.org' },
};
