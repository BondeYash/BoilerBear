import type { ModuleManifest } from '@boilerbear/core';

export const emberCliPusher: ModuleManifest = {
  id: 'ember-cli-pusher',
  name: 'ember-cli-pusher',
  category: 'misc',
  tags: ['realtime', 'pusher', 'ember'],
  description: 'Ember CLI addon that integrates Pusher real-time messaging.',
  homepage: 'https://github.com/ChristyJacob4/ember-cli-pusher',
  license: 'MIT',
  popularity: 20_000,
  versions: { range: '^0.5.0', min: '0.5.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'ember-cli-pusher', version: '^0.5.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['ember'],
  setup: [
    {
      kind: 'envVar',
      key: 'PUSHER_KEY',
      example: 'your-pusher-app-key',
      required: true,
    },
  ],
  maintainers: ['ChristyJacob4'],
  docs: { quickstart: 'https://github.com/ChristyJacob4/ember-cli-pusher#readme' },
};
