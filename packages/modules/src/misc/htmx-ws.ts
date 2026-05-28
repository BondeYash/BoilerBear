import type { ModuleManifest } from '@boilerbear/core';

export const htmxWs: ModuleManifest = {
  id: 'htmx-ws',
  name: 'HTMX WebSocket',
  category: 'misc',
  tags: ['websocket', 'realtime', 'htmx'],
  description: 'WebSocket extension for HTMX enabling real-time updates.',
  homepage: 'https://htmx.org/extensions/ws/',
  license: 'BSD-2-Clause',
  popularity: 40_000,
  versions: { range: '^2.0.1', min: '2.0.1' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'htmx-ext-ws', version: '^2.0.1' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['htmx'],
  setup: [],
  maintainers: ['bigskysoftware'],
  docs: { quickstart: 'https://htmx.org/extensions/ws/' },
};
