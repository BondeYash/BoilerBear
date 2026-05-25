import type { ModuleManifest } from '@boilerbear/core';

export const sendgridMail: ModuleManifest = {
  id: 'sendgrid-mail',
  name: 'SendGrid',
  category: 'email',
  tags: ['email', 'transactional', 'twilio'],
  description: 'Official Twilio SendGrid client for sending email.',
  homepage: 'https://github.com/sendgrid/sendgrid-nodejs',
  license: 'MIT',
  popularity: 1_900_000,
  versions: { range: '^8.1.4', min: '8.1.4' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@sendgrid/mail', version: '^8.1.4' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [{ kind: 'envVar', key: 'SENDGRID_API_KEY', example: 'SG.xxx', required: true }],
  maintainers: ['sendgrid'],
  docs: { quickstart: 'https://github.com/sendgrid/sendgrid-nodejs/tree/main/packages/mail' },
};
