import type { ModuleManifest } from '@boilerbear/core';

export const modularFormsSolid: ModuleManifest = {
  id: 'modular-forms-solid',
  name: 'Modular Forms (Solid)',
  category: 'validation',
  tags: ['forms', 'validation', 'solid'],
  description: 'Modular, type-safe form library for Solid with built-in validation.',
  homepage: 'https://modularforms.dev',
  license: 'MIT',
  popularity: 50_000,
  versions: { range: '^0.23.0', min: '0.23.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@modular-forms/solid', version: '^0.23.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['solid', 'solid-start'],
  setup: [],
  maintainers: ['fabian-hiller'],
  docs: { quickstart: 'https://modularforms.dev' },
};
