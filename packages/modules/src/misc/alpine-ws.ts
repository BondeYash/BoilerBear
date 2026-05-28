import type { ModuleManifest } from '@boilerbear/core';

export const alpineWs: ModuleManifest = {
  id: 'alpine-ws',
  name: 'Alpine WebSocket',
  category: 'misc',
  tags: ['websocket', 'realtime', 'alpine'],
  description: 'WebSocket connection helpers for real-time Alpine.js apps.',
  homepage: 'https://alpinejs.dev',
  license: 'MIT',
  popularity: 15_000,
  versions: { range: '^3.14.0', min: '3.14.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'alpinejs', version: '^3.14.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['alpine'],
  setup: [],
  maintainers: ['alpinejs'],
  docs: { quickstart: 'https://alpinejs.dev' },
};
