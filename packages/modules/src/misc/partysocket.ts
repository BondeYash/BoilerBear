import type { ModuleManifest } from '@boilerbear/core';

export const partysocket: ModuleManifest = {
  id: 'partysocket',
  name: 'PartySocket',
  category: 'misc',
  tags: ['websocket', 'realtime', 'partykit'],
  description: 'Resilient WebSocket client for PartyKit and any WebSocket server.',
  homepage: 'https://github.com/partykit/partykit',
  license: 'ISC',
  popularity: 90_000,
  versions: { range: '^1.0.2', min: '1.0.2' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'partysocket', version: '^1.0.2' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['qwik', 'astro', 'sveltekit', 'solid-start', 'marko'],
  setup: [],
  maintainers: ['partykit'],
  docs: { quickstart: 'https://github.com/partykit/partykit' },
};
