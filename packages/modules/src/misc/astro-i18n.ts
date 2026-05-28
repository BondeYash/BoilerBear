import type { ModuleManifest } from '@boilerbear/core';

export const astroI18n: ModuleManifest = {
  id: 'astro-i18n',
  name: 'Astro i18n Routing',
  category: 'i18n',
  tags: ['i18n', 'l10n', 'astro', 'routing'],
  description: 'Built-in internationalization routing and locale helpers for Astro.',
  homepage: 'https://docs.astro.build/en/guides/internationalization/',
  license: 'MIT',
  popularity: 150_000,
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
  docs: { quickstart: 'https://docs.astro.build/en/guides/internationalization/' },
};
