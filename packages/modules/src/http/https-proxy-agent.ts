import type { ModuleManifest } from '@boilerbear/core';

export const httpsProxyAgent: ModuleManifest = {
  id: 'https-proxy-agent',
  name: 'https-proxy-agent',
  category: 'http',
  tags: ['proxy', 'agent', 'https'],
  description: 'HTTP(s) proxy http.Agent implementation for HTTPS.',
  homepage: 'https://github.com/TooTallNate/proxy-agents',
  license: 'MIT',
  popularity: 60_000_000,
  versions: { range: '^7.0.5', min: '7.0.5' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'https-proxy-agent', version: '^7.0.5' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['TooTallNate'],
  docs: {
    quickstart:
      'https://github.com/TooTallNate/proxy-agents/tree/main/packages/https-proxy-agent#readme',
  },
};
