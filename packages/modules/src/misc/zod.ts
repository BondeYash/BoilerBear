import type { ModuleManifest } from '@boilerbear/core';

export const zod: ModuleManifest = {
  id: 'zod',
  name: 'Zod',
  category: 'misc',
  tags: ['validation', 'schema', 'typescript'],
  description: 'TypeScript-first schema validation with static type inference.',
  homepage: 'https://zod.dev',
  license: 'MIT',
  popularity: 28_000_000,
  versions: { range: '^3.23.0', min: '3.23.0' },
  packages: {
    deps: [{ name: 'zod', version: '^3.23.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [{ id: 'react-hook-form', reason: 'Pair Zod with RHF via @hookform/resolvers.' }],
  appliesTo: ['vite', 'next'],
  setup: [],
  maintainers: ['colinhacks'],
  docs: { quickstart: 'https://zod.dev' },
};
