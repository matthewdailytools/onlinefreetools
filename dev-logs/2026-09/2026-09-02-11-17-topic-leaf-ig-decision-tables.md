Date: 2026-09-02 11:17
Summary: Shipped Information Gain on all 18 `/topics/{id}` leaves: grouped decision tables, workflows, cluster examples, best-for cards, and ten-locale copy; choose/guide prose is no longer rendered.
Visibility: people

[question]
执行进行优化topic页面

[try to solve]
## Context

Topic leaves at `/topics/{id}` were still thin after a same-day guide+FAQ pass: 18 pages shared one isomorphic template (intro → choose → limits → guide → homepage cards → FAQ×4). A second analysis showed a larger directory-farm risk (`/where-to-use-tools` and `/tool-type`), but the user asked to thicken topics first and **not** 301/noindex taxonomy without a separate confirmation.

Quality bar for this ship: every named tool must have at least one sentence that is **false on the homepage card** (required inputs, failure mode, or “use another slug”). Tables are a format, not the gain. Do not clone tool-page formulas. Do not add empty isomorphic tables. H1 is a decision question; nav `label` stays a short tag.

## Process

1. Added a catalog-aligned structure module (`scripts/site/topic-ig.mjs`): per topic, `groups[].slugs`, ordered `workflow`, `relatedTopics`, optional `citations`, `ymyl` / `localCluster`. Prompt cluster workflow is two steps (`prompt-template-builder` then `writing-prompt-generator`). Science workflow is velocity then acceleration.
2. Rewrote the leaf renderer (`scripts/site/components/content-topics.mjs`):
   - Does **not** render choose or guide bodies.
   - Grouped decision tables (job / link to `/tools/{slug}` / need / skip).
   - Ordered workflow (`<ol>`) only when there are at least two steps.
   - Cluster numeric/process example.
   - Limits plus related-topic links and clickable authority URLs (WHO on health).
   - Primary cards grouped with best-for blurbs (`topic_*_card_*`), not `homeDesc`.
   - Secondary cards use a why-this-is-secondary line.
3. Authored EN and ZH independently, then eight more locales (`es`/`ar`/`pt` plus `id`/`fr`/`ja`/`ru`/`de`) with the same keys. Generator `scripts/site/build-topic-ig.mjs` flattens to `scripts/site/i18n-topic-ig.mjs` and checks: every primary slug in a table row, every secondary slug has a why, flow length matches structure, FAQ = 4, English meta `desc` 120–160 characters.
4. Merged IG last in `t()` so title/desc/intro/FAQ from IG override older topic + guide shards. i18n merge order: topic → guide → **IG**.
5. English `business-finance` meta desc was 165 characters; shortened to the 120–160 gate, then regenerated.
6. `npm run build:site:full` (this repo has no `build:site` alias). Spot-checked prerendered HTML. `lint:seo` passed (existing title/orphan warnings only).

## Root cause / analysis

Homepage cards already say what a tool *is*. Repeating tool names in a “how to pick” paragraph adds tokens, not facts. SERP PDF hubs already show feature matrices; a second matrix of card titles would be zero incremental value. The incremental facts live in **need** (what you must already have) and **skip** (when this slug fails or another slug is the job). Grouping by sub-job (merge vs compress vs protect; platform size vs generic compress) stops one giant isomorphic table.

Choose vs guide had high lexical overlap; rendering neither avoids the same paragraph twice. FAQ now answers questions the table cannot (rights/DRM, “is this a diagnosis”, upload policy), not a fifth recitation of slugs.

Taxonomy leaves remain homepage clones. That is a scaled-content risk, but changing their indexability is a product decision (301 vs noindex vs unique modules) and was **out of scope**.

## Solution

Live leaf shape (example: English `/topics/pdf-docs`):

- H1: “Merge, compress, or protect: which PDF step first”
- Grouped tables with tool links (`/tools/merge-pdf`, etc.)
- Workflow: merge → organize → compress once → protect last
- Worked example: 12-page pack vs 8 MB email cap
- Cards use table “need” facts, not home blurbs
- `#topic-ig-table` (old `#topic-guide` id retired)

Health (zh) includes a WHO obesity/overweight fact-sheet link. Japanese chrome is Japanese (not Portuguese leftovers from an earlier scaffold).

Regenerate copy with `npm run build:topic-ig` after editing `topic-ig-copy-*.mjs`. That script is **not** wired into `build:site:full`; the generated `i18n-topic-ig.mjs` is what pages read.

## Notes / boundaries

- Did **not** 301 or noindex `/where-to-use-tools` or `/tool-type`. Confirm before any crawl change.
- Did **not** add FAQPage schema for rich results (FAQ rich results retired). Visible Q&A remain for humans.
- `lint:taxonomy` still fails on pre-existing `writing-prompt-generator: missing/invalid scenario writing`; unrelated to this topic pass.
- Interactive browser click-through was not available in this session; verification was prerendered HTML + renderer smoke tests.
- Old choose/guide i18n keys remain in shards so a rollback is possible; they are unused in the leaf template.

[actions]
- Added `scripts/site/topic-ig.mjs`, `build-topic-ig.mjs`, `topic-ig-copy-en.mjs`, `topic-ig-copy-zh.mjs`, `topic-ig-copy-rest*.mjs`, generated `i18n-topic-ig.mjs`.
- Updated leaf renderer, tool-card `desc` override, `i18n.mjs` merge, `public/styles/site.css`, `package.json` script `build:topic-ig`.
- Regenerated site with `npm run build:site:full`; rebuilt topic HTML after `#topic-ig-table` id change; gzipped `_pages`.
