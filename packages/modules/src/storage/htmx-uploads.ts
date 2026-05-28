import type { ModuleManifest } from '@boilerbear/core';

export const htmxUploads: ModuleManifest = {
  id: 'htmx-uploads',
  name: 'HTMX File Uploads',
  category: 'storage',
  tags: ['uploads', 'files', 'htmx', 'storage'],
  description: 'File upload patterns using HTMX with progress events.',
  homepage: 'https://htmx.org/examples/file-upload/',
  license: 'BSD-2-Clause',
  popularity: 40_000,
  versions: { range: '^2.0.0', min: '2.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'htmx.org', version: '^2.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['htmx'],
  setup: [],
  maintainers: ['bigskysoftware'],
  docs: { quickstart: 'https://htmx.org/examples/file-upload/' },
};
