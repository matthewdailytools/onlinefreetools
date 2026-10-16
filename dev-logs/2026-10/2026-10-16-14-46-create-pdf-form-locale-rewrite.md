Date: 2026-10-16 14:46
Summary: Rewrote the nine non-English create-pdf-form shards so How steps match each locale's buttons, and examples keep the hardcoded widget names Name and Email.

[question]
Rewrite nine locale shards for create-pdf-form: zh, ja, de, fr, es, pt, ru, id, ar. Copy the full English key set, including tool_create_pdf_form_rules_item_5. How steps must use that locale's button and label words. If loadSampleForm hardcodes Name and Email, locales must say those English widget names.

## Tool links (English)
- https://onlinefreetools.org/tools/create-pdf-form

[try to solve]
## Context
The blank-page PDF form builder had locale shards that were missing the new boundary rule and, in Chinese, a broken description string. Searchers who already have a PDF must be sent to Make a PDF fillable. Trying answers after download belongs on Fill out a PDF form. Meta descriptions also have to be at least 120 characters and include a locale process or example word that the SEO validator looks for.

## Process
Read `en.ts` for the full key set and `createPdfFormPage.ts` `loadSampleForm`. The sample always inserts two text widgets named `Name` and `Email`. Neighbor titles were taken from the live `make-pdf-fillable` and `fill-out-pdf-form` shards so each language points at the name that page actually shows.

Each of zh, ja, de, fr, es, pt, ru, id, and ar was rewritten with the same keys as English, including `rules_item_5`. How steps repeat that language's own strings for field name, field type, Text, Checkbox, X/Y/W/H (Chinese uses 宽 and 高), Add field, and Download. Load sample is named in the How lead and in the example, and both sentences keep the widget names Name and Email.

## Root cause / analysis
Translating the sample labels into local words would describe a form the page does not build. The Russian draft first said "типе поля", which is not the label "Тип поля", so the How line was rewritten to include the label as printed. Files were saved with LF line endings.

## Solution
`node scripts/tool-modules/merge-all.mjs` completed. Coverage gates for `create-pdf-form` passed at phase 0b, phase 2, and phase 4. Description lengths: zh 161, ja 204, de 440, fr 417, es 384, pt 394, ru 358, id 359, ar 333. `verify:tool` was not run.

## Notes / boundaries
Overlaying fields on an existing PDF stays on Make a PDF fillable. This page still starts from a blank page and downloads `pdf-form.pdf` in the browser.

[actions]
- Rewrote `src/site/i18n/tools/create-pdf-form/{zh,ja,de,fr,es,pt,ru,id,ar}.ts`
- Ran `node scripts/tool-modules/merge-all.mjs`
- Ran coverage gates phase 0b, 2, and 4 for `create-pdf-form`
