import type { ModuleManifest } from '@boilerbear/core';

export const nodemailer: ModuleManifest = {
  id: 'nodemailer',
  name: 'Nodemailer',
  category: 'email',
  tags: ['smtp', 'email', 'transactional'],
  description: 'Send emails from Node.js — easy as cake.',
  homepage: 'https://nodemailer.com',
  license: 'MIT',
  popularity: 30_000_000,
  versions: { range: '^6.9.15', min: '6.9.15' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'nodemailer', version: '^6.9.15' }],
    devDeps: [{ name: '@types/nodemailer', version: '^6.4.16' }],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['nodemailer'],
  docs: { quickstart: 'https://nodemailer.com/about/' },
};
