Date: 2026-08-08 20:40
Summary: Implemented unlock-pdf tool (#60) with known-password-only unlock, 10-locale i18n, and all gates green.

[question]
Implement full `unlock-pdf` in /Users/xuli/vscodeai/onlinefreetools.

## Spec (CRITICAL product red lines)
- slug: unlock-pdf, category: pdf, #60
- Title: "Unlock PDF — Remove Password You Already Know"
- **NOT cracking / brute force / recover unknown passwords.** FAQ must say this clearly in all locales.
- Tech: Use CDN `pdf-lib@1.17.1` OR same `pdf-lib-with-encrypt@1.2.1` as protect-pdf if needed for compatibility. Load with `PDFDocument.load(bytes, { password, ignoreEncryption: false })`, then `save()` to produce an unencrypted copy. Wrong password → clear error. Empty password rejected if file needs one.
- Note: protect-pdf uses `https://cdn.jsdelivr.net/npm/pdf-lib-with-encrypt@1.2.1/dist/pdf-lib.min.js` — for unlock sample, create encrypted PDF with that same library then unlock with password, so sample works end-to-end.
- related: ["protect-pdf","merge-pdf"]
- Also update protect-pdf.json related to ["unlock-pdf","merge-pdf"]
- loadSample(): generate encrypted 1-page PDF with password "sample" (show password in UI), auto-fill password field, unlock, enable Download unlocked.pdf
- Privacy device+no server; 25MB soft warn

## Create catalog, icon, unlockPdfPage.ts, 10 i18n (stress "known password" / 非破解 in titles/FAQ).

## Update 02/03 1b+2b (en,zh,es,ja), inventory #60, README

## Gates until green:
npm run merge:tools && npm run coverage:gate -- --slug=unlock-pdf --phase=all && npm run build:site && npm run lint:seo && CROSS_TOOL_UPDATE=1 TOOL_SLUG=unlock-pdf npm run lint:tool-isolation

No plan/commit. 中文 brief. Chinese comments.

[try to solve]
Shipped full **unlock-pdf** (inventory #60); all gates passed.

**Product red lines**
- Only removes protection with a **known open password**; ten-locale FAQ q1 states no cracking / brute force / recovery of forgotten passwords.
- Wrong password, empty password (when required), and already-unencrypted PDFs get clear errors.

**Tech**
- Page `src/pages/unlockPdfPage.ts`: CDN `pdf-lib-with-encrypt@1.2.1` (same as protect-pdf).
- Unlock: `PDFDocument.load(bytes, { password, ignoreEncryption: false })` → `save()` → `unlocked.pdf`.
- On-enter `loadSample()`: builds single-page PDF with password=`sample` → auto-fills password → unlocks → enables download.

**Deliverables**
- `src/site/tool-catalog.d/unlock-pdf.json`; `protect-pdf.json` related set to `unlock-pdf, merge-pdf`.
- `public/icons/tools/unlock-pdf.svg`; ten-locale `src/site/i18n/tools/unlock-pdf/*.ts`.
- `work-tasks/unlock-pdf/03-locale-briefs.md` 1b+2b; inventory #60 marked shipped; README EN/ZH entries.

**Gates**
- `coverage:gate --phase=all` ✓
- `build:site` ✓ (sitemap 600 URLs)
- `lint:seo` ✓
- `CROSS_TOOL_UPDATE=1 TOOL_SLUG=unlock-pdf lint:tool-isolation` ✓

[actions]
- src/site/tool-catalog.d/unlock-pdf.json, protect-pdf.json
- src/pages/unlockPdfPage.ts
- src/site/i18n/tools/unlock-pdf/*.ts (10 locales)
- public/icons/tools/unlock-pdf.svg
- work-tasks/unlock-pdf/03-locale-briefs.md
- docs/2026-08-08-tool-inventory-table.md, README.md
