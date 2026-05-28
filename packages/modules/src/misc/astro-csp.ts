import type { ModuleManifest } from '@boilerbear/core';

export const astroCsp: ModuleManifest = {
  id: 'astro-csp',
  name: 'Astro Content Security Policy',
  category: 'misc',
  tags: ['security', 'csp', 'astro', 'headers'],
  description: 'Configure Content Security Policy headers and nonces in Astro.',
  homepage: 'https://docs.astro.build/en/reference/configuration-reference/',
  license: 'MIT',
  popularity: 30_000,
  versions: { range: '^5.0.0', min: '5.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'astro', version: '^5.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['astro'],
  setup: [],
  maintainers: ['withastro'],
  docs: { quickstart: 'https://docs.astro.build/en/reference/configuration-reference/' },
};
