import type { ModuleManifest } from '@boilerbear/core';

export const sentryMarko: ModuleManifest = {
  id: 'sentry-marko',
  name: 'Sentry for Marko',
  category: 'monitoring',
  tags: ['errors', 'observability', 'marko', 'node'],
  description: 'Server-side error tracking for Marko apps via Sentry Node SDK.',
  homepage: 'https://docs.sentry.io/platforms/javascript/guides/node/',
  license: 'BSD-3-Clause',
  popularity: 100_000,
  versions: { range: '^8.40.0', min: '8.40.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@sentry/node', version: '^8.40.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['marko'],
  setup: [
    {
      kind: 'envVar',
      key: 'SENTRY_DSN',
      example: 'https://<key>@sentry.io/<project>',
      required: true,
    },
  ],
  maintainers: ['getsentry'],
  docs: { quickstart: 'https://docs.sentry.io/platforms/javascript/guides/node/' },
};
