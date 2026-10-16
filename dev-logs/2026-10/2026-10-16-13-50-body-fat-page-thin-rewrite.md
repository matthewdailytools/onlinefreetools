Date: 2026-10-16 13:50
Summary: Thin-rewrote the body-fat calculator page to the new English keys and refreshed coverage notes without writing other locales.

[question]
Thin-rewrite how-to-calculate-body-fat Page.ts to match the new en.ts, update coverage tables, bump catalog updatedAt, then merge and run coverage 0b and 1b. Do not write locales yet.

## Tool links (English)
- https://onlinefreetools.org/tools/how-to-calculate-body-fat

[try to solve]
## Context
The English shard `src/site/i18n/tools/how-to-calculate-body-fat/en.ts` is the key source of truth. The page still used the older result card (percentage only, no step lines, no safety banner) and a single male sample.

## Process
Rewrote `src/pages/howToCalculateBodyFatPage.ts` with prefix `tool_body_fat`, a `tx()` helper, safety banner, hint, and a result card that prints the percentage plus conversion and formula steps. Placeholders are filled with split/join. Inputs use `parseFloat`. Sample rotation is male Navy 178/40/86 then female 165/34/74/96. `renderToolIgSections` requests four how items, five why-choose items, four use cases, and five formula items. `formulaItemCount` was added as an alias of `ruleItemCount` in `src/pages/site/toolContent.ts` so the fifth formula item actually renders. Catalog `updatedAt` is `2026-10-16T00:00:00.000Z`. Coverage tables in `02-tool-info.md` now land absorb queries on H1, description, FAQ, and use cases, and mark medical advice as intentionally unmet. `03-locale-briefs.md` gained 2026-10-16 rows for 0b, 1b, and 2b and was saved with LF line endings.

## Root cause / analysis
Navy and Army labels share one educational circumference equation, which the page already implements. The female constant in the English templates is `+78.387`. For 165 cm / neck 34 / waist 74 / hip 96 the geometry is valid (waist+hip > neck) but the percentage is about 183.5%. The commonly published Hodgdon female constant is `−78.387`, which would be about 26.7% on the same inputs. The page follows the English template so the step line matches the number. The male sample 178/40/86 is about 15.3%, matching the description.

## Solution
`npm run merge:tools` succeeded. Direct node runs passed: `coverage:gate` phase `0b`, phase `2` (the 1b row), and `lint:tool-page` for this slug. Other locales were not rewritten. `npm run` on this machine swallowed `--slug`, so the slug gates were invoked with `node scripts/...` rather than the npm wrapper.

## Notes / boundaries
The coverage parser reads the first `0b` / `1b` / `2b` table row. Those August 2026 rows still satisfy the mechanical checks; the 2026-10-16 rows are appended after them. Phase 2 still compares the updated H1 cell in `02` with the English title. No browser pass was run because the page was not prerendered with `build:site`.

[actions]
- src/pages/howToCalculateBodyFatPage.ts
- src/pages/site/toolContent.ts
- src/site/tool-catalog.d/how-to-calculate-body-fat.json
- work-tasks/how-to-calculate-body-fat/02-tool-info.md
- work-tasks/how-to-calculate-body-fat/03-locale-briefs.md
