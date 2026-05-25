import type { ModuleManifest } from '@boilerbear/core';

export const httpProxyAgent: ModuleManifest = {
  id: 'http-proxy-agent',
  name: 'http-proxy-agent',
  category: 'http',
  tags: ['proxy', 'agent', 'http'],
  description: 'HTTP(s) proxy http.Agent implementation for HTTP.',
  homepage: 'https://github.com/TooTallNate/proxy-agents',
  license: 'MIT',
  popularity: 50_000_000,
  versions: { range: '^7.0.2', min: '7.0.2' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'http-proxy-agent', version: '^7.0.2' }],
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
      'https://github.com/TooTallNate/proxy-agents/tree/main/packages/http-proxy-agent#readme',
  },
};
