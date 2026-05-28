import type { ModuleManifest } from '@boilerbear/core';

export const astroDevtoolbar: ModuleManifest = {
  id: 'astro-devtoolbar',
  name: 'Astro Dev Toolbar',
  category: 'components',
  tags: ['devtools', 'astro', 'debugging'],
  description: 'In-browser dev toolbar API for Astro with audits and custom apps.',
  homepage: 'https://docs.astro.build/en/reference/dev-toolbar-app-reference/',
  license: 'MIT',
  popularity: 100_000,
  versions: { range: '^5.0.0', min: '5.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'astro', version: '^5.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['astro'],
  setup: [],
  maintainers: ['withastro'],
  docs: { quickstart: 'https://docs.astro.build/en/reference/dev-toolbar-app-reference/' },
};
