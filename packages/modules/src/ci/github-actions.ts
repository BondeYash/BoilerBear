import type { ModuleManifest } from '@boilerbear/core';

export const githubActions: ModuleManifest = {
  id: 'github-actions',
  name: 'GitHub Actions',
  category: 'ci',
  tags: ['ci', 'github'],
  description: 'CI workflow that installs dependencies, runs typecheck, lint, test, and build.',
  homepage: 'https://github.com/features/actions',
  license: 'MIT',
  versions: { range: '*', min: '*' },
  packages: { deps: [], devDeps: [] },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['vite', 'next'],
  setup: [
    {
      kind: 'writeFile',
      path: '.github/workflows/ci.yml',
      content: `name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: 'pnpm'

      - run: pnpm install --frozen-lockfile
      - run: pnpm run lint --if-present
      - run: pnpm run typecheck --if-present
      - run: pnpm test --if-present
      - run: pnpm run build --if-present
`,
      ifMissing: true,
    },
  ],
  maintainers: ['github'],
  docs: { quickstart: 'https://docs.github.com/en/actions/quickstart' },
};
