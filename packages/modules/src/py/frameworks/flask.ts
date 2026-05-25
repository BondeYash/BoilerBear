import type { ModuleManifest } from '@boilerbear/core';

export const flask: ModuleManifest = {
  id: 'flask',
  name: 'Flask',
  category: 'framework',
  tags: ['python', 'micro', 'wsgi'],
  description: 'Minimal Python micro web framework — bring your own ORM, auth, etc.',
  homepage: 'https://flask.palletsprojects.com',
  license: 'BSD-3-Clause',
  popularity: 30_000_000,
  languages: ['py'],
  versions: { range: '^3.0.0', min: '3.0.0' },
  packages: {
    deps: [{ name: 'flask', version: '^3.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [{ id: 'pytest' }, { id: 'ruff' }],
  appliesTo: [],
  framework: {
    template: 'flask-uv',
    createCommand: 'uv init {name}',
  },
  setup: [
    {
      kind: 'writeFile',
      path: 'app.py',
      content:
        'from flask import Flask\n\napp = Flask(__name__)\n\n\n@app.route("/")\ndef index():\n    return {"message": "Hello from BoilerBear"}\n',
      ifMissing: false,
    },
  ],
  maintainers: [],
};
