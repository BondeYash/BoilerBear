import type { ModuleManifest } from '@boilerbear/core';

export const axios: ModuleManifest = {
  id: 'axios',
  name: 'Axios',
  category: 'http',
  tags: ['http', 'promise', 'interceptors'],
  description: 'Promise-based HTTP client for the browser and Node.js.',
  homepage: 'https://axios-http.com',
  license: 'MIT',
  popularity: 60_000_000,
  versions: { range: '^1.7.7', min: '1.7.7' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'axios', version: '^1.7.7' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [
    { id: 'got', severity: 'warning', reason: 'Pick one HTTP client.' },
    { id: 'ky', severity: 'warning', reason: 'Pick one HTTP client.' },
  ],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['axios'],
  docs: { quickstart: 'https://axios-http.com/docs/intro' },
};
