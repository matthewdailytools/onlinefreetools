Date: 2026-09-01 20:47
Summary: Removed the ~10-row cap on keyword-daily-pool; batch conclusions may all enter the pool.
Visibility: people

[question]
剔除词池约 10 行 的限制

[try to solve]
## Context
Playbook and funnel docs capped each batch at ~10 rows in `keyword-daily-pool.tsv`. The user asked to drop that limit.

## Process
Updated active rules so pool append has **no row-count ceiling**: `keyword-planner-analysis-rules.md`, Skill `keyword-to-tool-funnel`, `ops/seo/keyword-to-tool-ops.md`, `keyword-to-tool-funnel.md`, long-tail strategy §4.2/§5, tracker checklist, `bing_serp` Next-steps template, prompt-builder analysis wording, and a related reviews note. Tracker decision log records the change.

## Root cause / analysis
The ~10 figure was a discovery cadence hint that agents treated as a hard cap. Cap constrained analysis fidelity; the real safety rails are week `build` ≤1–2, no doorway, and no `long_gap` without SERP—not pool length.

## Solution
- Pool: all batch conclusions may be appended; identical verdict/tier/placement near-synonyms may merge into one row.
- Unchanged: week build quota, absorb-first, no auto work-tasks.
- Historical SERP markdown Next-steps lines left as-is; new Bing batches get the updated template text.

## Notes / boundaries
Do not confuse “unlimited pool rows” with “unlimited new tool URLs.”

[actions]
- Updated playbook, Skill, ops, funnel, strategy, tracker, bing_serp `io_util.py`, prompt-builder analysis note
