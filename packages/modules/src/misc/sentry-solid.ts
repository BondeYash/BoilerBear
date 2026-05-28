import type { ModuleManifest } from '@boilerbear/core';

export const sentrySolid: ModuleManifest = {
  id: 'sentry-solid',
  name: 'Sentry for Solid',
  category: 'monitoring',
  tags: ['errors', 'observability', 'solid'],
  description: 'Error tracking and performance monitoring for Solid apps.',
  homepage: 'https://docs.sentry.io/platforms/javascript/guides/solid/',
  license: 'BSD-3-Clause',
  popularity: 100_000,
  versions: { range: '^8.40.0', min: '8.40.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@sentry/solid', version: '^8.40.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['solid', 'solid-start'],
  setup: [
    {
      kind: 'envVar',
      key: 'VITE_SENTRY_DSN',
      example: 'https://<key>@sentry.io/<project>',
      required: true,
    },
  ],
  maintainers: ['getsentry'],
  docs: { quickstart: 'https://docs.sentry.io/platforms/javascript/guides/solid/' },
};
