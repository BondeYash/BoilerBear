import { CodecError, type Plan, decodePlan, encodePlan } from '@boilerbear/core';

export const HASH_PARAM = 's';

export function planToHash(plan: Plan): string {
  return encodePlan(plan);
}

export function hashToPlan(hash: string): Plan | null {
  try {
    return decodePlan(hash);
  } catch (err) {
    if (err instanceof CodecError) return null;
    throw err;
  }
}

export function buildShareUrl(plan: Plan, origin: string): string {
  const hash = planToHash(plan);
  return `${origin}/s/${hash}`;
}

export function buildBuilderUrl(plan: Plan, origin?: string): string {
  const hash = planToHash(plan);
  const base = origin ?? '';
  return `${base}/builder?${HASH_PARAM}=${hash}`;
}
