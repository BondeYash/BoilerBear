import type { ModuleManifest } from '@boilerbear/core';

export const litSignals: ModuleManifest = {
  id: 'lit-signals',
  name: 'Lit Signals',
  category: 'state',
  tags: ['state', 'signals', 'lit', 'reactivity'],
  description: 'Reactive signals primitives for Lit components.',
  homepage: 'https://github.com/lit/lit/tree/main/packages/labs/signals',
  license: 'BSD-3-Clause',
  popularity: 20_000,
  versions: { range: '^0.1.0', min: '0.1.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@lit-labs/signals', version: '^0.1.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['lit'],
  setup: [],
  maintainers: ['lit'],
  docs: { quickstart: 'https://github.com/lit/lit/tree/main/packages/labs/signals' },
};
