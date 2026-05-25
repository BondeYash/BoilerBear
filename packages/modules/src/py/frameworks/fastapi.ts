import type { ModuleManifest } from '@boilerbear/core';

export const fastapi: ModuleManifest = {
  id: 'fastapi',
  name: 'FastAPI',
  category: 'framework',
  tags: ['python', 'api', 'asgi'],
  description: 'High-performance Python web framework for building APIs with type hints.',
  homepage: 'https://fastapi.tiangolo.com',
  license: 'MIT',
  popularity: 70_000_000,
  languages: ['py'],
  versions: { range: '^0.115.0', min: '0.115.0' },
  packages: {
    deps: [
      { name: 'fastapi', version: '^0.115.0' },
      { name: 'uvicorn', version: '^0.32.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [{ id: 'pytest' }, { id: 'ruff' }],
  appliesTo: [],
  framework: {
    template: 'fastapi-uv',
    createCommand: 'uv init {name}',
  },
  setup: [
    {
      kind: 'writeFile',
      path: 'app/main.py',
      content:
        'from fastapi import FastAPI\n\napp = FastAPI()\n\n\n@app.get("/")\ndef read_root():\n    return {"message": "Hello from BoilerBear"}\n',
      ifMissing: false,
    },
  ],
  maintainers: [],
};
