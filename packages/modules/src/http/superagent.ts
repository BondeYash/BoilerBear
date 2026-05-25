import type { ModuleManifest } from '@boilerbear/core';

export const superagent: ModuleManifest = {
  id: 'superagent',
  name: 'SuperAgent',
  category: 'http',
  tags: ['http', 'browser', 'node'],
  description: 'Small progressive client-side HTTP request library and Node.js module.',
  homepage: 'https://ladjs.github.io/superagent',
  license: 'MIT',
  popularity: 8_000_000,
  versions: { range: '^10.1.0', min: '10.1.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'superagent', version: '^10.1.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['ladjs'],
  docs: { quickstart: 'https://ladjs.github.io/superagent/#getting-started' },
};
