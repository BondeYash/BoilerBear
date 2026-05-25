import type { ModuleManifest } from '@boilerbear/core';

export const mailgunJs: ModuleManifest = {
  id: 'mailgun-js',
  name: 'Mailgun.js',
  category: 'email',
  tags: ['email', 'mailgun', 'transactional'],
  description: 'Official Mailgun JavaScript SDK.',
  homepage: 'https://github.com/mailgun/mailgun-js',
  license: 'MIT',
  popularity: 600_000,
  versions: { range: '^10.2.4', min: '10.2.4' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'mailgun.js', version: '^10.2.4' },
      { name: 'form-data', version: '^4.0.1' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [
    { kind: 'envVar', key: 'MAILGUN_API_KEY', example: 'key-...', required: true },
    { kind: 'envVar', key: 'MAILGUN_DOMAIN', example: 'mg.example.com', required: true },
  ],
  maintainers: ['mailgun'],
  docs: { quickstart: 'https://github.com/mailgun/mailgun-js#install' },
};
