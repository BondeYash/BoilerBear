import type { ModuleManifest } from '@boilerbear/core';

export const qwikSignals: ModuleManifest = {
  id: 'qwik-signals',
  name: 'Qwik Signals & Stores',
  category: 'state',
  tags: ['state', 'qwik', 'signals', 'reactive'],
  description: 'Built-in fine-grained reactivity for Qwik via useSignal and useStore.',
  homepage: 'https://qwik.dev/docs/components/state/',
  license: 'MIT',
  popularity: 200_000,
  versions: { range: '^1.10.0', min: '1.10.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@builder.io/qwik', version: '^1.10.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['qwik'],
  setup: [],
  maintainers: ['builderio'],
  docs: { quickstart: 'https://qwik.dev/docs/components/state/' },
};
