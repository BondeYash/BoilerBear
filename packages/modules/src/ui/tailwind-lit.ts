import type { ModuleManifest } from '@boilerbear/core';

export const tailwindLit: ModuleManifest = {
  id: 'tailwind-lit',
  name: 'Tailwind CSS for Lit',
  category: 'styling',
  tags: ['css', 'utility', 'tailwind', 'lit'],
  description: 'Utility-first CSS framework integrated with Lit web components.',
  homepage: 'https://tailwindcss.com',
  license: 'MIT',
  popularity: 500_000,
  versions: { range: '^3.4.0', min: '3.4.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'lit', version: '^3.2.0' }],
    devDeps: [{ name: 'tailwindcss', version: '^3.4.0' }],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['lit'],
  setup: [],
  maintainers: ['tailwindlabs'],
  docs: { quickstart: 'https://tailwindcss.com' },
};
