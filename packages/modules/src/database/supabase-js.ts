import type { ModuleManifest } from '@boilerbear/core';

export const supabaseJs: ModuleManifest = {
  id: 'supabase-js',
  name: 'Supabase JS',
  category: 'database',
  tags: ['supabase', 'postgres', 'baas'],
  description: 'Isomorphic JavaScript client for Supabase (Postgres + Auth + Storage).',
  homepage: 'https://supabase.com',
  license: 'MIT',
  popularity: 1_900_000,
  versions: { range: '^2.46.0', min: '2.46.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@supabase/supabase-js', version: '^2.46.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [
    { kind: 'envVar', key: 'SUPABASE_URL', example: 'https://xyz.supabase.co', required: true },
    { kind: 'envVar', key: 'SUPABASE_ANON_KEY', example: 'eyJhbGciOi...', required: true },
  ],
  maintainers: ['supabase'],
  docs: { quickstart: 'https://supabase.com/docs/reference/javascript/introduction' },
};
