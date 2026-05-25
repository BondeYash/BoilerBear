import type { ModuleManifest } from '@boilerbear/core';

export const brevo: ModuleManifest = {
  id: 'brevo',
  name: 'Brevo (formerly Sendinblue)',
  category: 'email',
  tags: ['email', 'transactional', 'marketing'],
  description: 'Official Brevo SDK for sending transactional email and SMS.',
  homepage: 'https://www.brevo.com',
  license: 'MIT',
  popularity: 70_000,
  versions: { range: '^2.2.0', min: '2.2.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@getbrevo/brevo', version: '^2.2.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [{ kind: 'envVar', key: 'BREVO_API_KEY', example: 'xkeysib-...', required: true }],
  maintainers: ['getbrevo'],
  docs: { quickstart: 'https://developers.brevo.com/docs/getting-started' },
};
