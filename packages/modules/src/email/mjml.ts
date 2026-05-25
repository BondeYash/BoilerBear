import type { ModuleManifest } from '@boilerbear/core';

export const mjml: ModuleManifest = {
  id: 'mjml',
  name: 'MJML',
  category: 'email',
  tags: ['email', 'template', 'responsive'],
  description: 'A markup language that makes it easy to author responsive emails.',
  homepage: 'https://mjml.io',
  license: 'MIT',
  popularity: 300_000,
  versions: { range: '^4.15.3', min: '4.15.3' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'mjml', version: '^4.15.3' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['mjmlio'],
  docs: { quickstart: 'https://documentation.mjml.io/' },
};
