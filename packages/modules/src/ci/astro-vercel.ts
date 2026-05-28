import type { ModuleManifest } from '@boilerbear/core';

export const astroVercel: ModuleManifest = {
  id: 'astro-vercel',
  name: 'Astro Vercel Adapter',
  category: 'ci',
  tags: ['deploy', 'vercel', 'astro', 'ssr'],
  description: 'Adapter for deploying Astro apps to Vercel with SSR or static output.',
  homepage: 'https://docs.astro.build/en/guides/deploy/vercel/',
  license: 'MIT',
  popularity: 250_000,
  versions: { range: '^8.0.0', min: '8.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@astrojs/vercel', version: '^8.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['astro'],
  setup: [],
  maintainers: ['withastro'],
  docs: { quickstart: 'https://docs.astro.build/en/guides/deploy/vercel/' },
};
