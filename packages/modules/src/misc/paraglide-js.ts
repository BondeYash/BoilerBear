import type { ModuleManifest } from '@boilerbear/core';

export const paraglideJs: ModuleManifest = {
  id: 'paraglide-js',
  name: 'Paraglide JS',
  category: 'i18n',
  tags: ['i18n', 'localization', 'sveltekit'],
  description: 'Type-safe, tree-shakeable i18n library from Inlang with SvelteKit integration.',
  homepage: 'https://inlang.com/m/gerre34r/library-inlang-paraglideJs',
  license: 'Apache-2.0',
  popularity: 60_000,
  versions: { range: '^1.11.0', min: '1.11.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: '@inlang/paraglide-js', version: '^1.11.0' },
      { name: '@inlang/paraglide-sveltekit', version: '^0.15.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['sveltekit'],
  setup: [],
  maintainers: ['inlang'],
  docs: { quickstart: 'https://inlang.com/m/gerre34r/library-inlang-paraglideJs' },
};
