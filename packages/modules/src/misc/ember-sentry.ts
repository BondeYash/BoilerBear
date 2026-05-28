import type { ModuleManifest } from '@boilerbear/core';

export const emberSentry: ModuleManifest = {
  id: 'ember-sentry',
  name: 'Sentry for Ember',
  category: 'monitoring',
  tags: ['errors', 'observability', 'ember'],
  description: 'Error tracking and performance monitoring for Ember apps.',
  homepage: 'https://docs.sentry.io/platforms/javascript/guides/ember/',
  license: 'BSD-3-Clause',
  popularity: 80_000,
  versions: { range: '^8.40.0', min: '8.40.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@sentry/ember', version: '^8.40.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['ember'],
  setup: [
    {
      kind: 'envVar',
      key: 'SENTRY_DSN',
      example: 'https://<key>@sentry.io/<project>',
      required: true,
    },
  ],
  maintainers: ['getsentry'],
  docs: { quickstart: 'https://docs.sentry.io/platforms/javascript/guides/ember/' },
};
