Date: 2026-09-06 00:36
Summary: Cleared English/Spanish leftover pollution in short-drama and product-design prompt i18n shards, and localized sec_*/fmt short labels plus first-paint how copy across the related prompt tools.
Visibility: people

[question]
清理 `short-drama-prompt-generator` 与 `product-design-prompt-builder` 的非英语分片残留污染；顺手修 `writing-prompt-generator` 与 `prompt-template-builder` 的 sec_*/fmt_* 短标签，以及 still containing `first paint` / `Load sample already` 的 how_item。

[try to solve]
## Context
`node scripts/tmp/audit-prompt-i18n.mjs` flagged long-string leftovers (values length ≥ 12 identical to en or es). Short UI labels under 12 characters (Role / Task / Constraints / JSON / Markdown) were invisible to that length gate but still needed localization. Several How steps described “already ran on first paint” instead of an actionable Load sample click.

## Process
1. Read `tool-i18n-localization.mdc` and compared section labels with `sketch-prompt-generator` (fully localized Role/Task/Constraints/Output) versus `film-prompt-builder` (still English Role/Task but `sec_output` shortened so audit passes).
2. Rewrote polluted `short-drama-prompt-generator` locales `ru` / `ar` / `id` end-to-end from Spanish/Japanese content patterns and film’s tone, removing ES/EN mashups.
3. Localized `sec_role` / `sec_task` / `sec_constraints` / `sec_output` (and aligned `fmt_label`) for scoped short-drama (`ja`/`pt`/`de` plus rewritten langs), product-design (`id`/`pt`), and all non-en writing + prompt-template shards using the sketch label map.
4. Replaced How meta copy with actionable Load sample / Build steps; stripped `first paint` from en descriptions in the four tool folders; fixed remaining writing/prompt-template audit leftovers (pt Seed labels, ru result_label, pt scene_android).

## Root cause / analysis
- Partial locale pipelines left Spanish FAQ/UI blobs inside ru/ar/id short-drama shards.
- Audit skips values shorter than 12 characters, so Role/Task/Constraints stayed English even when longer copy was rewritten.
- How copy described implementation timing (“first paint”) instead of user actions.

## Solution
- Full rewrite: `short-drama-prompt-generator/{ru,ar,id}.ts`.
- Targeted value-only edits: short-drama `{ja,pt,de}`, product-design `{id,pt}`, writing + prompt-template all non-en `sec_*`, plus how/meta and a few leftover keys.
- Verification: audit CLEAN for the four slugs; `rg` finds no `first paint` / `Load sample already` under those tool trees.

## Notes / boundaries
- **JSON** and **Markdown** chip labels intentionally remain English proper nouns (same as sketch).
- Product-design long copy was already clean in audit before this pass; work there was mostly sec_* + how_item_1.
- Capability boundary unchanged: local assemble by default; optional Expand/Polish via Cloudflare Workers AI + Turnstile; catalog `localProcessing: false`.

[actions]
- Rewrote `src/site/i18n/tools/short-drama-prompt-generator/{ru,ar,id}.ts`
- Patched short-drama `{ja,pt,de}`, product-design `{id,pt}`, writing-prompt-generator (9 langs), prompt-template-builder (9 langs + en how/description)
- Verified with `audit-prompt-i18n.mjs` and `rg` meta check
