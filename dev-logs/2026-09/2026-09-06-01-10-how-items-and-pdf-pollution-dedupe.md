Date: 2026-09-06 01:10
Summary: Added ordered how_item steps for 19 older converters and fixed PDF template pollution plus near-duplicate URL differentiation.
Visibility: people

[question]
处理问题：“仍未做（需你定夺）

~20 个老转换器缺有序 how_item_*（量大，当前 lint 不拦）
PDF 模板污染与近重复 URL（属 PDF 簇，不在本轮）”

[try to solve]
## Context
After the text-tools capability/SEO pass, two deferred items remained: (1) about nineteen older converter/SEO tools had `how_body` but no ordered `how_item_1…n`, so How sections rendered as prose only; (2) PDF cluster leftovers — write-PDF / add-text still carried extract/OCR template copy, and extract-text vs pdf-to-markdown plus edit-pdf vs turn-editable were near-duplicate in capability and messaging.

## Process
1. Confirmed English `how_item_1…4` already existed for the 19 slugs and that pages used `howItemCount: 4` (except markdown-to-html, which still used a hand-written How block without `<ol>`).
2. Wired markdown-to-html How to four ordered list items from `tool_markdown_how_item_*`.
3. Completed ten-locale `how_item_*` for all 19 tools (native actionable steps; inventory check: 19 × 10 locales × 4 keys present).
4. Differentiated pdf-to-markdown code: each page becomes `## Page N` plus text, joined with `---`, while extract-text stays plain `.txt`.
5. Rewrote write-pdf and add-text masters (and locales) to match real behavior: write creates from textarea only; add-text stamps on every page including scans; removed false OCR/notext framing and unused `notext` page binding.
6. Tightened FAQ/rules for extract vs markdown and edit vs turn (primary download .pdf vs .txt).
7. Ran `merge:tools`, spot `lint:tool-page`, and `npm run build:site` (205 tools × 10 langs prerender).

## Root cause / analysis
Older tools predated the ordered How convention; lint did not require `how_item_*`. PDF pages shared a multipurpose template, so create/stamp tools inherited extract/OCR strings. extract vs markdown and edit vs turn shared the same pdf.js/pdf-lib path with only thin output/CTA differences — better to differentiate copy and light Markdown structure than to merge URLs without redirects.

## Solution
- Ordered How on the 19 converters/SEO tools across ten locales; markdown-to-html list wired in the page.
- write-pdf / add-text pollution cleaned; add-text no longer binds unused `err_notext`.
- pdf-to-markdown outputs `## Page N` drafts; IG/FAQ state the .txt vs .md and edit vs turn download differences.
- Site rebuild refreshed prerendered tool HTML (e.g. base64 How `<ol>` visible under `/_pages/`).

## Notes / boundaries
- Did **not** 301-merge PDF near-duplicates; kept separate URLs with clearer product differentiation.
- Dead template keys (`choose_file` on write-pdf, unused err_* ) may still exist as non-rendered strings; visible empty/how/rules/faq were corrected.
- Temp inject/fix scripts under `scripts/tmp/` were removed after use; `audit-prompt-i18n.mjs` may remain from earlier work.

[actions]
- Updated `src/pages/markdownToHtmlPage.ts`, `src/pages/pdfToMarkdownPage.ts`, `src/pages/addTextToPdfFilePage.ts`
- Updated i18n shards for 19 how_item tools + write-pdf / add-text / pdf-to-markdown / extract-text / edit-pdf / turn-editable (ten locales where needed)
- Ran `npm run merge:tools` and `npm run build:site`
