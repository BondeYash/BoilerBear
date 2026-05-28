import type { ModuleManifest } from '@boilerbear/core';

export const preactSignals: ModuleManifest = {
  id: 'preact-signals',
  name: 'Preact Signals',
  category: 'state',
  tags: ['state', 'signals', 'preact', 'reactivity'],
  description: 'Fine-grained reactive state primitives for Preact apps.',
  homepage: 'https://preactjs.com/guide/v10/signals/',
  license: 'MIT',
  popularity: 200_000,
  versions: { range: '^1.3.0', min: '1.3.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@preact/signals', version: '^1.3.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['preact'],
  setup: [],
  maintainers: ['preactjs'],
  docs: { quickstart: 'https://preactjs.com/guide/v10/signals/' },
};
