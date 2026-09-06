Date: 2026-09-06 17:33
Summary: Meta descriptions for convert-html-to-pdf, make-pdf-flipbook, add-text-to-pdf-file, and write-pdf-document-online now pass lint:seo keyword and length gates.
Visibility: people

[question]
根据seo分析进行修改

## Tool links (English)
- https://onlinefreetools.org/tools/add-text-to-pdf-file
- https://onlinefreetools.org/tools/convert-html-to-pdf
- https://onlinefreetools.org/tools/make-pdf-flipbook
- https://onlinefreetools.org/tools/write-pdf-document-online

Chinese: https://onlinefreetools.org/zh/tools/add-text-to-pdf-file · https://onlinefreetools.org/zh/tools/convert-html-to-pdf · https://onlinefreetools.org/zh/tools/make-pdf-flipbook · https://onlinefreetools.org/zh/tools/write-pdf-document-online

[try to solve]
## Context

`lint:seo` failed `predeploy` with exit 2 because meta `tool_*_description` strings lacked per-locale process/example tokens and/or were shorter than 120 JavaScript characters. The previous run listed convert-html-to-pdf (all 10 locales), make-pdf-flipbook (en/ja/zh), and two Chinese length failures.

## Process

1. Edit only i18n shards under `src/site/i18n/tools/{slug}/{lang}.ts` (not merged `i18n/{lang}.ts`).
2. Keep the existing privacy and capability facts (paste vs URL fetch, no upload, sample output) and weave in a listed token: English `steps`/`example`, Chinese `步骤`/`示例`, Japanese `手順`/`例`, and the matching word in the other locales.
3. Re-count Chinese with the same extractor the validator uses. Flipbook zh needed a short extra clause (lecture-notes HTML use); write-pdf zh needed the no-images/tables/headers boundary plus wrap-to-next-page.
4. `npm run merge:tools`, `npm run tool:touch` for the four slugs, merge again, then `npm run lint:seo`.

## Root cause / analysis

The keyword list is substring matching. Near-synonyms such as Chinese `样例` or English `sample` do not count. Compact Chinese sentences can look long on screen and still sit under 120 `.length`. Descriptions already explained the workflow; they simply never used the gated tokens.

## Solution

Updated descriptions in shards, merged catalog/i18n, bumped `updatedAt`. `lint:seo` now prints `SEO validator: OK`. Remaining `[COVER-WARN]` and `[LINK-WARN]` lines are the same legacy inventory and still do not fail CI.

## Notes / boundaries

- Did not rewrite titles, related-graph inbound links, or homepage `_desc`.
- Prerendered HTML still needs `npm run build:site` (included in `predeploy`) before those meta tags reach R2.
- Validator tokens live in `scripts/validate-tool-seo.mjs` (`keywords` + `MIN_DESCRIPTION_LENGTH`).

[actions]
- Updated i18n shards for convert-html-to-pdf (10 locales), make-pdf-flipbook (en/ja/zh), add-text-to-pdf-file (zh), write-pdf-document-online (zh)
- Ran merge:tools, tool:touch, lint:seo (exit 0)
