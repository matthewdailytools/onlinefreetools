Date: 2026-09-07 11:47
Summary: `npm run build:site` failed on Missing dependency pdf-lib.min.js because many tool-lib packages were absent from node_modules; `npm install` restored them and the full site build completed.
Visibility: people

[question]
@c:\Users\matth\.cursor\projects\c-Users-matth-onlinefreetools\terminals\1.txt:942-1016

[try to solve]
## Context

`npm run build:site` stopped after chrome/image-optimizer vendor copies with:

```
Missing dependency: C:\Users\matth\onlinefreetools\node_modules\pdf-lib\dist\pdf-lib.min.js
```

The command exited 1. `merge:tools` had already succeeded (207 tools, 10 locales).

## Process

1. The error is printed by `scripts/copy-tool-libs-vendor.mjs` when the source file is missing; `build-site` copies tool libs from `node_modules` into `public/vendor/` so pages can load `/vendor/*` without a CDN.
2. `package.json` already lists `"pdf-lib": "1.17.1"`. `public/vendor/pdf-lib/pdf-lib.min.js` was already on disk (copied earlier today), so this was not a missing catalog entry or a wrong vendor path.
3. `node_modules/pdf-lib` did not exist. `npm ls --depth=0 --omit=dev` showed a larger hole: 18 production tool-lib packages were `UNMET DEPENDENCY`, including `@cantoo/pdf-lib`, `pdfjs-dist`, `html2pdf.js`, `ajv`, `xlsx`, and others. Bootstrap/jsquash were present, which is why chrome and image-optimizer copies succeeded and the failure appeared at pdf-lib (the first entry in the tool-libs copy list).
4. Ran `npm install` (added 97 packages). Confirmed `node_modules/pdf-lib/dist/pdf-lib.min.js` and `@cantoo/pdf-lib@2.9.1`.
5. Re-ran `npm run build:site`. Vendor copies, 2070 prerendered tool pages, gzip, and sitemap completed.

## Root cause / analysis

`build:site` does not use the already-committed `public/vendor` files as a fallback. `copy-tool-libs-vendor.mjs` always copies from `node_modules` and `process.exit(1)` on the first missing source. An incomplete `node_modules` (install skipped, interrupted, or pruned) therefore fails the whole site build even when the Git-tracked vendor copies are already there.

The first missing file in the copy list was pdf-lib, so the log looked like a single-package problem. It was actually a batch of unmet production dependencies.

## Solution

```bash
npm install
npm run build:site
```

After install, vendor copy logged `Copied node_modules\pdf-lib\dist\pdf-lib.min.js → public\vendor\pdf-lib\pdf-lib.min.js` and the rest of the tool libs. Full build finished with 207 tools × 10 langs, sitemap 3305 URLs, 2070 prerendered pages, 2530 gzipped HTML files.

## Notes / boundaries

- If this happens again, check `npm ls --depth=0` before changing copy scripts or package versions.
- Do not treat a committed `public/vendor/*.js` as proof that `node_modules` is complete; the copy step always re-reads `node_modules`.
- `npm audit` reported existing vulnerabilities in the tree; they were not part of this failure and were not changed.

[actions]
- Ran `npm install` (restored 18 unmet production deps including pdf-lib)
- Re-ran `npm run build:site` (success)
