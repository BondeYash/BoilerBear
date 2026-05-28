import type { ModuleManifest } from '@boilerbear/core';

export const emberStripeService: ModuleManifest = {
  id: 'ember-stripe-service',
  name: 'ember-stripe-service',
  category: 'payments',
  tags: ['payments', 'stripe', 'ember'],
  description: 'Ember service wrapping Stripe.js for tokenization and Elements.',
  homepage: 'https://github.com/code-corps/ember-stripe-service',
  license: 'MIT',
  popularity: 40_000,
  versions: { range: '^0.0.27', min: '0.0.27' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'ember-stripe-service', version: '^0.0.27' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['ember'],
  setup: [
    {
      kind: 'envVar',
      key: 'STRIPE_PUBLISHABLE_KEY',
      example: 'pk_test_...',
      required: true,
    },
  ],
  maintainers: ['code-corps'],
  docs: { quickstart: 'https://github.com/code-corps/ember-stripe-service#readme' },
};
