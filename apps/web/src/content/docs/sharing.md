---
title: How sharing works
description: Plans encoded entirely in the URL — no backend, no database.
order: 2
---

# How sharing works

BoilerBear has no backend in Phase 1. Plans travel as URL parameters and decode deterministically on the client and the share view server component. This page explains the trade-offs.

## The encoding pipeline

A `Plan` is a TypeScript object:

```ts
{
  v: 1,
  projectName: 'my-app',
  packageManager: 'pnpm',
  base: 'vite',
  modules: ['tailwindcss', 'shadcn-ui'],
  options: { tailwindcss: { forms: true } },
}
```

To produce a share link the builder runs:

1. `Plan.parse(plan)` — Zod-validates the shape.
2. `JSON.stringify(plan)` — canonical JSON form.
3. `lz-string` compression with `compressToEncodedURIComponent` — produces a URL-safe string.

The hash goes onto the URL as `?s=<hash>` (in the builder) or `/s/<hash>` (the share view).

Decoding is the reverse — decompress, parse JSON, validate again with Zod. If validation fails you get a 404 on the share view, or a no-op on the builder.

A typical 10-module plan compresses to ~300 characters — well below any modern browser's URL limit.

## Two routes, one source of truth

| Route | Purpose | Rendering |
|-------|---------|-----------|
| `/builder?s=<hash>` | Editable wizard. Loads the plan on mount; URL is rewritten as you edit (debounced 250ms). | Client + Suspense |
| `/s/<hash>` | Read-only summary + install command + OG image. | Server component |
| `/og/<hash>` | Open Graph card (1200×630). | Edge runtime, `next/og` |

The server route does **not** call a database. It decodes the hash and rebuilds the plan using the same `@boilerbear/core` package the browser uses. There is no persistent store.

## Why no backend in Phase 1

- **Zero infra** — Vercel free tier or any static-friendly host.
- **No accounts to manage** — share what you want; tracking is impossible without the recipient.
- **Easy forks** — anyone can run BoilerBear locally with no env vars.
- **Deterministic** — same hash → same plan, forever. No drift.

The trade-off is that you can't reference a plan you didn't author yourself — you need the link. Phase 2 introduces optional accounts, saved plans, and team templates without removing the URL-encoded mode.

## What's in the hash

Only:

- Project name
- Package manager
- Base framework id
- Module ids
- Per-module option values

What's **not** in the hash:

- Source code, secrets, env vars.
- Anything about the visitor (no auth, no analytics tied to the plan).
- The exact dependency versions installed at run-time — those resolve when you actually run the install command on your machine.

## Versioning

The plan schema includes `v: 1`. When we evolve the format, decoders will look at this and migrate. Plans authored today will keep working.
