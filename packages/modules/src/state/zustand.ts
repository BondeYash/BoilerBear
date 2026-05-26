import type { ModuleManifest } from '@boilerbear/core';

export const zustand: ModuleManifest = {
  id: 'zustand',
  name: 'Zustand',
  category: 'state',
  tags: ['state', 'minimal'],
  description: 'Tiny, hook-based state management for React.',
  homepage: 'https://zustand-demo.pmnd.rs',
  license: 'MIT',
  popularity: 5_800_000,
  versions: { range: '^5.0.0', min: '5.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'zustand', version: '^5.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [
    { id: 'redux-toolkit', severity: 'warning', reason: 'Both manage global state; pick one.' },
    { id: 'jotai', severity: 'warning', reason: 'Both manage global state; pick one.' },
  ],
  recommends: [],
  appliesTo: ['vite', 'next', 'react'],
  setup: [],
  maintainers: ['pmndrs'],
  docs: { quickstart: 'https://docs.pmnd.rs/zustand/getting-started/introduction' },
};
