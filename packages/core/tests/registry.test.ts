import { describe, expect, it } from 'vitest';
import { RegistryValidationError, createRegistry } from '../src/index.js';
import { allFixtures, fixtureTailwind, fixtureVite } from './fixtures.js';

describe('createRegistry', () => {
  it('indexes manifests', () => {
    const reg = createRegistry(allFixtures);
    expect(reg.has('vite')).toBe(true);
    expect(reg.get('tailwindcss')?.name).toBe('Tailwind CSS');
    expect(
      reg
        .frameworks()
        .map((m) => m.id)
        .sort(),
    ).toEqual(['next', 'vite']);
    expect(
      reg
        .byCategory('components')
        .map((m) => m.id)
        .sort(),
    ).toEqual(['mui', 'shadcn-ui']);
    expect(reg.forFramework('vite').map((m) => m.id)).toContain('tailwindcss');
  });

  it('throws on duplicate ids', () => {
    expect(() => createRegistry([fixtureVite, fixtureVite])).toThrow(RegistryValidationError);
  });

  it('throws on invalid manifest with a useful path', () => {
    try {
      createRegistry([{ ...fixtureTailwind, homepage: 'not-a-url' }]);
      expect.fail('Expected createRegistry to throw');
    } catch (err) {
      expect(err).toBeInstanceOf(RegistryValidationError);
      const e = err as RegistryValidationError;
      expect(e.issues[0]?.message).toContain('homepage');
    }
  });

  it('require() throws for unknown ids', () => {
    const reg = createRegistry(allFixtures);
    expect(() => reg.require('does-not-exist')).toThrow();
  });
});
