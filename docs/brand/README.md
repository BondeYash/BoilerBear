# BoilerBear Brand Kit

## Mark

The BoilerBear mark is a single rounded square that reads two ways:

- **Bear** — two ear circles, two dot eyes, friendly silhouette.
- **Terminal prompt** — `>` chevron + blinking cursor block inside a window.

This dual reading is the whole point. Do not redraw it as a mascot illustration. Do not add fur, teeth, or expressions. The strength of the mark is geometric calm.

### Files

| File | Use |
|------|-----|
| [`apps/web/public/brand/mark.svg`](../../apps/web/public/brand/mark.svg) | Primary mark on light surfaces |
| [`apps/web/public/brand/mark-inverse.svg`](../../apps/web/public/brand/mark-inverse.svg) | Mark on dark surfaces |
| [`apps/web/public/brand/logo-horizontal.svg`](../../apps/web/public/brand/logo-horizontal.svg) | Site header, README, slides |
| [`apps/web/public/brand/logo-stacked.svg`](../../apps/web/public/brand/logo-stacked.svg) | OG cards, hero, app loader |
| [`apps/web/src/app/icon.svg`](../../apps/web/src/app/icon.svg) | Next.js auto favicon |

## Color tokens

| Token | Hex | Role |
|-------|-----|------|
| Cocoa | `#2A1F1A` | Primary fur, dark surfaces |
| Honey | `#F5A524` | Accent (`>` chevron, inner ears) |
| Mint  | `#5EE2C5` | Cursor block — used **only** for the cursor |
| Cream | `#FAF6EE` | Eyes, light backgrounds, inverse fur |
| Ink   | `#0F1115` | Wordmark on light bg |

Mint is intentionally scarce. The cursor is the only place it appears in the mark — keep it that way. If everything is highlighted, nothing is.

## Typography

| Role | Family | Weight | Tracking |
|------|--------|--------|----------|
| Wordmark | Geist Sans (fallback: Inter Tight, Inter) | 700 | `-0.04em` |
| Tagline / code | JetBrains Mono | 500 | `0` |

Wordmark is always lowercase. `boilerbear` set as one word with no space and no camel-case.

## Clear space & sizing

- Reserve clear space ≥ ¼ the mark's width on every side.
- Minimum mark size: 16px (favicon). The chevron stroke and cursor block were tuned to remain legible at that size.
- Minimum horizontal lockup: 120px wide.

## Don'ts

- No drop shadows, gradients, or 3D effects on the mark.
- No rotation, skew, or stretching.
- No outline-only treatments. The mark is solid by design.
- No replacing the mint cursor with another color — that's the trademark beat.
- No mascot bear illustrations. The mark *is* the bear.

## When to use what

| Context | Asset |
|---------|-------|
| App header, GitHub README header | `logo-horizontal.svg` |
| OG / social cards, hero block | `logo-stacked.svg` |
| Avatar, favicon, embed in product UI | `mark.svg` / `mark-inverse.svg` |
| Browser tab | `apps/web/src/app/icon.svg` (auto via Next.js) |
