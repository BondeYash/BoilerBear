import type { ModuleManifest } from '@boilerbear/core';

export const angularFirebase: ModuleManifest = {
  id: 'angular-firebase',
  name: 'Firebase Hosting for Angular',
  category: 'ci',
  tags: ['ci', 'deploy', 'firebase', 'angular'],
  description: 'Firebase CLI tooling for deploying Angular apps to Firebase Hosting.',
  homepage: 'https://firebase.google.com/docs/hosting/quickstart',
  license: 'MIT',
  popularity: 500_000,
  versions: { range: '^13.20.0', min: '13.20.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'firebase-tools', version: '^13.20.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['angular'],
  setup: [],
  maintainers: ['firebase'],
  docs: { quickstart: 'https://firebase.google.com/docs/hosting/quickstart' },
};
