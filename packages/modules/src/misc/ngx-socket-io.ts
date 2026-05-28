import type { ModuleManifest } from '@boilerbear/core';

export const ngxSocketIo: ModuleManifest = {
  id: 'ngx-socket-io',
  name: 'ngx-socket-io',
  category: 'misc',
  tags: ['realtime', 'websocket', 'angular', 'socket.io'],
  description: 'Socket.IO module for Angular providing observable-based real-time communication.',
  homepage: 'https://github.com/rodgc/ngx-socket-io',
  license: 'MIT',
  popularity: 100_000,
  versions: { range: '^4.7.0', min: '4.7.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'ngx-socket-io', version: '^4.7.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['angular'],
  setup: [],
  maintainers: ['rodgc'],
  docs: { quickstart: 'https://github.com/rodgc/ngx-socket-io#readme' },
};
