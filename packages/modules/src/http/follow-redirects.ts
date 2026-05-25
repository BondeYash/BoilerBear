import type { ModuleManifest } from '@boilerbear/core';

export const followRedirects: ModuleManifest = {
  id: 'follow-redirects',
  name: 'follow-redirects',
  category: 'http',
  tags: ['redirects', 'http', 'https'],
  description: 'Drop-in replacement for Node http/https with redirect-following support.',
  homepage: 'https://github.com/follow-redirects/follow-redirects',
  license: 'MIT',
  popularity: 110_000_000,
  versions: { range: '^1.15.9', min: '1.15.9' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'follow-redirects', version: '^1.15.9' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['olalonde', 'RubenVerborgh'],
  docs: { quickstart: 'https://github.com/follow-redirects/follow-redirects#usage' },
};
