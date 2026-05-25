import type { ModuleManifest } from '@boilerbear/core';

export const emailjs: ModuleManifest = {
  id: 'emailjs',
  name: 'emailjs',
  category: 'email',
  tags: ['smtp', 'email', 'node'],
  description: 'Simple SMTP email client for Node.js without runtime dependencies.',
  homepage: 'https://github.com/eleith/emailjs',
  license: 'MIT',
  popularity: 80_000,
  versions: { range: '^4.0.3', min: '4.0.3' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'emailjs', version: '^4.0.3' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['eleith'],
  docs: { quickstart: 'https://github.com/eleith/emailjs#example' },
};
