import type { ModuleManifest } from '@boilerbear/core';

export const reactEmail: ModuleManifest = {
  id: 'react-email',
  name: 'React Email',
  category: 'email',
  tags: ['email', 'react', 'jsx', 'template'],
  description: 'Build, preview, and send emails using React components.',
  homepage: 'https://react.email',
  license: 'MIT',
  popularity: 700_000,
  versions: { range: '^3.0.0', min: '3.0.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: '@react-email/components', version: '^0.0.25' },
      { name: '@react-email/render', version: '^1.0.1' },
    ],
    devDeps: [{ name: 'react-email', version: '^3.0.0' }],
  },
  requires: [],
  conflicts: [{ id: 'mjml', severity: 'warning', reason: 'Pick one email template system.' }],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['resend'],
  docs: { quickstart: 'https://react.email/docs/getting-started/manual-setup' },
};
