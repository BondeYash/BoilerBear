import type { ModuleManifest } from '@boilerbear/core';

export const socketIoClient: ModuleManifest = {
  id: 'socket-io-client',
  name: 'Socket.IO Client',
  category: 'misc',
  tags: ['realtime', 'websocket', 'pubsub'],
  description: 'Browser WebSocket client with auto-reconnect and room support.',
  homepage: 'https://socket.io/docs/v4/client-api/',
  license: 'MIT',
  popularity: 13_000_000,
  versions: { range: '^4.8.0', min: '4.8.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'socket.io-client', version: '^4.8.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['react', 'vue', 'svelte', 'solid', 'preact', 'mithril', 'stencil'],
  setup: [],
  maintainers: ['socketio'],
  docs: { quickstart: 'https://socket.io/docs/v4/client-installation/' },
};
