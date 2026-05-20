import type { ModuleManifest } from '@boilerbear/core';

export const biome: ModuleManifest = {
  id: 'biome',
  name: 'Biome',
  category: 'lint',
  tags: ['lint', 'format', 'fast'],
  description: 'Fast all-in-one lint + format tool (Rust-powered ESLint + Prettier replacement).',
  homepage: 'https://biomejs.dev',
  license: 'MIT',
  popularity: 2_900_000,
  versions: { range: '^1.9.0', min: '1.9.0' },
  packages: {
    deps: [],
    devDeps: [{ name: '@biomejs/biome', version: '^1.9.0' }],
  },
  requires: [],
  conflicts: [
    {
      id: 'eslint-prettier',
      severity: 'warning',
      reason: 'Biome replaces ESLint + Prettier. Use one or the other.',
    },
  ],
  recommends: [],
  appliesTo: ['vite', 'next'],
  setup: [
    {
      kind: 'appendScript',
      name: 'lint',
      script: 'biome check .',
    },
    {
      kind: 'appendScript',
      name: 'format',
      script: 'biome format --write .',
    },
    {
      kind: 'shell',
      command: '{pm} exec biome init',
      when: 'postInstall',
    },
  ],
  maintainers: ['biomejs'],
  docs: { quickstart: 'https://biomejs.dev/guides/getting-started/' },
};
