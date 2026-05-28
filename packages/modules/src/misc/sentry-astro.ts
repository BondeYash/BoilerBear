import type { ModuleManifest } from '@boilerbear/core';

export const sentryAstro: ModuleManifest = {
  id: 'sentry-astro',
  name: 'Sentry for Astro',
  category: 'monitoring',
  tags: ['errors', 'observability', 'astro'],
  description: 'Error tracking and performance monitoring for Astro apps.',
  homepage: 'https://docs.sentry.io/platforms/javascript/guides/astro/',
  license: 'BSD-3-Clause',
  popularity: 120_000,
  versions: { range: '^8.40.0', min: '8.40.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@sentry/astro', version: '^8.40.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['astro'],
  setup: [
    {
      kind: 'envVar',
      key: 'PUBLIC_SENTRY_DSN',
      example: 'https://<key>@sentry.io/<project>',
      required: true,
    },
  ],
  maintainers: ['getsentry'],
  docs: { quickstart: 'https://docs.sentry.io/platforms/javascript/guides/astro/' },
};
