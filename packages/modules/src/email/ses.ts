import type { ModuleManifest } from '@boilerbear/core';

export const ses: ModuleManifest = {
  id: 'ses',
  name: 'Amazon SES (AWS SDK v3)',
  category: 'email',
  tags: ['email', 'aws', 'ses'],
  description: 'AWS SDK v3 client for Amazon Simple Email Service.',
  homepage: 'https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/sesv2-examples.html',
  license: 'Apache-2.0',
  popularity: 4_500_000,
  versions: { range: '^3.667.0', min: '3.667.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@aws-sdk/client-sesv2', version: '^3.667.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [
    { kind: 'envVar', key: 'AWS_REGION', example: 'us-east-1', required: true },
    { kind: 'envVar', key: 'AWS_ACCESS_KEY_ID', example: 'AKIA...', required: true },
    { kind: 'envVar', key: 'AWS_SECRET_ACCESS_KEY', example: '...', required: true },
  ],
  maintainers: ['aws'],
  docs: {
    quickstart:
      'https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/sesv2-examples.html',
  },
};
