import type { ModuleManifest } from '@boilerbear/core';

export const mailchimpMarketing: ModuleManifest = {
  id: 'mailchimp-marketing',
  name: 'Mailchimp Marketing',
  category: 'email',
  tags: ['email', 'marketing', 'campaigns'],
  description: 'Official Mailchimp Marketing API client for Node.js.',
  homepage: 'https://mailchimp.com/developer/marketing/api/root',
  license: 'Apache-2.0',
  popularity: 90_000,
  versions: { range: '^3.0.80', min: '3.0.80' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@mailchimp/mailchimp_marketing', version: '^3.0.80' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [{ kind: 'envVar', key: 'MAILCHIMP_API_KEY', example: 'xxx-us1', required: true }],
  maintainers: ['mailchimp'],
  docs: { quickstart: 'https://mailchimp.com/developer/marketing/guides/quick-start/' },
};
