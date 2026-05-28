import type { ModuleManifest } from '@boilerbear/core';

export const litFetch: ModuleManifest = {
  id: 'lit-fetch',
  name: 'Lit Fetch (Task)',
  category: 'http',
  tags: ['http', 'fetch', 'lit', 'task'],
  description: 'Async data fetching for Lit components via the Task controller.',
  homepage: 'https://lit.dev/docs/data/task/',
  license: 'BSD-3-Clause',
  popularity: 50_000,
  versions: { range: '^3.2.0', min: '3.2.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'lit', version: '^3.2.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['lit'],
  setup: [],
  maintainers: ['lit'],
  docs: { quickstart: 'https://lit.dev/docs/data/task/' },
};
