import type { ModuleManifest } from '@boilerbear/core';

export const mandrill: ModuleManifest = {
  id: 'mandrill',
  name: 'Mandrill (Mailchimp Transactional)',
  category: 'email',
  tags: ['email', 'transactional', 'mailchimp'],
  description: 'Mailchimp Transactional Email API (formerly Mandrill).',
  homepage: 'https://mandrillapp.com',
  license: 'Apache-2.0',
  popularity: 80_000,
  versions: { range: '^1.0.59', min: '1.0.59' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@mailchimp/mailchimp_transactional', version: '^1.0.59' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [{ kind: 'envVar', key: 'MANDRILL_API_KEY', example: 'xxx', required: true }],
  maintainers: ['mailchimp'],
  docs: { quickstart: 'https://mailchimp.com/developer/transactional/guides/quick-start/' },
};
