import type { ModuleManifest } from '@boilerbear/core';

export const qwikResource: ModuleManifest = {
  id: 'qwik-resource',
  name: 'Qwik useResource',
  category: 'data',
  tags: ['data', 'async', 'qwik', 'streaming'],
  description: 'Built-in async resource primitive for streaming server data in Qwik.',
  homepage: 'https://qwik.dev/docs/components/resource/',
  license: 'MIT',
  popularity: 150_000,
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
  docs: { quickstart: 'https://qwik.dev/docs/components/resource/' },
};
