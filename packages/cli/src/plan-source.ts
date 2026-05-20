import { readFile } from 'node:fs/promises';
import { CodecError, Plan, decodePlan } from '@boilerbear/core';
import { allRecipes } from '@boilerbear/modules';

export interface PlanSourceArgs {
  hash?: string;
  recipe?: string;
  planPath?: string;
}

export class PlanSourceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PlanSourceError';
  }
}

/**
 * Resolve a Plan from one of: --hash, --recipe, --plan <path>, or a positional argument
 * (which is treated as a hash). Exactly one source must be provided.
 */
export async function loadPlan(args: PlanSourceArgs): Promise<Plan> {
  const sources = [args.hash, args.recipe, args.planPath].filter((s) => s !== undefined);
  if (sources.length === 0) {
    throw new PlanSourceError(
      'No plan source provided. Pass a share hash, --recipe <id>, or --plan <path>.',
    );
  }
  if (sources.length > 1) {
    throw new PlanSourceError('Provide only one of: <hash>, --recipe <id>, --plan <path>.');
  }

  if (args.recipe) {
    const recipe = allRecipes.find((r) => r.id === args.recipe);
    if (!recipe) {
      const ids = allRecipes.map((r) => r.id).join(', ');
      throw new PlanSourceError(`Recipe "${args.recipe}" not found. Available: ${ids || '(none)'}`);
    }
    return { ...recipe.template, projectName: 'my-app' };
  }

  if (args.planPath) {
    let raw: string;
    try {
      raw = await readFile(args.planPath, 'utf8');
    } catch (err) {
      throw new PlanSourceError(
        `Could not read plan file "${args.planPath}": ${(err as Error).message}`,
      );
    }
    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch (err) {
      throw new PlanSourceError(`Plan file is not valid JSON: ${(err as Error).message}`);
    }
    const result = Plan.safeParse(parsed);
    if (!result.success) {
      throw new PlanSourceError(`Plan failed validation: ${result.error.message}`);
    }
    return result.data;
  }

  try {
    return decodePlan(args.hash as string);
  } catch (err) {
    if (err instanceof CodecError) {
      throw new PlanSourceError(`Could not decode share hash: ${err.message}`);
    }
    throw err;
  }
}
