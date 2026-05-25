import type { ModuleManifest } from '@boilerbear/core';

export const needle: ModuleManifest = {
  id: 'needle',
  name: 'needle',
  category: 'http',
  tags: ['http', 'multipart', 'streaming'],
  description: 'The leanest and most handsome HTTP client in the Node.js woods.',
  homepage: 'https://github.com/tomas/needle',
  license: 'MIT',
  popularity: 5_000_000,
  versions: { range: '^3.3.1', min: '3.3.1' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'needle', version: '^3.3.1' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['tomas'],
  docs: { quickstart: 'https://github.com/tomas/needle#usage' },
};
