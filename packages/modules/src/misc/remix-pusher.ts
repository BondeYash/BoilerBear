import type { ModuleManifest } from '@boilerbear/core';

export const remixPusher: ModuleManifest = {
  id: 'remix-pusher',
  name: 'Pusher for Remix',
  category: 'misc',
  tags: ['realtime', 'websockets', 'remix'],
  description: 'Pusher Channels client and server SDKs for Remix apps.',
  homepage: 'https://pusher.com/docs/channels/getting_started/javascript/',
  license: 'MIT',
  popularity: 100_000,
  versions: { range: '^5.2.0', min: '5.2.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'pusher', version: '^5.2.0' },
      { name: 'pusher-js', version: '^8.4.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['remix'],
  setup: [
    {
      kind: 'envVar',
      key: 'PUSHER_APP_ID',
      example: '1234567',
      required: true,
    },
  ],
  maintainers: ['pusher'],
  docs: { quickstart: 'https://pusher.com/docs/channels/getting_started/javascript/' },
};
