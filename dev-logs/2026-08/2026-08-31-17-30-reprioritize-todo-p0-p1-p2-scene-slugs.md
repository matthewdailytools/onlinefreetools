Date: 2026-08-31 17:30
Summary: Product backlog P0/P1/P2 now uses scene-task slugs; funnel defer is not P0; pack names are chips, not URLs.

[question]
重新梳理todo的P0，P1，P2 slug

[try to solve]
Canonical queue lives in `docs/2026-08-08-tool-inventory-table.md` §0 (2026-08-31). Later table rows that still show old pack names lose to §0.

Rule: slug = the job the user is doing this visit (situation + action + result). Same job-type = one URL + chips. Platforms are one kind of situation, not the only kind. Funnel `head` / `mid_covered` never occupy attack P0.

P0 (five primary URLs; still need named brief + coverage 0b + SERP; not weekly `build`):
- `create-zip-file` — zip several files to send (Gzip as secondary mode)
- `amazon-main-image-size` — Amazon main-image size/weight (replaces `amazon-image-resizer`; marketplace pack → chips)
- `iphone-app-store-screenshot` — current iPhone App Store screenshots (replaces `ios-app-screenshot-resizer`; iPad chip)
- `apple-touch-icon` — square logo → apple-touch / favicon / PWA (replaces `favicon-and-pwa-icon-pack`)
- `open-graph-image-size` — only social P0 job type: link-share card ~1200×630 (pairs with live `open-graph-preview`)

P1 (scene slugs, pending SERP): `ios-app-icon-size`, `linkedin-banner-size`, `instagram-story-size`, `youtube-thumbnail-size`, `instagram-post-size`, `chatgpt-export-to-markdown`, `svg-optimizer`, `curl-to-fetch`, `prompt-template-builder`, `file-metadata-analyzer`.

Absorb, not extra P1 URLs: `color-converter` → live `brand-color-token-pack`; `meta-copy-length-pack` → meta preview/generator; `gzip-file` → create-zip; `extract-archive` → live `archive-extractor`. `qr-code-generator` is head → P2.

P2 includes funnel defer (`safe-paste-cleaner`, `ai-token-counter`, `vlsm-subnet-calculator`), generator heads, webmaster extras, and thin packs as chips.

Removed from the unstarted pile because they already ship: `json-schema-validator`, `unzip-file`, `archive-extractor`. Do not re-register `social-share-image-pack`, `marketplace-image-pack`, `cidr-calculator`, or `pdf-tools`.

POC first (no scene slug until proven): `local-bg-removal`, `ocr-to-text`, `audio-wav-mp3`.

[actions]
- Updated inventory §0 as the P0/P1/P2 authority
- Aligned `docs/2026-07-28-tool-direction.md` B.3 table, B6–B8 slugs, C.4/C.7/C.8, “下一步”, designer line
- Scene-slug rule H already in long-tail strategy / funnel skill / brief rules
