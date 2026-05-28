import type { ModuleManifest } from '@boilerbear/core';

export const preactRouter: ModuleManifest = {
  id: 'preact-router',
  name: 'Preact Router',
  category: 'routing',
  tags: ['router', 'preact', 'spa'],
  description: 'A small, easy URL router for Preact applications.',
  homepage: 'https://github.com/preactjs/preact-router',
  license: 'MIT',
  popularity: 150_000,
  versions: { range: '^4.1.2', min: '4.1.2' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'preact-router', version: '^4.1.2' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['preact'],
  setup: [],
  maintainers: ['preactjs'],
  docs: { quickstart: 'https://github.com/preactjs/preact-router' },
};
