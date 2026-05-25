import type { ModuleManifest } from '@boilerbear/core';

export const zeptomail: ModuleManifest = {
  id: 'zeptomail',
  name: 'ZeptoMail',
  category: 'email',
  tags: ['email', 'transactional', 'zoho'],
  description: 'Official ZeptoMail Node.js SDK from Zoho.',
  homepage: 'https://www.zoho.com/zeptomail',
  license: 'MIT',
  popularity: 25_000,
  versions: { range: '^6.1.0', min: '6.1.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'zeptomail', version: '^6.1.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [
    { kind: 'envVar', key: 'ZEPTOMAIL_TOKEN', example: 'Zoho-enczapikey ...', required: true },
  ],
  maintainers: ['zoho'],
  docs: { quickstart: 'https://www.zoho.com/zeptomail/help/api/email-api.html' },
};
