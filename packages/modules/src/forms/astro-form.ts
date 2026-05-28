import type { ModuleManifest } from '@boilerbear/core';

export const astroForm: ModuleManifest = {
  id: 'astro-form',
  name: 'Astro Forms with Zod',
  category: 'validation',
  tags: ['forms', 'validation', 'astro', 'zod'],
  description: 'Server-side form handling and validation in Astro using Zod schemas.',
  homepage: 'https://docs.astro.build/en/guides/middleware/',
  license: 'MIT',
  popularity: 100_000,
  versions: { range: '^5.0.0', min: '5.0.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'astro', version: '^5.0.0' },
      { name: 'zod', version: '^3.23.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['astro'],
  setup: [],
  maintainers: ['withastro'],
  docs: { quickstart: 'https://docs.astro.build/en/guides/middleware/' },
};
