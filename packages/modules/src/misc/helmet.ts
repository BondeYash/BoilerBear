import type { ModuleManifest } from '@boilerbear/core';

export const helmet: ModuleManifest = {
  id: 'helmet',
  name: 'Helmet',
  category: 'misc',
  tags: ['security', 'headers', 'http', 'middleware'],
  description: 'Secure Express/Node servers by setting various HTTP response headers.',
  homepage: 'https://helmetjs.github.io',
  license: 'MIT',
  popularity: 4_000_000,
  versions: { range: '^8.0.0', min: '8.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'helmet', version: '^8.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['solid-start', 'remix'],
  setup: [],
  maintainers: ['helmetjs'],
  docs: { quickstart: 'https://helmetjs.github.io' },
};
