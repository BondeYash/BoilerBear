import type { ModuleManifest } from '@boilerbear/core';

export const mui: ModuleManifest = {
  id: 'mui',
  name: 'Material UI',
  category: 'components',
  tags: ['ui', 'react', 'material'],
  description: 'React components implementing Material Design.',
  homepage: 'https://mui.com',
  license: 'MIT',
  popularity: 4_300_000,
  versions: { range: '^6.1.0', min: '6.1.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: '@mui/material', version: '^6.1.0' },
      { name: '@emotion/react', version: '^11.13.0' },
      { name: '@emotion/styled', version: '^11.13.0' },
      { name: '@mui/icons-material', version: '^6.1.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [
    { id: 'shadcn-ui', severity: 'warning' },
    { id: 'chakra-ui', severity: 'warning' },
  ],
  recommends: [],
  appliesTo: ['vite', 'next'],
  setup: [],
  maintainers: ['mui-org'],
  docs: { quickstart: 'https://mui.com/material-ui/getting-started/' },
};
