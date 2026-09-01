Date: 2026-09-01 14:15
Summary: Clustered Compare-Text and text-diff Keyword Planner queries into scene slugs, ran Bing SERP×15, and set harvest-only SEO for the live text-diff page.

[question]
研究keywords文件夹下Compare-Text和text-diff文件夹下的Keyword Planner关键词分组和关键词，以用户需求场景细化为核心形成slug，同时关键词进行归属到slug，进行bing_serp ，然后统一分析，形成工具seo策略

[try to solve]
Two Planner exports (733 + 491 rows, 983 unique after merge) were clustered by job type, not by ad-group synonyms. The only live URL is `/tools/text-diff`. Its English H1 already matches the scene query `compare two texts online`; the slug stays as a historical category name so the indexed path is not renamed.

Bing SERP (international, 15 scene queries, all usable) showed Diffchecker / text-compare.com clones packing paste-diff, file-diff, side-by-side, string, code, and SQL-as-text. Word is mid_covered (Microsoft how-tos plus Draftable/compare2word). JSON/YAML/XML structured diff and Excel sheet compare are head. There is no `long_gap` for a weekly build.

Strategy: absorb paste/.txt/side-by-side/string/paragraph/code-as-lines into `text-diff` (optional chips: file picker, side-by-side, ignore order). Defer suggested slugs `compare-two-word-documents`, `json-diff-checker` (YAML/XML as chips later), and `excel-compare-online` until explicitly named; they do not take the weekly attack slot. Drop compare-and-contrast essays, brand navigation, and IDE/library queries. Do not register a doorway `compare-text` URL. Pool +10 rows; no work-tasks created.

[actions]
- Wrote `docs/seo/keywords/text-diff/2026-09-01-compare-text-scene-slugs.md` and theme READMEs
- Captured Bing batch `2026-09-01-compare-text-scene-serp` via `ops/seo/bing_serp`
- Appended 10 rows to `docs/seo/keyword-daily-pool.tsv`; updated `keyword-to-tool-tracker.md`
