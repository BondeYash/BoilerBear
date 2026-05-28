import type { ModuleManifest } from '@boilerbear/core';

export const solidI18n: ModuleManifest = {
  id: 'solid-i18n',
  name: 'Solid Primitives i18n',
  category: 'i18n',
  tags: ['i18n', 'l10n', 'solid'],
  description: 'Lightweight internationalization primitives for Solid.',
  homepage: 'https://primitives.solidjs.community/package/i18n',
  license: 'MIT',
  popularity: 40_000,
  versions: { range: '^2.1.0', min: '2.1.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@solid-primitives/i18n', version: '^2.1.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['solid', 'solid-start'],
  setup: [],
  maintainers: ['solidjs-community'],
  docs: { quickstart: 'https://primitives.solidjs.community/package/i18n' },
};
