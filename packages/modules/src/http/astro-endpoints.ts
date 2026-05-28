import type { ModuleManifest } from '@boilerbear/core';

export const astroEndpoints: ModuleManifest = {
  id: 'astro-endpoints',
  name: 'Astro API Endpoints',
  category: 'http',
  tags: ['api', 'http', 'astro', 'ssr'],
  description: 'File-based API routes for Astro, returning JSON or any Response.',
  homepage: 'https://docs.astro.build/en/guides/endpoints/',
  license: 'MIT',
  popularity: 200_000,
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
  docs: { quickstart: 'https://docs.astro.build/en/guides/endpoints/' },
};
