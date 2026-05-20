import type { ModuleManifest } from '@boilerbear/core';

export const reactHookForm: ModuleManifest = {
  id: 'react-hook-form',
  name: 'React Hook Form',
  category: 'misc',
  tags: ['forms', 'react'],
  description: 'Performant form library with minimal re-renders.',
  homepage: 'https://react-hook-form.com',
  license: 'MIT',
  popularity: 11_000_000,
  versions: { range: '^7.53.0', min: '7.53.0' },
  packages: {
    deps: [
      { name: 'react-hook-form', version: '^7.53.0' },
      { name: '@hookform/resolvers', version: '^3.9.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [{ id: 'zod', reason: 'Validate RHF forms with Zod schemas.' }],
  appliesTo: ['vite', 'next'],
  setup: [],
  maintainers: ['react-hook-form'],
  docs: { quickstart: 'https://react-hook-form.com/get-started' },
};
