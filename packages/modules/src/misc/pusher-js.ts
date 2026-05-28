import type { ModuleManifest } from '@boilerbear/core';

export const pusherJs: ModuleManifest = {
  id: 'pusher-js',
  name: 'Pusher Channels',
  category: 'misc',
  tags: ['realtime', 'websockets', 'pubsub'],
  description: 'Hosted realtime pub/sub messaging with browser and server SDKs.',
  homepage: 'https://pusher.com/docs/channels/getting_started/javascript/',
  license: 'MIT',
  popularity: 1_400_000,
  versions: { range: '^8.4.0', min: '8.4.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'pusher-js', version: '^8.4.0' },
      { name: 'pusher', version: '^5.2.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['next'],
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
