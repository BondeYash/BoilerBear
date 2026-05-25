import type { ModuleManifest } from '@boilerbear/core';

export const mailparser: ModuleManifest = {
  id: 'mailparser',
  name: 'mailparser',
  category: 'email',
  tags: ['email', 'parser', 'mime'],
  description: 'Parse MIME emails into structured JavaScript objects.',
  homepage: 'https://nodemailer.com/extras/mailparser',
  license: 'MIT',
  popularity: 1_200_000,
  versions: { range: '^3.7.1', min: '3.7.1' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'mailparser', version: '^3.7.1' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['nodemailer'],
  docs: { quickstart: 'https://nodemailer.com/extras/mailparser/' },
};
