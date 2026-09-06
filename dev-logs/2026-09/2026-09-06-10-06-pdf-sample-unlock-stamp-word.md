Date: 2026-09-06 10:06
Summary: Fixed three remaining Chinese PDF sample crashes: unlock now decrypts with Cantoo pdf-lib, stamps fall back from CJK Helvetica, Word sample PDF uses WinAnsi-safe text.
Visibility: people

[question]
继续

## Tool links (English)
- https://onlinefreetools.org/tools/add-digital-signature-to-pdf
- https://onlinefreetools.org/tools/protect-pdf
- https://onlinefreetools.org/tools/turn-pdf-into-word-document
- https://onlinefreetools.org/tools/unlock-pdf
Chinese: https://onlinefreetools.org/zh/tools/unlock-pdf

[try to solve]
## Context
After the html2pdf.js / jsPDF wiring fix, three other Chinese PDF tools still failed on page-entry samples (2026-09-06 auto-QA): `unlock-pdf`, `add-digital-signature-to-pdf`, and `turn-pdf-into-word-document`. None of them used html2pdf. The user asked to continue those remaining failures.

## Process
1. Read the three page implementations and the zh i18n shards. Auto-QA showed generic convert/unlock errors with **no** `pageerror`, so the exceptions were caught and mapped to fallback copy.
2. **unlock-pdf.** The sample calls `doc.encrypt({ userPassword: 'sample' })` then `PDFDocument.load(bytes, { password })`. The script loaded `pdf-lib-with-encrypt`, whose `encrypt()` writes a password on save but **cannot decrypt**. Official `pdf-lib@1.17.1` documents the same gap (`EncryptedPDFError`; `ignoreEncryption: true` does not produce a usable unlocked file). `password` on `load()` was ignored, so the sample always hit `err_unlock`.
3. Switched unlock (and **protect-pdf**, so this site’s encrypt/decrypt pair share one engine) to `@cantoo/pdf-lib@2.9.1` UMD (`window.PDFLib`). Cantoo supports `load({ password })` and `encrypt()` (AES-256 by default). Probe now uses `ignoreEncryption: true` + `doc.isEncrypted`; unlock uses `load({ password })` then `save()`.
4. **add-digital-signature-to-pdf.** The stamp draws `msg.marked` with Helvetica. zh copy is「已数字标记」. pdf-lib’s WinAnsi encoder throws on any code point > 255. Same for ja / ru / ar. SHA-256 and the ISO timestamp were already ASCII. Added `winAnsiOrFallback(text, 'Digitally marked')` before `drawText`.
5. **turn-pdf-into-word-document.** `loadSample` drew `msg.sampleText` (zh:「来自 PDF 的 Word 示例句。」) with Helvetica — same WinAnsi throw, so conversion never started. Sample PDF text now falls back to `Hello Word sample from PDF.`; user-uploaded PDFs still extract CJK via pdf.js (not Helvetica).
6. Bumped `PAGES_CACHE_VERSION` 4.15 → 4.16, prerendered the four slugs, gzipped, uploaded local R2, restarted wrangler on 8788.
7. Playwright (headless Chrome, ~10s after `domcontentloaded`) on `/zh/tools/{slug}`: no danger text, download enabled, no pageerror.

## Root cause / analysis
Two unrelated bugs, both masked as「处理失败 / 解锁失败」:

| Tool | Real failure |
| --- | --- |
| unlock | Library can encrypt but not decrypt a user password |
| digital mark / PDF→Word sample | Standard 14 fonts cannot encode CJK (and other non-Latin-1) UI strings |

pdf.js was already loading; the Word and stamp pages did not need a new renderer. protect-pdf was not in the fail list, but leaving it on `pdf-lib-with-encrypt` would mean files from「保护 PDF」could not be opened on「解锁 PDF」.

## Solution
- Unlock/protect: `@cantoo/pdf-lib@2.9.1` (`https://cdn.jsdelivr.net/npm/@cantoo/pdf-lib@2.9.1/dist/pdf-lib.min.js`).
- Stamp / Word sample: skip Helvetica for non-Latin-1 strings; stamp label becomes `Digitally marked` when needed; Word sample PDF uses an English demo sentence.

Local checks (2026-09-06):

- `/zh/tools/unlock-pdf` — status「样例已就绪 — 密码为「sample」」, download on
- `/zh/tools/add-digital-signature-to-pdf` — status「完成」, SHA-256 shown, download on
- `/zh/tools/turn-pdf-into-word-document` — extracted `Hello Word sample from PDF.` + `Load sample on entry`, download on
- `/zh/tools/protect-pdf` — sample still produces `protected.pdf`

## Notes / boundaries
- Real Adobe/Acrobat encrypted files should now decrypt when the **open** password is known; this is not cracking. AES-256 from Cantoo protect-pdf is the in-house round trip. Exotic or broken encryptors can still fail with a readable error.
- The visible stamp on CJK locales is English on the PDF page; the on-page hash label stays localized. Embedding a CJK font would restore localized stamp glyphs at a large download cost.
- zh Example copy for PDF→Word still describes a Chinese sample sentence; the generated sample PDF is ASCII until that copy is revised.
- Production needs `upload:r2` + git push (`PAGES_CACHE_VERSION` 4.16).

[actions]
- `src/pages/unlockPdfPage.ts`: Cantoo pdf-lib; probe `isEncrypted`; `load({ password })`
- `src/pages/protectPdfPage.ts`: same Cantoo UMD so encrypt/decrypt match
- `src/pages/addDigitalSignatureToPdfPage.ts`: WinAnsi fallback for stamp title
- `src/pages/turnPdfIntoWordDocumentPage.ts`: WinAnsi fallback for sample PDF text
- `wrangler.jsonc`: `PAGES_CACHE_VERSION` 4.15 → 4.16
