import { type Registry, createRegistry } from '@boilerbear/core';
import { allManifests } from '@boilerbear/modules';

let cached: Registry | null = null;

export function getRegistry(): Registry {
  if (cached) return cached;
  cached = createRegistry(allManifests);
  return cached;
}
