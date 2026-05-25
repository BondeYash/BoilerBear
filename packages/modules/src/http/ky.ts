import type { ModuleManifest } from '@boilerbear/core';

export const ky: ModuleManifest = {
  id: 'ky',
  name: 'Ky',
  category: 'http',
  tags: ['fetch', 'http', 'retry'],
  description: 'Tiny and elegant HTTP client based on the Fetch API.',
  homepage: 'https://github.com/sindresorhus/ky',
  license: 'MIT',
  popularity: 5_500_000,
  versions: { range: '^1.7.0', min: '1.7.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'ky', version: '^1.7.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [{ id: 'axios', severity: 'warning', reason: 'Pick one HTTP client.' }],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['sindresorhus'],
  docs: { quickstart: 'https://github.com/sindresorhus/ky#usage' },
};
