import type { ModuleManifest } from '@boilerbear/core';

import { posthog } from './analytics/posthog.js';
import { clerk } from './auth/clerk.js';
import { nextAuth } from './auth/next-auth.js';
import { githubActions } from './ci/github-actions.js';
import { chakraUi } from './components/chakra-ui.js';
import { mui } from './components/mui.js';
import { shadcnUi } from './components/shadcn-ui.js';
import { swr } from './data/swr.js';
import { tanstackQuery } from './data/tanstack-query.js';
import { next } from './frameworks/next.js';
import { vite } from './frameworks/vite.js';
import { biome } from './lint/biome.js';
import { eslintPrettier } from './lint/eslint-prettier.js';
import { huskyLintStaged } from './lint/husky-lint-staged.js';
import { reactHookForm } from './misc/react-hook-form.js';
import { zod } from './misc/zod.js';
import { django } from './py/frameworks/django.js';
import { fastapi } from './py/frameworks/fastapi.js';
import { flask } from './py/frameworks/flask.js';
import { litestar } from './py/frameworks/litestar.js';
import { black } from './py/lint/black.js';
import { ruff } from './py/lint/ruff.js';
import { pytest } from './py/testing/pytest.js';
import { reactRouter } from './routing/react-router.js';
import { jotai } from './state/jotai.js';
import { reduxToolkit } from './state/redux-toolkit.js';
import { zustand } from './state/zustand.js';
import { playwright } from './testing/playwright.js';
import { testingLibrary } from './testing/testing-library.js';
import { vitestModule } from './testing/vitest.js';
import { sass } from './ui/sass.js';
import { tailwindcss } from './ui/tailwindcss.js';

export const allManifests: ReadonlyArray<ModuleManifest> = [
  vite,
  next,
  tailwindcss,
  sass,
  shadcnUi,
  mui,
  chakraUi,
  zustand,
  reduxToolkit,
  jotai,
  tanstackQuery,
  swr,
  reactRouter,
  vitestModule,
  playwright,
  testingLibrary,
  biome,
  eslintPrettier,
  huskyLintStaged,
  clerk,
  nextAuth,
  githubActions,
  posthog,
  zod,
  reactHookForm,
  // Python
  fastapi,
  django,
  flask,
  litestar,
  ruff,
  black,
  pytest,
];

export {
  biome,
  black,
  chakraUi,
  clerk,
  django,
  eslintPrettier,
  fastapi,
  flask,
  githubActions,
  huskyLintStaged,
  jotai,
  litestar,
  mui,
  next,
  nextAuth,
  playwright,
  posthog,
  pytest,
  reactHookForm,
  reactRouter,
  reduxToolkit,
  ruff,
  sass,
  shadcnUi,
  swr,
  tailwindcss,
  tanstackQuery,
  testingLibrary,
  vite,
  vitestModule,
  zod,
  zustand,
};

export {
  allRecipes,
  djangoStarter,
  fastapiStarter,
  nextSaasStarter,
  viteClassic,
} from './recipes/index.js';
export type { Recipe } from './recipes/types.js';
