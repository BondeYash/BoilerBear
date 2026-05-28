import type { ModuleManifest } from '@boilerbear/core';

export const qwikCity: ModuleManifest = {
  id: 'qwik-city',
  name: 'Qwik City',
  category: 'routing',
  tags: ['routing', 'qwik', 'meta-framework'],
  description: 'File-based routing, layouts, and data loaders for Qwik apps.',
  homepage: 'https://qwik.dev/docs/qwikcity/',
  license: 'MIT',
  popularity: 200_000,
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
  docs: { quickstart: 'https://qwik.dev/docs/qwikcity/' },
};
