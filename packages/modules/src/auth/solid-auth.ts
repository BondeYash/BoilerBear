import type { ModuleManifest } from '@boilerbear/core';

export const solidAuth: ModuleManifest = {
  id: 'solid-auth',
  name: 'Auth.js for SolidStart',
  category: 'auth',
  tags: ['auth', 'oauth', 'solid-start'],
  description: 'Auth.js integration for SolidStart via @solid-mediakit/auth.',
  homepage: 'https://start.solidjs.com/core-concepts/auth',
  license: 'MIT',
  popularity: 25_000,
  versions: { range: '^3.0.4', min: '3.0.4' },
  languages: ['js'],
  packages: {
    deps: [
      { name: '@solid-mediakit/auth', version: '^3.0.4' },
      { name: '@auth/core', version: '^0.37.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['solid-start'],
  setup: [
    {
      kind: 'envVar',
      key: 'AUTH_SECRET',
      example: '32-char random string',
      required: true,
    },
  ],
  maintainers: ['solid-mediakit'],
  docs: { quickstart: 'https://start.solidjs.com/core-concepts/auth' },
};
