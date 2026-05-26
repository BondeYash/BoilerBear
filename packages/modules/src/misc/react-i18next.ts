import type { ModuleManifest } from '@boilerbear/core';

export const reactI18next: ModuleManifest = {
  id: 'react-i18next',
  name: 'react-i18next',
  category: 'i18n',
  tags: ['i18n', 'localization', 'react'],
  description: 'React bindings for i18next with hooks and Suspense support.',
  homepage: 'https://react.i18next.com',
  license: 'MIT',
  popularity: 6_000_000,
  versions: { range: '^15.1.0', min: '15.1.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'react-i18next', version: '^15.1.0' },
      { name: 'i18next', version: '^23.16.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['react'],
  setup: [],
  maintainers: ['i18next'],
  docs: { quickstart: 'https://react.i18next.com/getting-started' },
};
