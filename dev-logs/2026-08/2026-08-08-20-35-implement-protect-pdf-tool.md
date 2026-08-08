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
已完成 `protect-pdf` 全量实现并通过全部门禁。

**交付要点**
- 新增 catalog 分片、`protectPdfPage.ts`、图标、十语 i18n；`related` 暂为 `merge-pdf` + `organize-pdf`（unlock-pdf 尚未上线）。
- UI：PDF 上传 + 密码/确认密码（须一致、拒绝空密码）；Protect / Download / Sample / Clear；~25MB 软警告。
- `loadSample()`：进页自动生成 1 页样例，用密码 `sample` 加密，启用 `protected.pdf` 下载，状态行显示样例密码。
- FAQ：强调用户密码加密、非军用级、后续用 unlock 工具+已知密码打开（非破解）；隐私=device+不上服务器。

**技术说明**
- 经验证，官方 `pdf-lib@1.17.1` **无** `PDFDocument.encrypt`（GitHub #1680）。页面改用 CDN `pdf-lib-with-encrypt@1.2.1`，保留相同 API：`doc.encrypt({ userPassword, ownerPassword })` → `save()`。

**文档**
- 更新 `02`→implemented、`03` 1b/2b 与 i18n-done；清单 #59→已上线；README 中英条目。

**门禁**
- `coverage:gate --phase=all` ✓
- `build:site` ✓
- `lint:seo` ✓
- `lint:tool-isolation` ✓

[actions]
- src/site/tool-catalog.d/protect-pdf.json
- src/pages/protectPdfPage.ts
- src/site/i18n/tools/protect-pdf/*.ts（10 语）
- public/icons/tools/protect-pdf.svg
- work-tasks/protect-pdf/02-tool-info.md、03-locale-briefs.md
- docs/2026-08-08-tool-inventory-table.md
- README.md
