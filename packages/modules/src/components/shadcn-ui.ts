import type { ModuleManifest } from '@boilerbear/core';

export const shadcnUi: ModuleManifest = {
  id: 'shadcn-ui',
  name: 'shadcn/ui',
  category: 'components',
  tags: ['ui', 'react', 'radix', 'tailwind'],
  description: 'Copy-paste UI components built on Tailwind and Radix primitives.',
  homepage: 'https://ui.shadcn.com',
  license: 'MIT',
  popularity: 2_400_000,
  versions: { range: '^0.9.0', min: '0.9.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'class-variance-authority', version: '^0.7.0' },
      { name: 'clsx', version: '^2.1.0' },
      { name: 'tailwind-merge', version: '^2.5.0' },
      { name: 'lucide-react', version: '^0.460.0' },
    ],
    devDeps: [],
  },
  requires: [{ id: 'tailwindcss' }],
  conflicts: [
    { id: 'mui', severity: 'warning', reason: 'shadcn/ui and Material UI overlap; pick one.' },
    {
      id: 'chakra-ui',
      severity: 'warning',
      reason: 'shadcn/ui and Chakra overlap; pick one.',
    },
  ],
  recommends: [],
  appliesTo: ['vite', 'next'],
  setup: [
    {
      kind: 'shell',
      command: '{pm} dlx shadcn@latest init -y --defaults',
      when: 'postInstall',
    },
  ],
  maintainers: ['shadcn'],
  docs: { quickstart: 'https://ui.shadcn.com/docs/installation' },
};
