import type { ModuleManifest } from '@boilerbear/core';

export const toughCookie: ModuleManifest = {
  id: 'tough-cookie',
  name: 'tough-cookie',
  category: 'http',
  tags: ['cookies', 'jar', 'http'],
  description: 'RFC 6265 cookies and CookieJar for Node.js.',
  homepage: 'https://github.com/salesforce/tough-cookie',
  license: 'BSD-3-Clause',
  popularity: 80_000_000,
  versions: { range: '^5.0.0', min: '5.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'tough-cookie', version: '^5.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['salesforce'],
  docs: { quickstart: 'https://github.com/salesforce/tough-cookie#api' },
};
