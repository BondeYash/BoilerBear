import type { ModuleManifest } from '@boilerbear/core';

export const reduxToolkit: ModuleManifest = {
  id: 'redux-toolkit',
  name: 'Redux Toolkit',
  category: 'state',
  tags: ['state', 'redux'],
  description: 'Official, opinionated Redux setup with slices and RTK Query.',
  homepage: 'https://redux-toolkit.js.org',
  license: 'MIT',
  popularity: 5_200_000,
  versions: { range: '^2.3.0', min: '2.3.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: '@reduxjs/toolkit', version: '^2.3.0' },
      { name: 'react-redux', version: '^9.1.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [
    { id: 'zustand', severity: 'warning' },
    { id: 'jotai', severity: 'warning' },
  ],
  recommends: [],
  appliesTo: ['vite', 'next'],
  setup: [],
  maintainers: ['reduxjs'],
  docs: { quickstart: 'https://redux-toolkit.js.org/introduction/getting-started' },
};
