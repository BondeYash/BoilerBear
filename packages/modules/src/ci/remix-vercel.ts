import type { ModuleManifest } from '@boilerbear/core';

export const remixVercel: ModuleManifest = {
  id: 'remix-vercel',
  name: 'Remix on Vercel',
  category: 'ci',
  tags: ['deploy', 'vercel', 'remix'],
  description: 'Vercel adapter and preset for deploying Remix apps.',
  homepage: 'https://vercel.com/docs/frameworks/remix',
  license: 'MIT',
  popularity: 250_000,
  versions: { range: '^2.14.0', min: '2.14.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@vercel/remix', version: '^2.14.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['remix'],
  setup: [],
  maintainers: ['vercel'],
  docs: { quickstart: 'https://vercel.com/docs/frameworks/remix' },
};
