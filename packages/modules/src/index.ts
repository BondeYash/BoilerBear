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
];

export {
  biome,
  chakraUi,
  clerk,
  eslintPrettier,
  githubActions,
  huskyLintStaged,
  jotai,
  mui,
  next,
  nextAuth,
  playwright,
  posthog,
  reactHookForm,
  reactRouter,
  reduxToolkit,
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

export { allRecipes, viteClassic, nextSaasStarter } from './recipes/index.js';
export type { Recipe } from './recipes/types.js';
