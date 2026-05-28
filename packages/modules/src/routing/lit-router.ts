import type { ModuleManifest } from '@boilerbear/core';

export const litRouter: ModuleManifest = {
  id: 'lit-router',
  name: 'Lit Router',
  category: 'routing',
  tags: ['router', 'lit', 'spa'],
  description: 'Router for Lit applications, provided by Lit Labs.',
  homepage: 'https://github.com/lit/lit/tree/main/packages/labs/router',
  license: 'BSD-3-Clause',
  popularity: 30_000,
  versions: { range: '^0.1.4', min: '0.1.4' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@lit-labs/router', version: '^0.1.4' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['lit'],
  setup: [],
  maintainers: ['lit'],
  docs: { quickstart: 'https://github.com/lit/lit/tree/main/packages/labs/router' },
};
