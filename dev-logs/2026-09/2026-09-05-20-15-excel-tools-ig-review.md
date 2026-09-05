Date: 2026-09-05 20:15
Summary: Information Gain review of the eight remaining Excel scene tools: quota is met, but English How/Rules/FAQ are still slogan-thin; formula tools hold real incremental rules, template xlsx pages less so.
Visibility: people

[question]
review info gain

[try to solve]
## Context
Review Information Gain for the Excel scene tools that are still in catalog after N9–N12 were removed. Authority: `tool-i18n-seo.mdc` §3.1 (nine dimensions, at least three required) plus How steps, Example, FAQ ≥3. The eight slugs are nested IF, IFS, IFNA, COUNTIF, formula cheat sheet, invoice, budget, timesheet.

IG here means **verifiable extra** versus a typical SERP page (Microsoft function help, template download farms, Excel Online). It is a people-first content principle, not a claimed ranking switch.

## Process
Read §3.1, each `work-tasks/{slug}/02-tool-info.md` IG table, English (and spot-check zh) How/Rules/Example/FAQ, and the interactive scripts for nested IF and timesheet.

## Root cause / analysis

### Quota (mechanical)
All eight pages have Rules items, How `how_item_1…4`, Example, ≥3 FAQ pairs, Use cases ×3, `related` ≥2, and a privacy sentence. Invoice/budget have YMYL disclaimers. That **clears the ≥3-dimension floor** (typically dimensions 1, 2, 6, 8, 9).

Clearing the floor is not the same as useful IG. The English How lead on every page is still `Do this job, then use the buttons.` How item 1 repeats that line. Rules body copies How. That is the zero-gain pattern the rule bans (slogan instead of field → action → result).

`02` IG tables were generated from one template. Timesheet’s “边界” row still says wildcard/version/read-only — those belong to formula tools, not an hours grid. Brief and page drifted.

### What is actually incremental (keep)

| Slug | Real IG vs SERP |
|---|---|
| nested IF | Quote doubling; contains → `SEARCH`; in-tab trial without Excel |
| IFS | `TRUE` as else; Excel 2016+ vs nested IF; H1 is a scene sentence, not `IFS Excel` |
| IFNA | `#N/A` only; IFERROR is a different wrapper; leading `=` stripped |
| COUNTIF | `*` `?` wildcards; COUNTIFS is another job; numbers unquoted |
| cheat sheet | Lookup/copy, not a nested-IF generator; Ctrl+` stays in Excel |
| invoice | Line = qty×price; tax on subtotal; not a fiscal e-invoice |
| budget | Category totals, not a ledger; not a template library |
| timesheet | Hours must be numbers; empty rows skipped; not payroll |

Formula tools beat a static Microsoft article because the page **emits a pasteable formula and trials it**. That is the product.

### What is weak or missing

1. **How** — Item 1 is not an ordered UI step. zh is better (“先写出嵌套 IF / 先做出工时表”) but still restates the H1 instead of “fill cell → add rows → copy”.
2. **Example** — COUNTIF example is `A2:A6 and West → COUNTIF` without the actual `=COUNTIF(...)` string. Timesheet Example is `Five days × 8 → 40` without the grid layout or that Total is a **computed number**, not `=SUM()`.
3. **Rules vs How** — Rules body duplicates How. Rules should be constraints only (quoting, versions, fiscal vs sketch).
4. **FAQ** — Budget/timesheet answers like `No.` and `Other page.` are not explanatory. YMYL invoice FAQ “Legal invoice? / Spreadsheet only.” is the right *topic* but too short for a trust page.
5. **Dimension 4 (对照表)** — No on-page IF vs IFS vs IFNA vs IFERROR table. Related links exist; a three-row compare on nested IF / IFS / IFNA would be cheap unique IG.
6. **Template xlsx vs template farms** — Invoice/budget/timesheet write **values** into xlsx (JS sums). Competitor templates often ship live Excel formulas, overtime, lunch, billable flags. Current IG is “local, tiny, not payroll/fiscal,” which is honest, but not a richer workbook model. Timesheet `02` says the sample “runs out timesheet.xlsx”; `loadSample` only fills the textarea and prints `hours 40`. Download is a second click.
7. **Use cases** — Three fragments (`Weekly hours.`) bind weakly to a job/pipeline (dimension 3).
8. **Shared leftover i18n keys** (seller/tax on timesheet) do not add IG; they are generator residue.

## Solution
No code change in this pass (review only). If a rewrite pass is approved, priority order:

1. Replace English How item 1 and How/Rules bodies with verb steps and constraint-only rules (all eight).
2. Put the **emitted formula string** or **xlsx layout + total** into Example so it matches `loadSample`.
3. Expand one-word FAQ answers; invoice/budget keep YMYL limitation language.
4. Optional: IF / IFS / IFNA / IFERROR four-row compare on the nested-IF or cheat-sheet page (dimension 4).
5. Optional product IG (only if product scope grows): timesheet Total as `=SUM()`, overtime/cap boundaries — that would be new work, not copy.

## Notes / boundaries
- N9–N12 (graph/dashboard/pivot/viewer) are already out of catalog; this review is the remaining eight.
- `lint:seo` passing FAQ/description length does not certify IG quality.

## Second-pass review (2026-09-05 20:18)

A second pass checked the implementation against current SERP examples and found correctness failures beyond thin copy:

1. Invoice `loadSample()` creates `Widget,2,10` plus `Gadget,1,10`. The subtotal is 30, tax is 3, and total is **33**, while all localized copy derived from the English example claims **22**.
2. Timesheet dates `2026-09-01` through `2026-09-05` run Tuesday through Saturday. The brief and several locales call this Monday–Friday / five weekdays.
3. IFNA does not evaluate the pasted inner formula. Its trial result always displays the alternate value; only the bundled `NA(), 0` sample happens to be correct.
4. Nested IF and IFS trial equality is JavaScript case-sensitive, whereas ordinary Excel `=` text comparison is case-insensitive. The in-browser trial can therefore disagree with the emitted Excel formula.
5. The IFS page says “Excel 2016+.” Current Microsoft support lists IFS for Excel 2019 and Microsoft 365 (and later), not perpetual Excel 2016. The compatibility boundary is wrong.
6. Formula output is fixed to English function names and comma argument separators in all ten language pages. Many localized Excel installations use translated function names and/or semicolons. The pages do not disclose or solve this, so dimension 7 cannot count as substantive multilingual IG for formula output.
7. The IFS description, FAQ, and Rules discuss the **H1/heading/search term**. The cheat-sheet FAQ also discusses what people search and why the heading differs. This is SEO/engineering meta narration in visible copy, explicitly prohibited by the localization rule.
8. All eight `02` files copy the same “wildcard/version/read-only” boundary row. The three xlsx tools also claim entry samples immediately produce a file, but they only fill inputs and show a text total; download is a separate click.
9. Invoice, budget, and timesheet write static totals into xlsx, not live Excel formulas. Current SERP competitors commonly provide formatted, reusable workbooks with formulas; the three pages therefore have little product-level IG beyond a small local export.
10. The formula cheat sheet says users can jump to IF/IFS builders, but its interactive panel contains only filterable formula buttons and no builder links. This conflicts with both its visible How/Use case copy and its `02` interaction specification.
11. The five formula-tool catalog shards use `primaryTopic: "text-compare"`, which is unrelated to their Excel formula intent and weakens taxonomy/related-tool coherence.
12. Invoice Clear removes only line items; seller, buyer, and tax remain. The behavior is not explained by How or Rules.

The corrected verdict is: **nested IF, IFS, IFNA, and COUNTIF have potentially distinctive interaction design, but are not ready to claim reliable IG until trial/compatibility/example errors are fixed. The cheat sheet is thin and promises builder links that are not implemented. Invoice, budget, and timesheet are below the substantive IG bar versus current SERP even though their section counts pass the mechanical validator.**

[actions]
- None (review only; no page or i18n edits)

## Follow-up implementation (2026-09-05 20:22)

The requested correction pass fixed the audit findings in the editable generator sources and regenerated all eight tool pages, catalog shards, and ten locale shards.

### Correctness and interaction changes

1. The invoice sample now contains one `Widget,2,10` row, so subtotal 20, tax 2, and total 22 agree with the visible example. Its preview shows all worksheet rows, and Clear now resets seller, buyer, lines, tax, output, errors, and cached data.
2. The timesheet sample now covers Monday 2026-09-07 through Friday 2026-09-11, five rows of eight hours, totaling 40.
3. IFNA no longer displays a false browser trial. The page says it generates wrapper syntax and that Excel evaluates the inner formula.
4. Nested IF and IFS browser equality now trims and compares lower-cased text, matching ordinary Excel text equality more closely.
5. IFS compatibility copy now identifies Excel 2019, Microsoft 365, or later and explicitly excludes perpetual Excel 2016.
6. The formula pages disclose that output uses English function names and comma separators, with localized Excel installations potentially requiring translated names or semicolons.
7. The formula cheat sheet now links directly to the nested IF, IFS, IFNA, and COUNTIF builders.

### Product-level Information Gain

Invoice, budget, and timesheet downloads now contain live Excel formulas:

- Invoice line amounts use `B×C`; subtotal uses `SUM(D5:Dn)`; tax and total reference worksheet cells.
- Budget Total uses `SUM(B2:Bn)`.
- Timesheet Total uses `SUM(C2:Cn)`.

This turns the downloads from static snapshots into small reusable workbooks that recalculate after a user edits values in Excel. The pages and briefs now state this behavior without claiming automatic download on page load.

### Content and taxonomy

- Replaced slogan-like How leads with field → action → result instructions.
- Separated Rules summaries from How steps and expanded numeric/formula examples.
- Rewrote the English and en/zh/es/ja critical copy, removed visible H1/search-term narration, and gave fallback locales exact Input→Output evidence.
- Changed formula tools from `text-compare` to `dev-data`; changed timesheet to `business-finance` and calculator category.
- Updated all eight `02-tool-info.md` files and added IG correction review rows to all eight locale briefs.

### Verification

- Eight `coverage:gate --phase=all` checks passed.
- Eight source and built-HTML `lint:tool-page --require-html` checks passed.
- Full `build:site` completed for 205 tools × 10 languages.
- `lint:seo` passed; only unrelated legacy title/link warnings remained.
- The scoped multi-tool isolation check passed with `CROSS_TOOL_UPDATE=1`.
- IDE diagnostics reported no errors in the edited generator, page, or locale files.
