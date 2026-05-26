import type { ModuleManifest } from '@boilerbear/core';

export const reactHelmetAsync: ModuleManifest = {
  id: 'react-helmet-async',
  name: 'React Helmet Async',
  category: 'misc',
  tags: ['seo', 'meta', 'head', 'react'],
  description: 'Thread-safe document head manager for React with async-rendering support.',
  homepage: 'https://github.com/staylor/react-helmet-async',
  license: 'Apache-2.0',
  popularity: 4_200_000,
  versions: { range: '^2.0.5', min: '2.0.5' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'react-helmet-async', version: '^2.0.5' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['react'],
  setup: [],
  maintainers: ['staylor'],
  docs: { quickstart: 'https://github.com/staylor/react-helmet-async#readme' },
};
