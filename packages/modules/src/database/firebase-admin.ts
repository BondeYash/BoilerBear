import type { ModuleManifest } from '@boilerbear/core';

export const firebaseAdmin: ModuleManifest = {
  id: 'firebase-admin',
  name: 'Firebase Admin SDK',
  category: 'database',
  tags: ['firebase', 'firestore', 'baas'],
  description: 'Server-side Firebase SDK for Firestore, Realtime DB, Auth, and FCM.',
  homepage: 'https://firebase.google.com/docs/admin/setup',
  license: 'Apache-2.0',
  popularity: 2_300_000,
  versions: { range: '^12.6.0', min: '12.6.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'firebase-admin', version: '^12.6.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [
    {
      kind: 'envVar',
      key: 'GOOGLE_APPLICATION_CREDENTIALS',
      example: '/path/to/key.json',
      required: true,
    },
  ],
  maintainers: ['firebase'],
  docs: { quickstart: 'https://firebase.google.com/docs/admin/setup' },
};
