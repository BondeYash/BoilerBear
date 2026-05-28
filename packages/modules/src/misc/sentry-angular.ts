import type { ModuleManifest } from '@boilerbear/core';

export const sentryAngular: ModuleManifest = {
  id: 'sentry-angular',
  name: 'Sentry for Angular',
  category: 'monitoring',
  tags: ['errors', 'observability', 'angular'],
  description: 'Error tracking and performance monitoring for Angular apps.',
  homepage: 'https://docs.sentry.io/platforms/javascript/guides/angular/',
  license: 'BSD-3-Clause',
  popularity: 400_000,
  versions: { range: '^8.40.0', min: '8.40.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@sentry/angular', version: '^8.40.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['angular'],
  setup: [
    {
      kind: 'envVar',
      key: 'SENTRY_DSN',
      example: 'https://<key>@sentry.io/<project>',
      required: true,
    },
  ],
  maintainers: ['getsentry'],
  docs: { quickstart: 'https://docs.sentry.io/platforms/javascript/guides/angular/' },
};
