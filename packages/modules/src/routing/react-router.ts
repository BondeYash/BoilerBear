import type { ModuleManifest } from '@boilerbear/core';

export const reactRouter: ModuleManifest = {
  id: 'react-router',
  name: 'React Router',
  category: 'routing',
  tags: ['router', 'react', 'spa'],
  description: 'Declarative client-side routing for React.',
  homepage: 'https://reactrouter.com',
  license: 'MIT',
  popularity: 14_000_000,
  versions: { range: '^6.28.0', min: '6.28.0' },
  packages: {
    deps: [{ name: 'react-router-dom', version: '^6.28.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['vite'],
  setup: [],
  maintainers: ['remix-run'],
  docs: { quickstart: 'https://reactrouter.com/start/library/installation' },
};
