import type { ModuleManifest } from '@boilerbear/core';

export const sentryQwik: ModuleManifest = {
  id: 'sentry-qwik',
  name: 'Sentry for Qwik',
  category: 'monitoring',
  tags: ['errors', 'observability', 'qwik'],
  description: 'Error tracking and performance monitoring for Qwik apps.',
  homepage: 'https://docs.sentry.io/platforms/javascript/guides/qwik/',
  license: 'BSD-3-Clause',
  popularity: 80_000,
  versions: { range: '^8.40.0', min: '8.40.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@sentry/qwik', version: '^8.40.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['qwik'],
  setup: [
    {
      kind: 'envVar',
      key: 'PUBLIC_SENTRY_DSN',
      example: 'https://<key>@sentry.io/<project>',
      required: true,
    },
  ],
  maintainers: ['getsentry'],
  docs: { quickstart: 'https://docs.sentry.io/platforms/javascript/guides/qwik/' },
};
