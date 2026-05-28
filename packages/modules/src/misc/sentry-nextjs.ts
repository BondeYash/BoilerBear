import type { ModuleManifest } from '@boilerbear/core';

export const sentryNextjs: ModuleManifest = {
  id: 'sentry-nextjs',
  name: 'Sentry for Next.js',
  category: 'monitoring',
  tags: ['errors', 'observability', 'next'],
  description: 'Error tracking and performance monitoring for Next.js apps.',
  homepage: 'https://docs.sentry.io/platforms/javascript/guides/nextjs/',
  license: 'BSD-3-Clause',
  popularity: 4_500_000,
  versions: { range: '^8.40.0', min: '8.40.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@sentry/nextjs', version: '^8.40.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['next'],
  setup: [
    {
      kind: 'envVar',
      key: 'NEXT_PUBLIC_SENTRY_DSN',
      example: 'https://<key>@sentry.io/<project>',
      required: true,
    },
  ],
  maintainers: ['getsentry'],
  docs: { quickstart: 'https://docs.sentry.io/platforms/javascript/guides/nextjs/' },
};
