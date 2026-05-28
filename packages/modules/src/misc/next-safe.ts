import type { ModuleManifest } from '@boilerbear/core';

export const nextSafe: ModuleManifest = {
  id: 'next-safe',
  name: 'next-safe',
  category: 'misc',
  tags: ['security', 'csp', 'headers'],
  description: 'Content Security Policy and security headers helper for Next.js.',
  homepage: 'https://www.npmjs.com/package/next-safe',
  license: 'MIT',
  popularity: 80_000,
  versions: { range: '^3.5.0', min: '3.5.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'next-safe', version: '^3.5.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['next'],
  setup: [],
  maintainers: ['trezy'],
  docs: { quickstart: 'https://www.npmjs.com/package/next-safe' },
};
