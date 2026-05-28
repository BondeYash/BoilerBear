import type { ModuleManifest } from '@boilerbear/core';

export const remixValidatedForm: ModuleManifest = {
  id: 'remix-validated-form',
  name: 'Remix Validated Form',
  category: 'validation',
  tags: ['forms', 'validation', 'remix'],
  description: 'Progressively enhanced form library with Zod validation for Remix.',
  homepage: 'https://www.remix-validated-form.io',
  license: 'MIT',
  popularity: 80_000,
  versions: { range: '^5.1.5', min: '5.1.5' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'remix-validated-form', version: '^5.1.5' },
      { name: '@remix-validated-form/with-zod', version: '^2.0.7' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['remix'],
  setup: [],
  maintainers: ['airjp73'],
  docs: { quickstart: 'https://www.remix-validated-form.io/get-started' },
};
