import type { ModuleManifest } from '@boilerbear/core';

export const litMeta: ModuleManifest = {
  id: 'lit-meta',
  name: 'Lit Meta',
  category: 'misc',
  tags: ['seo', 'meta', 'head', 'lit'],
  description: 'Document head and meta tag management helpers for Lit components.',
  homepage: 'https://lit.dev/docs/templates/overview/',
  license: 'BSD-3-Clause',
  popularity: 20_000,
  versions: { range: '^3.2.0', min: '3.2.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'lit', version: '^3.2.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['lit'],
  setup: [],
  maintainers: ['lit'],
  docs: { quickstart: 'https://lit.dev/docs/templates/overview/' },
};
