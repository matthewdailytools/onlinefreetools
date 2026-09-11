Date: 2026-09-11 08:36
Summary: Page-generation rules now require a full same-intent related-search inventory in 02 before writing title, description, FAQ, and Use cases.
Visibility: people

[question]
将页面中需要融入相同意图的所有相关搜索关键词写到页面生成规则中

## Tool links (English)
- https://onlinefreetools.org/tools/trim-an-audio-clip-and-export
Chinese: https://onlinefreetools.org/zh/tools/trim-an-audio-clip-and-export

[try to solve]
## Context
Tool pages already had a 0b coverage table and 03 locale briefs with 3–5 search terms per language. That 3–5 list was being treated as the full absorb set. Related searches, PAA, autocomplete, and direction-doc clusters of the **same job** were easy to drop when generating copy. The request was to put **all** same-intent related keywords into the **page-generation spec**, not only a short H1-direction list.

## Process
1. Confirmed existing gates: primary term → H1; secondary terms → description / FAQ / Use cases; ban on-page keyword lists (Google keyword stuffing).
2. Added a dedicated 02 section as the generation source of truth: 「同意图相关搜索词（页面生成必吸）」.
3. Split duties: 03’s 3–5 terms = local H1 direction; 02’s table = every same-intent related search that copy generation must weave in.
4. Wired the section into localization, work-tasks brief, tool-creation, tool-i18n-seo, coverage-pass, copilot summary, and the 02/03 templates.
5. Added `checkSameIntentRelatedKeywordsFilled` so `coverage:gate` phase=0b fails placeholder tables when the heading exists; older tools without the heading still skip.
6. Filled the inventory for `trim-an-audio-clip-and-export` from doc 12 S1, cutter/trimmer/crop clusters, song/wav/m4a variants, cut-intro, and ten-locale equivalents; different-intent related searches (sound editor, ringtone, video extract, split, YouTube rip) went to the do-not-absorb rows.
7. Lightly updated en/zh FAQ and description so song cutter / wav cutter / cut intro have a natural landing sentence.

## Root cause / analysis
03 briefs are the right size for **how locals name the main job**. They are the wrong size for **related-search coverage**. Agents generating pages only looked at 3–5 terms, so same-intent variants (song cutter, wav cutter, online mp3 cutter, 切歌) never entered the generation spec. Listing them in 02, then requiring generation to follow that table, keeps一带多场景 without doorway URLs and without pasting a keyword cloud on the page.

## Solution
- New hard gate: before generating modules or marking `ready`, 02 must list every same-intent related search with absorb vs 有意不满足/drop, a landing slot, and near-duplicate URLs not to create.
- Generation uses that table: one H1 primary; remaining absorb terms in description/FAQ/Use cases (near-synonyms may share one sentence).
- Trim-clip 02 is the first filled example; `coverage:gate --slug=trim-an-audio-clip-and-export --phase=all` is green.

## Notes / boundaries
- The 02 table is a **spec**, not visible page copy. Do not render it as “related keywords”.
- No Keyword Planner CSV for this slug; the table still applies.
- Other locales besides en/zh already absorb local cutter verbs; song/wav extras were added in en/zh. A later copy pass can mirror those clusters per 03 habits.
- Prerendered HTML still needs `build:site` if shipping the en/zh sentence tweaks.

[actions]
- Updated `.cursor/rules/tool-i18n-localization.mdc`, `work-tasks-tool-brief.mdc`, `tool-creation.mdc`, `tool-i18n-seo.mdc`
- Updated `.cursor/skills/tool-coverage-pass/SKILL.md` and `.github/copilot-instructions.md`
- Extended `work-tasks/_template/02-tool-info.md` and `03-locale-briefs.md`
- Added `checkSameIntentRelatedKeywordsFilled` in `scripts/lib/title-coverage-heuristics.mjs` and wired it in `scripts/validate-tool-coverage-rounds.mjs`
- Filled `work-tasks/trim-an-audio-clip-and-export/02-tool-info.md` related-search table; checked 03; notes pointer
- Tweaked en/zh FAQ/description landing sentences for song/wav/intro clusters
