import type { ModuleManifest } from '@boilerbear/core';

export const solidMeta: ModuleManifest = {
  id: 'solid-meta',
  name: 'Solid Meta',
  category: 'misc',
  tags: ['seo', 'head', 'meta', 'solid'],
  description: 'Manage document head metadata in Solid apps.',
  homepage: 'https://github.com/solidjs/solid-meta',
  license: 'MIT',
  popularity: 60_000,
  versions: { range: '^0.29.4', min: '0.29.4' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@solidjs/meta', version: '^0.29.4' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['solid', 'solid-start'],
  setup: [],
  maintainers: ['solidjs'],
  docs: { quickstart: 'https://github.com/solidjs/solid-meta' },
};
