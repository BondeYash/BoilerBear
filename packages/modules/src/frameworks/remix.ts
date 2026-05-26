import type { ModuleManifest } from '@boilerbear/core';

export const remix: ModuleManifest = {
  id: 'remix',
  name: 'Remix',
  category: 'framework',
  tags: ['remix', 'react', 'ssr'],
  description: 'React-based full-stack framework with nested routing and loaders.',
  homepage: 'https://remix.run',
  license: 'MIT',
  popularity: 1_500_000,
  versions: { range: '^2.15.0', min: '2.15.0' },
  languages: ['js'],
  packages: { deps: [], devDeps: [] },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  framework: {
    template: 'remix-basic',
    createCommand: 'npx create-remix@latest {name}',
  },
  setup: [],
  maintainers: ['remix-run'],
  docs: { quickstart: 'https://remix.run/docs/en/main/start/quickstart' },
};
