import type { ModuleManifest } from '@boilerbear/core';

export const mailersend: ModuleManifest = {
  id: 'mailersend',
  name: 'MailerSend',
  category: 'email',
  tags: ['email', 'transactional', 'mailersend'],
  description: 'Official MailerSend Node.js SDK.',
  homepage: 'https://www.mailersend.com',
  license: 'MIT',
  popularity: 40_000,
  versions: { range: '^2.3.0', min: '2.3.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'mailersend', version: '^2.3.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [{ kind: 'envVar', key: 'MAILERSEND_API_TOKEN', example: 'xxx', required: true }],
  maintainers: ['mailersend'],
  docs: { quickstart: 'https://developers.mailersend.com/general.html#nodejs-sdk' },
};
