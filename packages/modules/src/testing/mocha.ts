import type { ModuleManifest } from '@boilerbear/core';

export const mocha: ModuleManifest = {
  id: 'mocha',
  name: 'Mocha',
  category: 'testing',
  tags: ['testing', 'mocha', 'chai'],
  description: 'Feature-rich JavaScript test framework, paired with Chai assertions.',
  homepage: 'https://mochajs.org',
  license: 'MIT',
  popularity: 8_000_000,
  versions: { range: '^10.8.0', min: '10.8.0' },
  languages: ['js'],
  packages: {
    deps: [],
    devDeps: [
      { name: 'mocha', version: '^10.8.0' },
      { name: 'chai', version: '^5.1.0' },
    ],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['mithril'],
  setup: [],
  maintainers: ['mochajs'],
  docs: { quickstart: 'https://mochajs.org' },
};
