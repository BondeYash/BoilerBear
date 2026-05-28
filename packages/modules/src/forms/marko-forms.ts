import type { ModuleManifest } from '@boilerbear/core';

export const markoForms: ModuleManifest = {
  id: 'marko-forms',
  name: 'Marko Forms',
  category: 'validation',
  tags: ['forms', 'validation', 'marko'],
  description: 'Form handling and validation patterns for Marko apps.',
  homepage: 'https://markojs.com',
  license: 'MIT',
  popularity: 12_000,
  versions: { range: '^5.35.0', min: '5.35.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'marko', version: '^5.35.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['marko'],
  setup: [],
  maintainers: ['marko-js'],
  docs: { quickstart: 'https://markojs.com' },
};
