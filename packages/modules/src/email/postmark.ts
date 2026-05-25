import type { ModuleManifest } from '@boilerbear/core';

export const postmark: ModuleManifest = {
  id: 'postmark',
  name: 'Postmark',
  category: 'email',
  tags: ['email', 'transactional', 'postmark'],
  description: 'Official Postmark Node.js client.',
  homepage: 'https://postmarkapp.com',
  license: 'MIT',
  popularity: 250_000,
  versions: { range: '^4.0.5', min: '4.0.5' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'postmark', version: '^4.0.5' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [{ kind: 'envVar', key: 'POSTMARK_SERVER_TOKEN', example: 'xxx', required: true }],
  maintainers: ['ActiveCampaign'],
  docs: { quickstart: 'https://postmarkapp.com/developer/integration/official-libraries#node-js' },
};
