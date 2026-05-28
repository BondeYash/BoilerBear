import type { ModuleManifest } from '@boilerbear/core';

export const markoAuth: ModuleManifest = {
  id: 'marko-auth',
  name: 'Marko Auth',
  category: 'auth',
  tags: ['auth', 'session', 'marko'],
  description: 'Server-side session auth helpers for Marko apps.',
  homepage: 'https://markojs.com',
  license: 'MIT',
  popularity: 10_000,
  versions: { range: '^5.35.0', min: '5.35.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'marko', version: '^5.35.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['marko'],
  setup: [
    {
      kind: 'envVar',
      key: 'SESSION_SECRET',
      example: '32-char random string',
      required: true,
    },
  ],
  maintainers: ['marko-js'],
  docs: { quickstart: 'https://markojs.com' },
};
