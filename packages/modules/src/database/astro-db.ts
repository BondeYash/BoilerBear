import type { ModuleManifest } from '@boilerbear/core';

export const astroDb: ModuleManifest = {
  id: 'astro-db',
  name: 'Astro DB',
  category: 'database',
  tags: ['database', 'sqlite', 'astro', 'libsql'],
  description: 'Fully managed SQL database designed for the Astro ecosystem.',
  homepage: 'https://docs.astro.build/en/guides/astro-db/',
  license: 'MIT',
  popularity: 70_000,
  versions: { range: '^0.14.0', min: '0.14.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@astrojs/db', version: '^0.14.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['astro'],
  setup: [],
  maintainers: ['withastro'],
  docs: { quickstart: 'https://docs.astro.build/en/guides/astro-db/' },
};
