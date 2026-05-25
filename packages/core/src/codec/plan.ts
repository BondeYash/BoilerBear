import lzString from 'lz-string';
import { Plan } from '../schema/plan.js';

const { compressToEncodedURIComponent, decompressFromEncodedURIComponent } = lzString;

export class CodecError extends Error {
  readonly code: 'decode' | 'parse';
  constructor(code: 'decode' | 'parse', message: string, cause?: unknown) {
    super(message);
    this.code = code;
    this.name = 'CodecError';
    if (cause !== undefined) this.cause = cause;
  }
}

/** Encode a Plan to a URL-safe string. Output is base64url-ish (lz-string EncodedURIComponent). */
export function encodePlan(plan: Plan): string {
  const validated = Plan.parse(plan);
  // Strip the default `language: 'js'` so JS plans hash byte-identical to pre-Phase-2
  // payloads. Decode unaffected: Zod re-applies the default when the field is absent.
  const minimal: Record<string, unknown> = { ...validated };
  if (minimal.language === 'js') {
    minimal.language = undefined;
  }
  const json = JSON.stringify(minimal);
  return compressToEncodedURIComponent(json);
}

/** Decode and validate a Plan from an encoded URL string. */
export function decodePlan(hash: string): Plan {
  if (typeof hash !== 'string' || hash.length === 0) {
    throw new CodecError('decode', 'Empty hash.');
  }
  const json = decompressFromEncodedURIComponent(hash);
  if (json === null || json === '') {
    throw new CodecError('decode', 'Invalid or corrupt plan hash.');
  }
  let raw: unknown;
  try {
    raw = JSON.parse(json);
  } catch (err) {
    throw new CodecError('decode', 'Decoded payload is not valid JSON.', err);
  }
  const result = Plan.safeParse(raw);
  if (!result.success) {
    throw new CodecError('parse', `Plan failed validation: ${result.error.message}`, result.error);
  }
  return result.data;
}
