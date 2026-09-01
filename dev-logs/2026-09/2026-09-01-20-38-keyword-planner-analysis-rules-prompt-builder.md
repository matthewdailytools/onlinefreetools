Date: 2026-09-01 20:38
Summary: Saved a reusable Keyword Planner classification playbook and applied it to the prompt-builder 98-keyword export (0 build; absorb into prompt-template-builder).
Visibility: people

[question]
综合之前的对 keywords/prompt-builder 的keyword planner进行归类分析，并给出保存分析规则，后续直接沿用或迭代

[try to solve]
## Context
`docs/seo/keywords/prompt-builder/` held only a Google Keyword Planner CSV (98 rows, 12 ad groups). Prior theme batches (CIDR, magnets, text-diff/Compare-Text, social-share) already used a shared but undocumented workflow: volume buckets → drop noise → §3.3 H job types → harvest/absorb → optional SERP. The ask was to classify this CSV with that method and persist the rules so later themes reuse or iterate one playbook instead of reinventing steps.

Catalog already has `/tools/prompt-template-builder`: local Role/Task/Constraints/Output structuring, **not** an LLM prompt generator.

## Process
1. Re-read Skill `keyword-to-tool-funnel`, long-tail strategy §3.3, and authoritative analyses for CIDR and text-diff as structural templates.
2. Parsed the prompt-builder CSV (BOM-aware): volume bands 3×(1k–10k), 16×(100–1k), 67×(10–100), 12×(0–10); ad groups are synonym clusters (Free/Online/Maker/Creator), not scenes.
3. Built job-type table (A structure template → existing slug; B LLM invent; C image/Midjourney; D writing/character; E random; F text→structure; G Copilot scene; H head synonyms).
4. Wrote durable playbook `docs/seo/keyword-planner-analysis-rules.md` and theme authority `keywords/prompt-builder/2026-09-01-prompt-builder-keyword-planner.md`.
5. Wired playbook into keywords README, Skill, ops §2.5/§2.6, funnel docs, strategy §3.3 F note, tracker + ~10 pool rows. No `work-tasks/`, no SERP claim of `long_gap`.

## Root cause / analysis
Ad-group labels look like product lines but are doorway fuel if used to split URLs. The real split is **controls**: structuring fields (already shipped) vs calling a model vs image-parameter builders vs writing randomizers vs agencies. Head terms `ai prompt generator` / `prompt maker` (1k–10k) must not become H1; existing H1 **Prompt template builder** already differentiates. Without Bing/Google SERP, competition stays provisional `head` and verdicts stay absorb/defer/drop.

## Solution
| Deliverable | Path |
|---|---|
| Reusable rules | `docs/seo/keyword-planner-analysis-rules.md` |
| This-batch analysis | `docs/seo/keywords/prompt-builder/2026-09-01-prompt-builder-keyword-planner.md` |
| Theme README | `docs/seo/keywords/prompt-builder/README.md` |
| Pool + tracker | `keyword-daily-pool.tsv` (+10) · `keyword-to-tool-tracker.md` |

**Verdict for the batch**: **0 build**. Absorb structured/builder/templates/create/maker·creator/text-to-structure/Copilot into `prompt-template-builder`. Drop services, brand `betterprompt`, “best/pro”. Defer Midjourney, writing dialogue/character, random generator until named + SERP.

**How to reuse next theme**: drop CSV under `keywords/{theme}/` → tell the agent to follow `keyword-planner-analysis-rules.md` → expect authority md + ~10 pool rows + tracker line; iterate the playbook’s revision log when hard steps change.

## Notes / boundaries
- No SERP this round → do not mark `long_gap` or week attack.
- Do not auto-open `work-tasks/` for absorb-only findings.
- Later copy changes on `prompt-template-builder` should fill the Ads/Planner long-tail table in `02` (text + capability), still without chasing generator H1.

[actions]
- Added `docs/seo/keyword-planner-analysis-rules.md`
- Added `docs/seo/keywords/prompt-builder/2026-09-01-prompt-builder-keyword-planner.md` + README
- Updated keywords README, Skill, ops, funnel, strategy link, tracker, keyword-daily-pool.tsv, `keyword-to-tool-funnel.mdc`
