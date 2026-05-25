import { fc, test as fcTest } from '@fast-check/vitest';
import lzString from 'lz-string';
import { describe, expect, it } from 'vitest';
import { CodecError, decodePlan, encodePlan } from '../src/index.js';
import type { Plan } from '../src/index.js';

const { compressToEncodedURIComponent } = lzString;

const validName = fc
  .stringMatching(/^[a-z0-9][a-z0-9._~-]{0,30}$/)
  .filter((s) => !s.startsWith('.') && !s.startsWith('-'));

const id = fc.stringMatching(/^[a-z][a-z0-9-]{0,20}$/);
const pm = fc.constantFrom('pnpm', 'npm', 'yarn', 'bun');

const safeOptionValue = fc.oneof(
  fc.boolean(),
  fc.string({ maxLength: 32 }),
  fc.integer({ min: -1000, max: 1000 }),
);

const planArb: fc.Arbitrary<Plan> = fc.record({
  v: fc.constant(1 as const),
  projectName: validName,
  language: fc.constant('js' as const),
  packageManager: pm,
  base: id,
  modules: fc.array(id, { maxLength: 12 }),
  options: fc.dictionary(id, fc.dictionary(id, safeOptionValue)),
});

describe('plan codec', () => {
  it('round-trips a simple plan', () => {
    const plan: Plan = {
      v: 1,
      projectName: 'my-app',
      language: 'js',
      packageManager: 'pnpm',
      base: 'vite',
      modules: ['tailwindcss', 'shadcn-ui'],
      options: { tailwindcss: { forms: true } },
    };
    expect(decodePlan(encodePlan(plan))).toEqual(plan);
  });

  it('produces a reasonably short hash for a 10-module plan', () => {
    const plan: Plan = {
      v: 1,
      projectName: 'my-app',
      language: 'js',
      packageManager: 'pnpm',
      base: 'vite',
      modules: Array.from({ length: 10 }, (_, i) => `m-${i}`),
      options: {},
    };
    const hash = encodePlan(plan);
    expect(hash.length).toBeLessThan(400);
  });

  it('round-trips a Python plan with language preserved', () => {
    const plan: Plan = {
      v: 1,
      projectName: 'svc',
      language: 'py',
      packageManager: 'uv',
      base: 'fastapi',
      modules: ['ruff', 'pytest'],
      options: {},
    };
    expect(decodePlan(encodePlan(plan))).toEqual(plan);
  });

  it('throws CodecError on empty hash', () => {
    expect(() => decodePlan('')).toThrow(CodecError);
  });

  it('throws CodecError on garbage', () => {
    expect(() => decodePlan('!@#$%')).toThrow(CodecError);
  });

  it('throws CodecError when decompressed payload is not JSON', () => {
    const bad = compressToEncodedURIComponent('this is { not json');
    expect(() => decodePlan(bad)).toThrow(CodecError);
  });

  it('throws CodecError when decoded JSON fails Plan validation', () => {
    const bad = compressToEncodedURIComponent(JSON.stringify({ v: 1, projectName: 'X' }));
    expect(() => decodePlan(bad)).toThrow(CodecError);
  });

  fcTest.prop([planArb])('round-trips arbitrary valid plans', (plan) => {
    const decoded = decodePlan(encodePlan(plan));
    expect(decoded).toEqual(plan);
  });

  // Captured 2026-05-25 from the live builder for plan:
  //   { v:1, projectName:'my-app', packageManager:'pnpm', base:'vite',
  //     modules:['tailwindcss','shadcn-ui'], options:{tailwindcss:{forms:true}} }
  // This hash must keep decoding to the same plan and re-encoding to the same hash
  // forever — Phase 2 introduces Plan.language with default 'js', and the encoder
  // strips the field before stringify to preserve byte-identity for JS plans.
  const FROZEN_HASH =
    'N4IgbiBcCMA0IAcBOB7AVgUwMYBcByAhgLYZQhECeAtAQgiPAgVgNYEDmGAsgQHYcYkZBLwREGIAEYEAzqUjgAljlLwiKACYBXADYYZUANogcBRToDui3hqwyD8GQAsCt3lS2KQAXXgoEOIoovAaQoKbmVjZ2oaAAZihIRKE4SFoYAL5ZQA';
  const FROZEN_PLAN: Plan = {
    v: 1,
    projectName: 'my-app',
    language: 'js',
    packageManager: 'pnpm',
    base: 'vite',
    modules: ['tailwindcss', 'shadcn-ui'],
    options: { tailwindcss: { forms: true } },
  };

  it('decodes a captured production hash to the expected plan', () => {
    expect(decodePlan(FROZEN_HASH)).toEqual(FROZEN_PLAN);
  });

  it('re-encodes the captured plan to the byte-identical hash', () => {
    expect(encodePlan(FROZEN_PLAN)).toBe(FROZEN_HASH);
  });
});
