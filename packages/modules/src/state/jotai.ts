import type { ModuleManifest } from '@boilerbear/core';

export const jotai: ModuleManifest = {
  id: 'jotai',
  name: 'Jotai',
  category: 'state',
  tags: ['state', 'atomic'],
  description: 'Primitive and flexible state management for React via atoms.',
  homepage: 'https://jotai.org',
  license: 'MIT',
  popularity: 1_500_000,
  versions: { range: '^2.10.0', min: '2.10.0' },
  packages: {
    deps: [{ name: 'jotai', version: '^2.10.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [
    { id: 'zustand', severity: 'warning' },
    { id: 'redux-toolkit', severity: 'warning' },
  ],
  recommends: [],
  appliesTo: ['vite', 'next'],
  setup: [],
  maintainers: ['pmndrs'],
  docs: { quickstart: 'https://jotai.org/docs/introduction' },
};
