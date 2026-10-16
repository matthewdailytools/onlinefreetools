Date: 2026-10-16 14:05
Summary: Rewrote nine body-fat locale shards around the Navy circumference formulas, with the female constant as minus 78.387 and samples 15.3% and 26.7%.

[question]
Write complete people-first i18n shards for how-to-calculate-body-fat for locales: zh, ja, de, fr, es, pt, ru, id, ar. Keep the published coefficients, the female minus 78.387, and the centimetre samples.

## Tool links (English)
- https://onlinefreetools.org/tools/how-to-calculate-body-fat

[try to solve]
## Context
The English shard is the key source of truth. Nine locale files were thin and did not carry the safety banner, hint, step templates, why-choose items, or the sixth FAQ. Readers searching in those languages still need the same educational circumference estimate, including the warning that it is not a diagnosis.

## Process
Each locale was rewritten from that language's search phrasing (for example 体脂率计算器, calculadora de grasa corporal, 体脂肪率計算, Körperfett-Rechner), not as a line-locked translation of the English paragraphs. FAQ order and the why-choose list were varied. Formula coefficients, the 2.54 centimetre-to-inch factor, placeholders `{hIn}{nIn}{wIn}{hipIn}{pct}{hipPart}`, and both samples stayed literal. Files were saved with LF line endings. `node scripts/tool-modules/merge-all.mjs` refreshed the merged catalogs. `node scripts/validate-tool-coverage-rounds.mjs --slug=how-to-calculate-body-fat --phase=4` passed.

## Root cause / analysis
An earlier note treated the female constant as plus 78.387 and the 165/34/74/96 cm case as about 183.5%. The current English templates and `bodyFatPct` in the page subtract 78.387, which is the published Hodgdon form. On those inputs the educational result is about 26.7%. The male Navy sample 178/40/86 cm stays about 15.3%. Army and Navy labels on this page share that equation; only the label changes. Copy that adds 78.387 would show a percentage nobody can use as a body-fat illustration.

## Solution
All nine shards now state the female formula with a minus before 78.387, quote both samples, and keep the YMYL line that the result is not medical advice or a diagnosis. Description lengths (Unicode code points): zh 153, ja 182, de 371, fr 433, es 408, pt 430, ru 361, id 395, ar 332. Titles after the em dash are short product phrases, not comma-separated control lists. Phase 4 result: `coverage:gate OK slug=how-to-calculate-body-fat phase=4`.

## Notes / boundaries
`build:site` was not run in this pass, so prerendered HTML and the home cards still need a later site build before the new sentences are what a browser shows. French uses stature for height and tour de taille for waist so the two measures are not both called taille.

[actions]
- src/site/i18n/tools/how-to-calculate-body-fat/{zh,ja,de,fr,es,pt,ru,id,ar}.ts
- work-tasks/how-to-calculate-body-fat/02-tool-info.md
- work-tasks/how-to-calculate-body-fat/03-locale-briefs.md
- node scripts/tool-modules/merge-all.mjs
- node scripts/validate-tool-coverage-rounds.mjs --slug=how-to-calculate-body-fat --phase=4
