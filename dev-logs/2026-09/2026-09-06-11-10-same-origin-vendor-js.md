Date: 2026-09-06 11:10
Summary: Tool-page JavaScript now ships from git-tracked `/vendor/*` Assets; pages no longer load jsDelivr or cdnjs, and Cursor rules plus `lint:vendor` enforce that.
Visibility: people

[question]
本站使用的js存储到asset，页面全部引用本站的js，并将这个写入到规则中

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-to-pdf
- https://onlinefreetools.org/tools/unlock-pdf
- https://onlinefreetools.org/tools/image-exif
Chinese: https://onlinefreetools.org/zh/tools/convert-html-to-pdf

[try to solve]
## Context
Tool pages used to load browser libraries (pdf-lib, pdf.js, html2pdf, jsZip, Ajv, and others) from public CDNs. That failed on restricted networks, made privacy FAQ copy say “libraries may load from a CDN,” and did not match the existing same-origin chrome vendor pattern (`public/vendor/bootstrap`, fonts, jsquash). Cloudflare Git deploys do not run the local `predeploy` copy step, so anything the HTML references under `/vendor/*` must be committed.

## Process
1. Pinned the former CDN versions in `package.json` and added `scripts/copy-tool-libs-vendor.mjs` (`npm run vendor:tool-libs`) to copy (or esbuild-bundle Ajv) into `public/vendor/{lib}/`.
2. Replaced every jsDelivr / cdnjs / unpkg `<script>` and `import()` in `src/pages` with `/vendor/...`. Cloudflare Turnstile stays on `challenges.cloudflare.com` because it is a live challenge service.
3. Downloaded flipbook HTML now points at `https://onlinefreetools.org/vendor/pdfjs/*` so a saved file still loads first-party scripts instead of a CDN.
4. Wired the copy script into `build:site` and `start:dev --no-build`. Extended `lint:vendor` with required tool-lib paths and a scan of `src/pages` / `src/site` for CDN hosts.
5. Wrote the rule into `project-core.mdc`, `cloudflare-workflow.mdc`, `tool-creation.mdc` (same-origin JS section + checklist), `tool-i18n-localization.mdc` (FAQ must not claim CDN library loads), and the Copilot summary.
6. Corrected tool i18n shards that said libraries load from a CDN. Left “CDN” where it means a user’s CDN (DNS scheme, Cache-Control, ETags).
7. Bumped `PAGES_CACHE_VERSION` to 4.21, ran `build:site`, uploaded local R2, and smoke-tested convert-html-to-pdf plus unlock-pdf: vendor URLs 200, no jsDelivr requests, samples completed.

## Root cause / analysis
Same-origin chrome was already required because Git-connected Cloudflare deploys have no local `predeploy`. Tool libraries were the remaining hole: HTML pointed at CDNs, so a blocked jsDelivr request looked like a broken tool, and privacy copy over-disclosed a third-party fetch that is no longer true.

## Solution
Browser libraries live under `public/vendor/` (git-tracked Assets). Pages reference `/vendor/*`. New libraries: pin in `package.json` → register in `copy-tool-libs-vendor.mjs` → copy → commit. Gate: `npm run lint:vendor`.

## Notes / boundaries
- Exception: Turnstile. Microsoft Clarity in layout is analytics, not a tool library.
- `dev-logs/viewer.html` / `dev-logs/index.html` still use CDN Bootstrap for local `file://` viewing; they are not production pages.
- pdf.js currently vendors `pdf.min.mjs` and `pdf.worker.min.mjs` only. If a tool later needs cmaps or wasm extras, copy those next to `/vendor/pdfjs/`.
- Vendor binaries must be committed before Git deploy, or production `/vendor/*` 404s.

[actions]
- Added `scripts/copy-tool-libs-vendor.mjs` and `npm run vendor:tool-libs`
- Replaced CDN URLs in `src/pages` with `/vendor/*`
- Extended `scripts/validate-vendor-tracked.mjs`, `scripts/build-site.mjs`, `ops/dev/start-dev.mjs`
- Updated `.cursor/rules/project-core.mdc`, `cloudflare-workflow.mdc`, `tool-creation.mdc`, `tool-i18n-localization.mdc`
- Corrected FAQ copy in `src/site/i18n/tools/*` (not DNS/CDN-product wording)
- Set `PAGES_CACHE_VERSION` to 4.21
