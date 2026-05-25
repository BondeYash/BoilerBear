import type { ModuleManifest } from '@boilerbear/core';

export const apisauce: ModuleManifest = {
  id: 'apisauce',
  name: 'apisauce',
  category: 'http',
  tags: ['axios', 'wrapper', 'rest'],
  description: 'Axios + standardized errors + request/response transforms.',
  homepage: 'https://github.com/infinitered/apisauce',
  license: 'MIT',
  popularity: 280_000,
  versions: { range: '^3.1.0', min: '3.1.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'apisauce', version: '^3.1.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [{ id: 'axios', reason: 'apisauce wraps axios.' }],
  appliesTo: [],
  setup: [],
  maintainers: ['infinitered'],
  docs: { quickstart: 'https://github.com/infinitered/apisauce#quick-start' },
};
