Date: 2026-08-08 20:35
Summary: Implemented protect-pdf tool with browser-side password encryption, 10-locale i18n, and all gates green.

[question]
Implement full `protect-pdf` in /Users/xuli/vscodeai/onlinefreetools.

## Spec
- slug: protect-pdf, category: pdf, #59 P2
- work-tasks ready. Title: "Protect PDF — Password-Encrypt in Your Browser"
- Tech: pdf-lib@1.17.1. After load, call `pdfDoc.encrypt({ userPassword, ownerPassword: userPassword })` then save(). Reject empty password. UI: password + confirm password fields (must match).
- related: will be ["unlock-pdf","merge-pdf"] — if unlock-pdf not in catalog yet, use ["merge-pdf","organize-pdf"] temporarily; prefer unlock-pdf if exists.
- loadSample(): create 1-page sample, encrypt with password "sample", downloadable protected.pdf. Show the sample password in status/UI so user knows.
- FAQ must say this is user-password encryption, not military-grade; unlock needs the password (link narrative to unlock tool). NOT cracking.
- Privacy device+no server; 25MB soft warn

## Create catalog, icon, protectPdfPage.ts, 10 i18n full independent.

## Update 02/03 1b+2b (en,zh,es,ja), inventory #59, README

## Gates until green:
npm run merge:tools && npm run coverage:gate -- --slug=protect-pdf --phase=all && npm run build:site && npm run lint:seo && CROSS_TOOL_UPDATE=1 TOOL_SLUG=protect-pdf npm run lint:tool-isolation

Verify pdf-lib encrypt API works in the page script (PDFDocument.encrypt before save). If API differs, check pdf-lib docs — method is on PDFDocument instance: `doc.encrypt({ userPassword, ownerPassword })`.

No plan/commit. 中文 brief. Chinese comments.

[try to solve]
Shipped full `protect-pdf` with all gates green.

**Deliverables**
- New catalog shard, `protectPdfPage.ts`, icon, ten-locale i18n; `related` temporarily `merge-pdf` + `organize-pdf` (`unlock-pdf` not shipped yet).
- UI: PDF upload + password / confirm (must match; empty rejected); Protect / Download / Sample / Clear; ~25 MB soft warn.
- `loadSample()`: on enter, builds a 1-page sample encrypted with password `sample`, enables `protected.pdf` download, shows sample password in status.
- FAQ: user-password encryption, not military-grade; later unlock with known password (not cracking); privacy = device, no server upload.

**Tech note**
- Stock `pdf-lib@1.17.1` has **no** `PDFDocument.encrypt` (GitHub #1680). Page uses CDN `pdf-lib-with-encrypt@1.2.1` with the same API: `doc.encrypt({ userPassword, ownerPassword })` → `save()`.

**Docs**
- `02` → implemented; `03` 1b/2b and i18n-done; inventory #59 → shipped; README EN/ZH entries.

**Gates**
- `coverage:gate --phase=all` ✓
- `build:site` ✓
- `lint:seo` ✓
- `lint:tool-isolation` ✓

[actions]
- src/site/tool-catalog.d/protect-pdf.json
- src/pages/protectPdfPage.ts
- src/site/i18n/tools/protect-pdf/*.ts (10 locales)
- public/icons/tools/protect-pdf.svg
- work-tasks/protect-pdf/02-tool-info.md, 03-locale-briefs.md
- docs/2026-08-08-tool-inventory-table.md
- README.md
