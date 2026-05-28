import type { ModuleManifest } from '@boilerbear/core';

export const sentryPreact: ModuleManifest = {
  id: 'sentry-preact',
  name: 'Sentry for Preact',
  category: 'monitoring',
  tags: ['errors', 'observability', 'preact'],
  description: 'Error tracking and performance monitoring for Preact apps.',
  homepage: 'https://docs.sentry.io/platforms/javascript/guides/preact/',
  license: 'BSD-3-Clause',
  popularity: 100_000,
  versions: { range: '^8.40.0', min: '8.40.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@sentry/preact', version: '^8.40.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['preact'],
  setup: [
    {
      kind: 'envVar',
      key: 'VITE_SENTRY_DSN',
      example: 'https://<key>@sentry.io/<project>',
      required: true,
    },
  ],
  maintainers: ['getsentry'],
  docs: { quickstart: 'https://docs.sentry.io/platforms/javascript/guides/preact/' },
};
