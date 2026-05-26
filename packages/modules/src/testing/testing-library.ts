import type { ModuleManifest } from '@boilerbear/core';

export const testingLibrary: ModuleManifest = {
  id: 'testing-library',
  name: 'React Testing Library',
  category: 'testing',
  tags: ['test', 'react', 'unit'],
  description: 'Light utilities for testing React components from a user perspective.',
  homepage: 'https://testing-library.com/docs/react-testing-library/intro/',
  license: 'MIT',
  popularity: 13_000_000,
  versions: { range: '^16.0.0', min: '16.0.0' },
  languages: ['js'],
  packages: {
    deps: [],
    devDeps: [
      { name: '@testing-library/react', version: '^16.0.0' },
      { name: '@testing-library/jest-dom', version: '^6.6.0' },
      { name: '@testing-library/user-event', version: '^14.5.0' },
    ],
  },
  requires: [{ id: 'vitest', severity: 'warning', reason: 'Pair with a test runner.' }],
  conflicts: [],
  recommends: [],
  appliesTo: ['vite', 'next', 'react'],
  setup: [],
  maintainers: ['testing-library'],
  docs: { quickstart: 'https://testing-library.com/docs/react-testing-library/intro/' },
};
