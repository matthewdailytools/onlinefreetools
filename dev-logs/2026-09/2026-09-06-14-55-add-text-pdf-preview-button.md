Date: 2026-09-06 14:55
Summary: The Add text to PDF primary button now says preview, matching the real action; download stays a second button.
Visibility: people

[question]
http://127.0.0.1:8788/zh/tools/add-text-to-pdf-file  按钮 ”添加并下载“修改为添加并预览

## Tool links (English)
- https://onlinefreetools.org/tools/add-text-to-pdf-file
Chinese: https://onlinefreetools.org/zh/tools/add-text-to-pdf-file

[try to solve]
## Context
On the Chinese tool page, the primary control was labeled「添加并下载」even though `#addTextBtnApply` only stamps text and refreshes the in-page preview. A separate `#addTextBtnDownload` already says「下载」. The How-to step also quoted the old button name.

## Process
1. Confirmed the page template: apply draws text with pdf-lib, then `OftPdfWork` shows the preview; download is a second click.
2. Changed `tool_add_text_to_pdf_file_apply` and the How step that quotes it in the zh shard, then the same keys in the other nine locales so the label matches the action (same pattern as「盖章并预览」on Sign PDF).
3. Ran `tool:touch`, `merge:tools`, prerender for this slug, gzip, local R2 upload, and bumped `PAGES_CACHE_VERSION` 4.43 → 4.44 so the Worker Cache API did not keep the old HTML.
4. Restarted wrangler on 8788 (`--no-build`) and checked the live Chinese page.

## Root cause / analysis
The apply string was written as if the main click downloaded a file. The UI has been preview-then-download for a while (sibling PDF stamp tools already say “preview”). Only the copy was wrong, so users who wanted to inspect the stamp first would hesitate or expect an immediate file save.

## Solution
- zh button:「添加并预览」; How step 3:「点击「添加并预览」，再查看结果」.
- en: “Add & preview”; other locales use the local “add + preview” phrasing.
- Live check (`http://127.0.0.1:8788/zh/tools/add-text-to-pdf-file`): apply label is「添加并预览」, download stays「下载」and disabled until a result exists. Playwright Load sample: status「完成」, preview visible, download enabled, no pageerror.

## Notes / boundaries
- Behavior is unchanged: apply still does not start a download.
- Production still needs the usual R2 upload plus Worker `PAGES_CACHE_VERSION` 4.44 (or later) so cached HTML is not the old label.
- A previous auto-QA snapshot still quotes the old How step; that file is historical, not the live page source.

[actions]
- `src/site/i18n/tools/add-text-to-pdf-file/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`: apply + how_item_3
- `src/site/tool-catalog.d/add-text-to-pdf-file.json`: `updatedAt` via `tool:touch`
- `wrangler.jsonc`: `PAGES_CACHE_VERSION` 4.43 → 4.44
- prerender + gzip + local R2 upload for this slug
