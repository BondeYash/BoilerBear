import type { ModuleManifest } from '@boilerbear/core';

export const socksProxyAgent: ModuleManifest = {
  id: 'socks-proxy-agent',
  name: 'socks-proxy-agent',
  category: 'http',
  tags: ['proxy', 'agent', 'socks'],
  description: 'SOCKS proxy http.Agent implementation for HTTP/HTTPS.',
  homepage: 'https://github.com/TooTallNate/proxy-agents',
  license: 'MIT',
  popularity: 18_000_000,
  versions: { range: '^8.0.4', min: '8.0.4' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'socks-proxy-agent', version: '^8.0.4' }],
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
      'https://github.com/TooTallNate/proxy-agents/tree/main/packages/socks-proxy-agent#readme',
  },
};
