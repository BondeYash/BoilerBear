import type { ModuleManifest } from '@boilerbear/core';

export const resend: ModuleManifest = {
  id: 'resend',
  name: 'Resend',
  category: 'email',
  tags: ['email', 'transactional', 'react'],
  description: 'Email API built for developers, with first-class React Email support.',
  homepage: 'https://resend.com',
  license: 'MIT',
  popularity: 600_000,
  versions: { range: '^4.0.0', min: '4.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'resend', version: '^4.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [
    { id: 'react-email', reason: 'Resend pairs naturally with React Email components.' },
  ],
  appliesTo: [],
  setup: [{ kind: 'envVar', key: 'RESEND_API_KEY', example: 're_...', required: true }],
  maintainers: ['resend'],
  docs: { quickstart: 'https://resend.com/docs/send-with-nodejs' },
};
