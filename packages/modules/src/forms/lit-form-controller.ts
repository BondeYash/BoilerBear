import type { ModuleManifest } from '@boilerbear/core';

export const litFormController: ModuleManifest = {
  id: 'lit-form-controller',
  name: 'Lit Form Controller',
  category: 'validation',
  tags: ['forms', 'validation', 'lit', 'controllers'],
  description: 'Reactive form state and validation for Lit using reactive controllers.',
  homepage: 'https://lit.dev/docs/composition/controllers/',
  license: 'BSD-3-Clause',
  popularity: 30_000,
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
  docs: { quickstart: 'https://lit.dev/docs/composition/controllers/' },
};
