import type { ModuleManifest } from '@boilerbear/core';

export const preactHelmet: ModuleManifest = {
  id: 'preact-helmet',
  name: 'Preact Helmet',
  category: 'misc',
  tags: ['seo', 'head', 'meta', 'preact'],
  description: 'Document head manager for Preact apps.',
  homepage: 'https://github.com/download13/preact-helmet',
  license: 'MIT',
  popularity: 30_000,
  versions: { range: '^4.0.0-alpha-3', min: '4.0.0-alpha-3' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'preact-helmet', version: '^4.0.0-alpha-3' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['preact'],
  setup: [],
  maintainers: ['download13'],
  docs: { quickstart: 'https://github.com/download13/preact-helmet' },
};
