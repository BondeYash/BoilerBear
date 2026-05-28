import type { ModuleManifest } from '@boilerbear/core';

export const nuxtPusher: ModuleManifest = {
  id: 'nuxt-pusher',
  name: 'nuxt-pusher',
  category: 'misc',
  tags: ['realtime', 'websockets', 'nuxt'],
  description: 'Pusher Channels integration module for Nuxt 3.',
  homepage: 'https://github.com/danielroe/nuxt-pusher',
  license: 'MIT',
  popularity: 20_000,
  versions: { range: '^0.1.2', min: '0.1.2' },
  languages: ['js'],
  packages: {
    deps: [],
    devDeps: [{ name: 'nuxt-pusher', version: '^0.1.2' }],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['nuxt'],
  setup: [
    {
      kind: 'envVar',
      key: 'NUXT_PUBLIC_PUSHER_KEY',
      example: 'app_key',
      required: true,
    },
  ],
  maintainers: ['danielroe'],
  docs: { quickstart: 'https://github.com/danielroe/nuxt-pusher#readme' },
};
