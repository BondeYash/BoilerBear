import type { ModuleManifest } from '@boilerbear/core';

export const ngxStripe: ModuleManifest = {
  id: 'ngx-stripe',
  name: 'ngx-stripe',
  category: 'payments',
  tags: ['payments', 'stripe', 'angular'],
  description: 'Angular wrapper for Stripe.js providing Elements, Checkout, and Payment Intents.',
  homepage: 'https://ngx-stripe.dev',
  license: 'MIT',
  popularity: 150_000,
  versions: { range: '^18.0.0', min: '18.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'ngx-stripe', version: '^18.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['angular'],
  setup: [
    {
      kind: 'envVar',
      key: 'STRIPE_PUBLISHABLE_KEY',
      example: 'pk_test_...',
      required: true,
    },
  ],
  maintainers: ['richnologies'],
  docs: { quickstart: 'https://ngx-stripe.dev/getting-started' },
};
