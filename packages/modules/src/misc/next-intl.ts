import type { ModuleManifest } from '@boilerbear/core';

export const nextIntl: ModuleManifest = {
  id: 'next-intl',
  name: 'next-intl',
  category: 'i18n',
  tags: ['i18n', 'localization', 'next'],
  description: 'Internationalization for Next.js App Router with server-first design.',
  homepage: 'https://next-intl-docs.vercel.app',
  license: 'MIT',
  popularity: 900_000,
  versions: { range: '^3.25.0', min: '3.25.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'next-intl', version: '^3.25.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['next'],
  setup: [],
  maintainers: ['amannn'],
  docs: { quickstart: 'https://next-intl-docs.vercel.app/docs/getting-started' },
};
