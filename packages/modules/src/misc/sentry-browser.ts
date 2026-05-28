import type { ModuleManifest } from '@boilerbear/core';

export const sentryBrowser: ModuleManifest = {
  id: 'sentry-browser',
  name: 'Sentry Browser SDK',
  category: 'monitoring',
  tags: ['errors', 'observability', 'browser'],
  description: 'Error tracking and performance monitoring for browser JavaScript apps.',
  homepage: 'https://docs.sentry.io/platforms/javascript/',
  license: 'BSD-3-Clause',
  popularity: 1_000_000,
  versions: { range: '^8.40.0', min: '8.40.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@sentry/browser', version: '^8.40.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['lit', 'alpine', 'htmx', 'mithril', 'stencil'],
  setup: [
    {
      kind: 'envVar',
      key: 'SENTRY_DSN',
      example: 'https://<key>@sentry.io/<project>',
      required: true,
    },
  ],
  maintainers: ['getsentry'],
  docs: { quickstart: 'https://docs.sentry.io/platforms/javascript/' },
};
