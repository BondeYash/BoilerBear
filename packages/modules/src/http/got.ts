import type { ModuleManifest } from '@boilerbear/core';

export const got: ModuleManifest = {
  id: 'got',
  name: 'Got',
  category: 'http',
  tags: ['http', 'retry', 'streams'],
  description: 'Human-friendly and powerful HTTP request library for Node.js.',
  homepage: 'https://github.com/sindresorhus/got',
  license: 'MIT',
  popularity: 25_000_000,
  versions: { range: '^14.4.0', min: '14.4.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'got', version: '^14.4.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [{ id: 'axios', severity: 'warning', reason: 'Pick one HTTP client.' }],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['sindresorhus'],
  docs: {
    quickstart: 'https://github.com/sindresorhus/got/blob/main/documentation/quick-start.md',
  },
};
