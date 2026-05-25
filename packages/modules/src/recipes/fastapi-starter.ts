import type { Recipe } from './types.js';

export const fastapiStarter: Recipe = {
  id: 'fastapi-starter',
  name: 'FastAPI Starter (uv + Ruff + pytest)',
  description: 'FastAPI + Uvicorn on uv, with Ruff linting and pytest pre-configured.',
  tags: ['python', 'fastapi', 'uv', 'api'],
  template: {
    v: 1,
    language: 'py',
    packageManager: 'uv',
    base: 'fastapi',
    modules: ['ruff', 'pytest'],
    options: {},
  },
};
