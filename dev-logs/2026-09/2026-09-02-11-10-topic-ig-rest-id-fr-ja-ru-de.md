Date: 2026-09-02 11:10
Summary: Finished independent id/fr/ja/ru/de topic IG copy; key-match is green and Portuguese leftovers are gone from those five packs.
Visibility: project

[question]
Finish rewriting id, fr, ja, ru, and de topic IG copy so NONE of the table cells, flow, example, FAQ, boundary, secondary, or chrome strings remain in Portuguese or English-template fill.

[try to solve]
## Context
The rest-locale packs (`es`, `ar`, `pt` already rewritten) still had id/fr/ja/ru/de bodies cloned from Portuguese after a title-only patch. The French file had also been truncated mid-`text-compare`.

## Process
- Completed the truncated French tail (`text-compare`, `security-ids`, `files-archives`).
- Rewrote `topic-ig-copy-rest-{id,fr,ja,ru,de}.mjs` in the compact `expand({ rows: slug: [job,need,skip] })` shape, keeping EN slugs, group ids, flow lengths, FAQ×4, secondary slugs, and cite ids.
- Tone: Indonesian `Anda`, French `vous`, Japanese です/ます without an English “tools” suffix, Russian `вы`, German `Sie`.
- Re-ran the key-match import against EN / `TOOL_TOPIC_ORDER`; result: `rest packs match en keys`.
- Grepped the five files for `Não`, `Você`, `você`, `quando não`, `Ferramenta` — no hits.

## Root cause / analysis
A title-only patch left PT body copy in five locales. Shipping that would have been scaled near-duplicate / wrong-language content for those searchers.

## Solution
Independent people-first copy in each language, same structure as EN. Chrome strings for these five langs were already localized in `topic-ig-copy-rest.mjs`.

## Notes / boundaries
- `es` / `ar` / `pt` were already independent and were not rewritten in this pass.
- Indonesian `formulir` is Bahasa (form), not leftover Portuguese.
- Generated public topic HTML still needs `build:site` / `build-topic-ig` if pages should pick up the new strings.

[actions]
- Completed `scripts/site/topic-ig-copy-rest-fr.mjs` after the mid-string truncate.
- Rewrote `scripts/site/topic-ig-copy-rest-id.mjs`, `topic-ig-copy-rest-ja.mjs`, `topic-ig-copy-rest-ru.mjs`, `topic-ig-copy-rest-de.mjs`.
- Key-match printed `rest packs match en keys`; Portuguese-marker grep clean on those five files.
