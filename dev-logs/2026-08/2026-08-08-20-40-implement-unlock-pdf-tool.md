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
已完成 **unlock-pdf**（清单 #60）全量实现，所有门禁通过。

**产品红线**
- 仅支持**已知打开密码**去保护；十语 FAQ q1 均明确「非破解 / 非暴力猜密 / 不恢复遗忘密码」。
- 错密、空密（文件需要时）、未加密 PDF 均有明确错误提示。

**技术**
- 页面 `src/pages/unlockPdfPage.ts`：CDN `pdf-lib-with-encrypt@1.2.1`（与 protect-pdf 同源）。
- 解锁：`PDFDocument.load(bytes, { password, ignoreEncryption: false })` → `save()` 输出 `unlocked.pdf`。
- 进页 `loadSample()`：生成 password=`sample` 的单页加密 PDF → 自动填密 → 解锁 → 启用下载。

**交付物**
- `src/site/tool-catalog.d/unlock-pdf.json`；`protect-pdf.json` related 改为 `unlock-pdf, merge-pdf`。
- `public/icons/tools/unlock-pdf.svg`；十语 `src/site/i18n/tools/unlock-pdf/*.ts`。
- `work-tasks/unlock-pdf/03-locale-briefs.md` 补 1b+2b；inventory #60 标已上线；README 中英条目。

**门禁**
- `coverage:gate --phase=all` ✓
- `build:site` ✓（sitemap 600 URL）
- `lint:seo` ✓
- `CROSS_TOOL_UPDATE=1 TOOL_SLUG=unlock-pdf lint:tool-isolation` ✓

[actions]
- src/site/tool-catalog.d/unlock-pdf.json, protect-pdf.json
- src/pages/unlockPdfPage.ts
- src/site/i18n/tools/unlock-pdf/*.ts (10 locales)
- public/icons/tools/unlock-pdf.svg
- work-tasks/unlock-pdf/03-locale-briefs.md
- docs/2026-08-08-tool-inventory-table.md, README.md
