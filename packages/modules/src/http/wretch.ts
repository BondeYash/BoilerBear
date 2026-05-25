import type { ModuleManifest } from '@boilerbear/core';

export const wretch: ModuleManifest = {
  id: 'wretch',
  name: 'Wretch',
  category: 'http',
  tags: ['fetch', 'http', 'fluent'],
  description: 'A tiny fetch-based wrapper with a fluent, intuitive syntax.',
  homepage: 'https://github.com/elbywan/wretch',
  license: 'MIT',
  popularity: 600_000,
  versions: { range: '^2.10.0', min: '2.10.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'wretch', version: '^2.10.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['elbywan'],
  docs: { quickstart: 'https://github.com/elbywan/wretch#usage' },
};
