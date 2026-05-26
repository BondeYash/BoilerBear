import type { ModuleManifest } from '@boilerbear/core';

export const lit: ModuleManifest = {
  id: 'lit',
  name: 'Lit',
  category: 'framework',
  tags: ['lit', 'web-components'],
  description: 'Web component library with reactive properties and TypeScript decorators.',
  homepage: 'https://lit.dev',
  license: 'BSD-3-Clause',
  popularity: 1_100_000,
  versions: { range: '^3.2.0', min: '3.2.0' },
  languages: ['js'],
  packages: { deps: [], devDeps: [] },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  framework: {
    template: 'lit-element',
    createCommand: '{pm} init @open-wc lit-element {name}',
  },
  setup: [],
  maintainers: ['lit'],
  docs: { quickstart: 'https://lit.dev/docs/getting-started/' },
};
