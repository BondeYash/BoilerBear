# ADR 0001 — No backend in Phase 1

- **Status:** Accepted
- **Date:** 2026-01-12
- **Deciders:** core maintainers

## Context

BoilerBear is a stack picker. The output is a deterministic shell command. A common shape for "share-a-config" tools is to back them with a database — plans get a numeric id, a cloud DB stores the spec, the URL is a short token. That model adds:

- An ongoing operational cost (DB, auth, backups, abuse mitigation).
- An account requirement (or at least anonymous-user tracking).
- A trust requirement on the operator (your plan lives on someone else's server).
- Drift between what's stored and what the open-source repo defines as the canonical schema.

For Phase 1 — the open-source launch — we wanted to ship as fast as possible, with zero infra cost, and with the absolute minimum trust footprint. Plans are public, small, and structured. They compress well. The full builder workload (resolver + emitter) fits in a sub-100 KB browser bundle.

## Decision

**Phase 1 ships with no backend.** All state is encoded in the URL:

- `/builder?s=<hash>` — editable builder, hash is the encoded plan.
- `/s/<hash>` — read-only share view, decoded server-side by a Next.js server component.
- `/og/<hash>` — OG card, also pure derivation.
- `npx @boilerbear/cli@latest run <hash>` — decodes the same hash locally.

The hash is `lz-string.compressToEncodedURIComponent(JSON.stringify(plan))`. Zod re-validates after decode. There is no database, no auth, no session, no env vars.

Concretely:

- Deploy: static + edge-rendered Next.js on Vercel free tier. No DB connection string.
- Cost: zero, modulo CDN egress.
- Privacy: the operator never sees a user's plan unless the user pastes the URL into a telemetry endpoint — and Phase 1 has none.

## Consequences

**Good:**
- Anyone can fork and self-host with `pnpm build && pnpm start`.
- The web app and the CLI agree by construction — both call `decodePlan` from `@boilerbear/core`.
- No accounts means no rate-limiting, no abuse vectors beyond standard CDN-level protections.
- The schema in `@boilerbear/core` is the single source of truth. Versioning is explicit (`v: 1` field) and migrations live in code, not in DB migrations.

**Bad:**
- No analytics on which stacks are popular without separate, opt-in telemetry (deferred to Phase 2).
- Users can't browse plans they didn't author — they need the link.
- Short URLs require a separate URL shortener (deferred; long URLs are fine).
- "Save my plan for later" requires the user to bookmark or paste the URL.

**Mitigated:**
- Plans are small. A 10-module plan is < 400 chars. Modern browsers and Slack handle them fine.
- The OG card route makes shared URLs preview nicely on social platforms despite their length.
- Phase 2 adds optional accounts and saved plans **on top of** the URL mode, not as a replacement.

## Alternatives considered

1. **Postgres + a numeric id.** Rejected for Phase 1 — operational drag for a problem we don't have yet.
2. **GitHub Gists as the store.** Rejected — requires the user to be logged in, and Gists rate-limit anonymous reads.
3. **Local-only state.** Rejected — sharing is a core use case from day one.

## Revisit

Re-open this when one of the following becomes true:
- Plan size routinely exceeds 1 KB (multiselect option explosion).
- We need server-side rate-limiting against scraper bots.
- Phase 2 ships accounts and requires shared infra anyway.
