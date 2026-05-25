import type { ModuleManifest } from '@boilerbear/core';

export const eslintPrettier: ModuleManifest = {
  id: 'eslint-prettier',
  name: 'ESLint + Prettier',
  category: 'lint',
  tags: ['lint', 'format', 'classic'],
  description: 'Classic JavaScript linting (ESLint) and formatting (Prettier) combo.',
  homepage: 'https://eslint.org',
  license: 'MIT',
  popularity: 35_000_000,
  versions: { range: '^9.14.0', min: '9.14.0' },
  languages: ['js'],
  packages: {
    deps: [],
    devDeps: [
      { name: 'eslint', version: '^9.14.0' },
      { name: 'prettier', version: '^3.3.0' },
      { name: 'eslint-config-prettier', version: '^9.1.0' },
      { name: '@eslint/js', version: '^9.14.0' },
      { name: 'typescript-eslint', version: '^8.13.0' },
    ],
  },
  requires: [],
  conflicts: [{ id: 'biome', severity: 'warning' }],
  recommends: [{ id: 'husky-lint-staged' }],
  appliesTo: ['vite', 'next'],
  setup: [
    {
      kind: 'appendScript',
      name: 'lint',
      script: 'eslint .',
    },
    {
      kind: 'appendScript',
      name: 'format',
      script: 'prettier --write .',
    },
  ],
  maintainers: ['eslint', 'prettier'],
  docs: { quickstart: 'https://eslint.org/docs/latest/use/getting-started' },
};
