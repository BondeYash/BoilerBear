import type { ModuleManifest } from '@boilerbear/core';

export const chakraUi: ModuleManifest = {
  id: 'chakra-ui',
  name: 'Chakra UI',
  category: 'components',
  tags: ['ui', 'react', 'accessible'],
  description: 'Modular, accessible React components.',
  homepage: 'https://chakra-ui.com',
  license: 'MIT',
  popularity: 1_400_000,
  versions: { range: '^3.0.0', min: '3.0.0' },
  packages: {
    deps: [
      { name: '@chakra-ui/react', version: '^3.0.0' },
      { name: '@emotion/react', version: '^11.13.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [
    { id: 'shadcn-ui', severity: 'warning' },
    { id: 'mui', severity: 'warning' },
  ],
  recommends: [],
  appliesTo: ['vite', 'next'],
  setup: [],
  maintainers: ['chakra-ui'],
  docs: { quickstart: 'https://chakra-ui.com/docs/get-started/installation' },
};
