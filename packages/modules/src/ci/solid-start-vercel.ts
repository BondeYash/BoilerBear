import type { ModuleManifest } from '@boilerbear/core';

export const solidStartVercel: ModuleManifest = {
  id: 'solid-start-vercel',
  name: 'SolidStart Vercel Preset',
  category: 'ci',
  tags: ['deploy', 'vercel', 'solid-start', 'vinxi'],
  description: 'Deploy SolidStart apps to Vercel using the Vinxi vercel preset.',
  homepage: 'https://docs.solidjs.com/solid-start/building-your-application/deployment/vercel',
  license: 'MIT',
  popularity: 60_000,
  versions: { range: '^0.4.3', min: '0.4.3' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'vinxi', version: '^0.4.3' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['solid-start'],
  setup: [],
  maintainers: ['nksaraf'],
  docs: {
    quickstart: 'https://docs.solidjs.com/solid-start/building-your-application/deployment/vercel',
  },
};
