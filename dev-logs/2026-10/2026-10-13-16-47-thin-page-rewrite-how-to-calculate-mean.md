Date: 2026-10-13 16:47
Summary: Rewrote the thin how-to-calculate-mean page (queue #1) into a mean calculator with visible working, a three-mean comparison, decimal-comma input and ten independently localized locales.
Visibility: people

[question]
第一阶段方案：devlog 剔除出sitemap，进行noindex；薄页slug进行逐页改写

## Tool links (English)
- https://onlinefreetools.org/tools/how-to-calculate-mean

[try to solve]
## Context

After the October 2026 impression collapse, the info-gain audit (`docs/seo/reviews/2026-10-13/04-tool-ig-audit.md`) found 87 tool pages under 350 words. They are queued one slug at a time in `05-thin-rewrite-queue.md`, ordered by impressions × thinness. Slug #1 was `how-to-calculate-mean`. It had 116 words of English copy and only answered with a number. Its locale copy was junk: the Chinese description repeated three times, and the FAQs pointed to "see the formula section". Space- and newline-separated input was also silently broken by a template-literal escaping bug (`/[\s,]+/` was emitted as `/[s,]+/`).

The goal was a page that a person searching "how to calculate mean" or "mean calculator" would find more useful than the SERP average, without padding or templated copy.

## Process

1. **Brief first.** `work-tasks/how-to-calculate-mean/02-tool-info.md` got a full same-intent search table.
   - Absorbed: mean, average, how to calculate, geometric, harmonic, paste from a spreadsheet, mean vs median, decimal comma.
   - Deliberately not absorbed: weighted mean (needs a weight input, so it points to the GPA calculator), and median/mode and standard deviation (separate tools).
   - A user-intent review moved the verdict from "partially satisfied" to "satisfied" once the page shows how the answer was reached.
2. **Page behaviour** (`src/pages/howToCalculateMeanPage.ts`):
   - The result area shows count (n), a working line (`15 ÷ 5 = 3`; `(1.144)^(1/3) = 1.0459`; `2 ÷ 0.0417 = 48`) and all three means side by side.
   - Input parsing: commas, spaces, newlines and pasted spreadsheet columns work. If the text contains `;`, values are split on semicolons/whitespace and a comma is read as the decimal separator (`2,5; 3,5; 4`).
   - Errors name the offending token, or say that geometric/harmonic means need every value above 0. Bad input is never silently dropped.
   - Numbers are formatted with `Intl.NumberFormat` (max 4 decimals, Latin digits), so decimal-comma locales see `2,6052`.
3. **English master** (`src/site/i18n/tools/how-to-calculate-mean/en.ts`):
   - How it works, "Why choose", formula plus "which mean to use", a worked example, four use cases and seven FAQs.
   - Every number in the copy was checked against the calculator.
4. **Ten-locale rewrite.** Each locale was written from its own brief in `03-locale-briefs.md`, using local search terms and button labels, not translated line by line.
   - Decimal-comma locales (es, pt, fr, de, ru, id) explain the semicolon rule in How, FAQ and error text, and use local separators in examples.
   - Locale-specific FAQs:
     - ja: 相加平均と相乗平均の使い分け
     - fr: moyenne avec coefficients, with a worked 12 coef. 2 + 15 → 13 example
     - id: mean vs median vs modus
   - FAQ and "Why choose" order differ per locale.
5. **Gates:**
   - `validate-tool-coverage-rounds --phase=all` passes after adding the `2b` round row and fixing two 02 format issues: a bold `**总判**` cell the validator regex could not read, and missing "table complete / written per table" checkboxes.
   - `verify-tool` passes coverage, page wiring, the prerendered HTML smoke test, SEO lint, links and vendor.
   - `build:site` rebuilt all 3,170 prerendered tool pages.
6. **Browser check** on the prerendered HTML served locally:

| Input | Mode | Result |
| --- | --- | --- |
| `1, 2, 3, 4, 5` | arithmetic | n=5, `15 ÷ 5 = 3`, comparison 3 · 2.6052 · 2.1898 |
| `4\n8\n9` | arithmetic | 7 |
| `2,5; 3,5; 4` | arithmetic | 3.3333 |
| `1.1 0.8 1.3` | geometric | 1.0459 |
| `60, 40` | harmonic | 48 |
| `1, -2, 3` | geometric | named error, details hidden |
| `1, abc, 3` | arithmetic | error names "abc" |

German page: `2,3; 1,7; 2,0` → `6 ÷ 3 = 2`, and the comparison prints `2,6052`.

## Root cause / analysis

The page was thin because it was built as a single-output widget from a shared template. Its locales were filler, so for most of the ten languages the visible content was either near-empty or the same English sentences. That fits the pattern Google's helpful-content and scaled-content guidance warns about.

The fix was to make the tool itself more useful (working, comparison, real-world paste formats, explicit errors), and then write copy that explains decisions the tool cannot make for the user: which mean to use, and why the median can differ. Word count went up as a side effect, not as the goal.

## Solution

- Page logic: visible working, three-mean comparison, decimal-comma parsing, token-level errors, locale number formatting.
- Copy: an English master plus nine independently written locales with the same key set. The worked numbers are verifiable:
  - GM(1..5) = 2.6052, HM(1..5) = 2.1898
  - Returns +10% / −20% / +30% average about 4.6% a year (100 → 114.4, not 121.4)
  - 60 / 40 km/h averages 48 km/h
  - The mean of 2, 3, 3, 4, 40 is 10.4 while the median is 3
- Brief, coverage rounds and queue updated. Slug #1 is marked `done 2026-10-13`.

## Notes / boundaries

- `verify-tool` reports a tool-isolation failure only because the same working tree also holds the sitewide devlog noindex changes and pre-existing untracked `.agents/` files. The tool-scoped checks all pass.
- These were seen on the German page but are not part of this tool, so they are left for a separate pass:
  - Shared section headings ("Frequently asked questions", "Related tools", "References") stay in English on localized pages.
  - The hero thumbnail is an old screenshot of the previous UI ("Average of a Number List").
- Not deployed yet. The rollout order is `build:site` → `upload:r2` → `git:deploy`.
- Next in queue: #2 `how-to-calculate-triangle-area`.

[actions]
- `src/site/i18n/tools/how-to-calculate-mean/{zh,es,ar,pt,id,fr,ja,ru,de}.ts`: rewritten.
- `work-tasks/how-to-calculate-mean/02-tool-info.md` and `03-locale-briefs.md`: coverage table checkboxes, intent verdict format, `2b` row, status `i18n-done`.
- `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`: #1 marked done.
- `node scripts/bump-tool-updated-at.mjs --slug=how-to-calculate-mean`; `node scripts/verify-tool.mjs --slug=how-to-calculate-mean`; `npm run build:site`.
