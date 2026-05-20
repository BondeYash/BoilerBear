import type { Plan } from '@boilerbear/core';

/**
 * A Recipe is a named, opinionated bundle of modules that the UI can apply as
 * a single click. It produces a Plan template — the user can still edit before
 * generating the install command.
 */
export interface Recipe {
  id: string;
  name: string;
  description: string;
  tags: ReadonlyArray<string>;
  template: Omit<Plan, 'projectName'>;
}
