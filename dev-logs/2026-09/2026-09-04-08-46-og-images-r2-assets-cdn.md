Date: 2026-09-04 08:46
Summary: Tool OG bitmaps now live on the public R2 bucket `assets` at `https://assets.onlinefreetools.org/og/tools/{slug}.webp`; GitHub→Cloudflare no longer ships those files as Worker Assets.
Visibility: people

[question]
已经在R2上创建assets桶，并将assets.onlinefreetools.org指向这个存储，创建脚本，将 public/og/tools 的图片upload上去，并将页面图片访问链接进行同步修改.同时在同步到github后，不要将这些图片同步到cloudflare上。

[try to solve]
## Context
Per-slug SERP/OG screenshots already live in `public/og/tools/*.webp` and were previously destined for Worker Static Assets (`https://onlinefreetools.org/og/tools/…`). The operator created a dedicated R2 bucket `assets` with custom domain `assets.onlinefreetools.org` so those bitmaps can stay in Git as source, be served from R2, and **not** be bundled into the GitHub → Cloudflare Worker Assets deploy.

## Process
1. Reused the existing R2 S3 client (`scripts/lib/r2-s3-client.mjs`) and added optional `CacheControl` on `PutObject`.
2. Added `scripts/upload-r2-og-assets.mjs` + npm scripts `upload:r2:og` / `upload:r2:og:full`. Object keys match the public path: `og/tools/{slug}.webp` → `https://assets.onlinefreetools.org/og/tools/{slug}.webp`. Incremental uploads compare sha256 against `_meta/og-tools-manifest.json` (and local `.cache/og-tools-upload.json`). Dry-run does **not** write that local manifest.
3. Pointed page URLs at the CDN in `src/pages/site/ogImage.ts` (`OG_ASSETS_BASE_URL`). Visible `<img>`, `og:image` / `twitter:image`, and JSON-LD already go through `resolveToolOgImageUrl`, so they stay on the same absolute URL. `organize-pdf` no longer strips the apex host to a same-origin path.
4. Excluded the directory from Worker Assets with `og/tools/` in `public/.assetsignore`. Files remain Git-tracked (capture source); Cloudflare’s Git deploy skips them the same way it skips `_pages/`.
5. Hooked OG upload into `npm run deploy` (after HTML `upload:r2`).
6. First S3 `PutObject` to bucket `assets` returned **403** because the existing R2 API token is scoped to `onlinefreetools-pages`. `wrangler r2 object put --remote` succeeded (account OAuth). The script now probes S3 once and falls back to wrangler (concurrency capped at 6).
7. Uploaded 74 images. Live check: `GET https://assets.onlinefreetools.org/og/tools/merge-pdf.webp` → **200**, `content-type: image/webp`, `cache-control: public, max-age=2592000`. Resolver check: `merge-pdf` → CDN URL; unknown slug → apex `og-image.png`.

## Root cause / analysis
Worker Assets are sized by the Git-connected deploy of `public/` minus `.assetsignore`. OG screenshots are large, change independently of Worker code, and already have a public custom domain on a separate bucket — they belong on that bucket, not in the Worker asset bundle.

S3 vs wrangler: HTML upload uses an R2 S3 token often limited to `onlinefreetools-pages`. The new public bucket needs the same token’s **Object Read & Write** (or the wrangler fallback). Expanding the token is the fast path; wrangler is the working path today.

Do **not** gitignore `public/og/tools/`: the request was “after syncing to GitHub, do not sync these images to Cloudflare”, which is `.assetsignore`, not omitting the files from the repo.

## Solution
| Piece | Behavior |
|---|---|
| Source | `public/og/tools/{slug}.webp` stays in Git |
| Cloudflare Worker Assets | Excluded via `public/.assetsignore` → `og/tools/` |
| Public URL | `https://assets.onlinefreetools.org/og/tools/{slug}.webp` |
| Upload | `npm run upload:r2:og` (S3, wrangler fallback on 403) |
| Page wiring | `resolveToolOgImageUrl` / layout / JSON-LD / visible `<img>` |
| Default fallback | Apex `https://onlinefreetools.org/og-image.png` (still Assets) |

Ship HTML after this change: `npm run build:site` then `npm run upload:r2` **before** `git push`. Otherwise prerendered pages still point at `/og/tools/` on the apex host, and that path 404s once `.assetsignore` is live.

## Notes / boundaries
- Grant the R2 S3 token Read & Write on bucket `assets` to drop the wrangler fallback (`ops/worker-r2-ops.md` §3.2).
- Same-key image replacements may stay at the edge for up to 30 days (`max-age=2592000`); purge the custom-domain cache or wait.
- Local `wrangler dev` will not serve `/og/tools/` from Assets; tool pages load the production CDN URL.
- `_meta/og-tools-manifest.json` is also on the public bucket (filenames + hashes only).

[actions]
- Added `scripts/upload-r2-og-assets.mjs`; npm `upload:r2:og` / `upload:r2:og:full`; deploy runs OG upload after HTML
- Updated `src/pages/site/ogImage.ts`, `organizePdfPage.ts`, `scripts/lib/r2-s3-client.mjs`, `public/.assetsignore`
- Documented in `ops/worker-r2-ops.md` §3.2, `docs/worker+R2架构/design.md`, `cloudflare-workflow.mdc`, SERP image plan
- Uploaded 74 objects to R2 bucket `assets` (wrangler fallback)
