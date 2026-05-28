import type { ModuleManifest } from '@boilerbear/core';

export const angularAuthOidcClient: ModuleManifest = {
  id: 'angular-auth-oidc-client',
  name: 'angular-auth-oidc-client',
  category: 'auth',
  tags: ['auth', 'oidc', 'angular'],
  description: 'OpenID Connect and OAuth2 client library for Angular.',
  homepage: 'https://angular-auth-oidc-client.com',
  license: 'MIT',
  popularity: 100_000,
  versions: { range: '^18.0.0', min: '18.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'angular-auth-oidc-client', version: '^18.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['angular'],
  setup: [],
  maintainers: ['damienbod'],
  docs: { quickstart: 'https://angular-auth-oidc-client.com/docs/intro' },
};
