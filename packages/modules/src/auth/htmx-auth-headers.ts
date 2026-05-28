import type { ModuleManifest } from '@boilerbear/core';

export const htmxAuthHeaders: ModuleManifest = {
  id: 'htmx-auth-headers',
  name: 'HTMX Auth Headers',
  category: 'auth',
  tags: ['auth', 'htmx', 'headers'],
  description: 'Send auth tokens and headers with HTMX requests via hx-headers.',
  homepage: 'https://htmx.org/docs/#requests',
  license: 'BSD-2-Clause',
  popularity: 50_000,
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
  docs: { quickstart: 'https://htmx.org/docs/#requests' },
};
