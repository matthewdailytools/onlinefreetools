Date: 2026-10-16 14:28
Summary: Rewrote nine locale shards for convert-word-document-to-pdf so each language keeps the English key set, including the new flattening rule, and coverage gates 0b, 2, and 4 passed.

[question]
Rewrite nine locale shards for convert-word-document-to-pdf: zh, ja, de, fr, es, pt, ru, id, ar. Keep every key from en.ts, including tool_convert_word_document_to_pdf_rules_item_5. How steps must use the same words as the buttons in that locale. Then merge and run coverage phases 0b, 2, and 4. Do not run verify:tool and do not commit.

## Tool links (English)
- https://onlinefreetools.org/tools/convert-word-document-to-pdf

[try to solve]
## Context
The English shard is the key source of truth for Word document to PDF. The conversion path is .docx, then an HTML preview, then a PDF, all in the browser tab. The file is not uploaded. Legacy .doc is refused, there is no OCR, password-protected packages fail, and headers, floating shapes, and some fonts flatten. Nine locales were still missing the new rules item and still read like a shared English skeleton.

## Process
Read `src/site/i18n/tools/convert-word-document-to-pdf/en.ts` and copied its key order into zh, ja, de, fr, es, pt, ru, id, and ar. Each title is a local task sentence (for example 把 Word 文档转成 PDF, Word文書をPDFに変換, Word-Dokument in PDF umwandeln) without a converter suffix or a comma-separated settings list. Button labels were chosen per language, then the four How steps quote those same strings, including the done status. The sample paragraph is one local sentence and the Example section repeats that sentence. Related-tool answers point at the blank PDF editor and the HTML-to-PDF tool by their existing local titles. Descriptions were checked as Unicode length and files were rewritten to LF.

## Root cause / analysis
A straight translation keeps the English sentence order and drifts from the button labels, so the How list no longer matches the screen. The flattening limit belongs in rules item 5 because the path really is .docx to HTML to PDF. Privacy lines state both “stays on this device” and “not uploaded to a server”.

## Solution
Overwrote the nine shards, ran `node scripts/tool-modules/merge-all.mjs`, then coverage phases 0b, 2, and 4. All three printed `coverage:gate OK`. Description lengths: zh 143, ja 162, de 307, fr 318, es 313, pt 286, ru 286, id 259, ar 263. `verify:tool` was not run and nothing was committed.

## Notes / boundaries
English was not edited. Homepage HTML was not rebuilt because `build:site` / `verify:tool` was out of scope. The sample sentence is what the generated PDF shows; it is not the English sentence copied into other languages.

[actions]
- src/site/i18n/tools/convert-word-document-to-pdf/{zh,ja,de,fr,es,pt,ru,id,ar}.ts
- node scripts/tool-modules/merge-all.mjs
- node scripts/validate-tool-coverage-rounds.mjs --slug=convert-word-document-to-pdf --phase=0b
- node scripts/validate-tool-coverage-rounds.mjs --slug=convert-word-document-to-pdf --phase=2
- node scripts/validate-tool-coverage-rounds.mjs --slug=convert-word-document-to-pdf --phase=4
