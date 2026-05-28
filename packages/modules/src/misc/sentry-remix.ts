import type { ModuleManifest } from '@boilerbear/core';

export const sentryRemix: ModuleManifest = {
  id: 'sentry-remix',
  name: 'Sentry for Remix',
  category: 'monitoring',
  tags: ['errors', 'observability', 'remix'],
  description: 'Error tracking and performance monitoring for Remix apps.',
  homepage: 'https://docs.sentry.io/platforms/javascript/guides/remix/',
  license: 'BSD-3-Clause',
  popularity: 400_000,
  versions: { range: '^8.40.0', min: '8.40.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@sentry/remix', version: '^8.40.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['remix'],
  setup: [
    {
      kind: 'envVar',
      key: 'SENTRY_DSN',
      example: 'https://<key>@sentry.io/<project>',
      required: true,
    },
  ],
  maintainers: ['getsentry'],
  docs: { quickstart: 'https://docs.sentry.io/platforms/javascript/guides/remix/' },
};
