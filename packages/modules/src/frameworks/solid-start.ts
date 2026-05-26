import type { ModuleManifest } from '@boilerbear/core';

export const solidStart: ModuleManifest = {
  id: 'solid-start',
  name: 'SolidStart',
  category: 'framework',
  tags: ['solid-start', 'solid', 'ssr'],
  description: 'Solid meta-framework with file-based routing and SSR via Vinxi.',
  homepage: 'https://start.solidjs.com',
  license: 'MIT',
  popularity: 250_000,
  versions: { range: '^1.0.0', min: '1.0.0' },
  languages: ['js'],
  packages: { deps: [], devDeps: [] },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  framework: {
    template: 'solid-start-basic',
    createCommand: '{pm} init solid@latest {name}',
  },
  setup: [],
  maintainers: ['solidjs'],
  docs: { quickstart: 'https://docs.solidjs.com/solid-start' },
};
