import type { ModuleManifest } from '@boilerbear/core';

export const qwikCloudflare: ModuleManifest = {
  id: 'qwik-cloudflare',
  name: 'Qwik Cloudflare Pages Adapter',
  category: 'ci',
  tags: ['deploy', 'cloudflare', 'edge', 'qwik'],
  description: 'Deploy Qwik City apps to Cloudflare Pages with edge SSR.',
  homepage: 'https://qwik.dev/docs/deployments/cloudflare-pages/',
  license: 'MIT',
  popularity: 80_000,
  versions: { range: '^1.10.0', min: '1.10.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@builder.io/qwik-city', version: '^1.10.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['qwik'],
  setup: [],
  maintainers: ['builderio'],
  docs: { quickstart: 'https://qwik.dev/docs/deployments/cloudflare-pages/' },
};
