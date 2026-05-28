import type { ModuleManifest } from '@boilerbear/core';

export const modularFormsQwik: ModuleManifest = {
  id: 'modular-forms-qwik',
  name: 'Modular Forms (Qwik)',
  category: 'validation',
  tags: ['forms', 'validation', 'qwik'],
  description: 'Modular, type-safe form library for Qwik with built-in validation.',
  homepage: 'https://modularforms.dev',
  license: 'MIT',
  popularity: 30_000,
  versions: { range: '^0.27.0', min: '0.27.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@modular-forms/qwik', version: '^0.27.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['qwik'],
  setup: [],
  maintainers: ['fabian-hiller'],
  docs: { quickstart: 'https://modularforms.dev' },
};
