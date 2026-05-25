import type { ModuleManifest } from '@boilerbear/core';

export const zapatos: ModuleManifest = {
  id: 'zapatos',
  name: 'Zapatos',
  category: 'orm',
  tags: ['postgres', 'typescript', 'sql'],
  description: 'Zero-abstraction Postgres + TypeScript that generates types from your schema.',
  homepage: 'https://jawj.github.io/zapatos',
  license: 'MIT',
  popularity: 30_000,
  versions: { range: '^6.4.0', min: '6.4.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'zapatos', version: '^6.4.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [{ id: 'pg', reason: 'Zapatos runs against pg.' }],
  appliesTo: [],
  setup: [],
  maintainers: ['jawj'],
  docs: { quickstart: 'https://jawj.github.io/zapatos/' },
};
