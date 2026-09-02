Date: 2026-09-02 15:30
Summary: Topic leaf H1 for ai-prompt-template-builder now names prompt builders/generators and every scene; rules and lint block “which X page” titles.
Visibility: people

[question]
http://localhost:8787/en/topics/ai-prompt-template-builder/ 页面title 机器翻译过于明显，应该把场景都说清楚，另外不是 prompt page，而是prompt builder/generator， 分析产生这样问题的原因，并在规则中避免其他工具和topic的内容生成中出现相同类似的问题

[try to solve]
## Context

The English topic leaf at `/en/topics/ai-prompt-template-builder/` rendered H1/title as **“Writing, Midjourney, or iOS agent: which prompt page”**. That reads like a calque of the Chinese **“写作、Midjourney，还是 iOS 智能体：选哪张提示词页”**: a site-navigation question, a generic “page” product noun, and only three of nine scene tools.

## Process

1. Traced the live string to `scripts/site/topic-ig-copy-*.mjs` (flattened by `build:topic-ig` into `i18n-topic-ig.mjs`, merged last in `t()` so it overrides the older hub title “AI prompt template builder & generator tools”).
2. Compared with the same-day topic IG pass (`dev-logs/2026-09/2026-09-02-11-17-topic-leaf-ig-decision-tables.md`), which instructed **“H1 is a decision question”** and used an `A, B, or C: which X …` skeleton across 18 leaves.
3. Confirmed localization globs did **not** include `topic-ig-copy-*.mjs`, so agents writing topic copy were not loaded with `tool-i18n-localization.mdc`.
4. Rewrote all ten locale H1s to name **builder/generator** (local search wording) and list the independent scenes (writing, Midjourney, sketch, film, short drama, product design, Android, iOS). Also fixed the same chrome-noun bug on English/Chinese `text-compare` (`which compare page` / 选哪张对比页).
5. Encoded the failure mode in rules (`tool-i18n-localization.mdc`, `tool-i18n-seo.mdc`, `seo-html-defaults.mdc`, `AGENTS.md`) and in `lint:seo` via `scripts/lib/topic-title-heuristics.mjs`. Regenerated IG i18n, rebuilt topic HTML, gzipped `_pages`. `lint:seo` reports `Topic leaf title validator: OK`.

## Root cause / analysis

Three stacked mistakes, not a single bad string:

1. **Wrong H1 template.** The topic IG pass treated every leaf H1 as a “which X first” decision question. For BMI vs TDEE that can still name the user’s job. For this cluster it became “which **page**”—chrome, not a search query. Users look for *prompt builder* / *prompt generator*.
2. **Cherry-picked scenes to fit “A, B, or C”.** Nine tools (generic template + writing + Midjourney + sketch + film + short drama + product design + Android + iOS) were reduced to Writing / Midjourney / iOS so the title stayed short and parallel. That hides the actual scene set.
3. **Isomorphic translation + missing rule load.** English tracks the Chinese “选哪张…页” skeleton (`página de prompt`, `Prompt-Seite`, `プロンプトページ`, Arabic even drifted to **صفحة أمر** “command page”). Topic copy files were outside localization globs, so the existing “rewrite, don’t translate” rule never fired on this pass.

`lint:seo` previously had no topic-H1 heuristic, so the bad titles shipped green.

## Solution

**Live English H1 / `<title>` (before brand):**  
`AI prompt builders and generators for writing, Midjourney, sketch, film, short drama, product design, Android, and iOS`

Chinese and the other eight locales follow the same facts (product type + full scene list) with local wording, not a locked English frame.

**Rules (durable):** Title/H1 must use the **search product type**, never `page`/`页` as the product name; scene clusters must name the independent scenes (or a grouping that covers the whole set); topic H1 is not required to be a decision question; do not calque “选哪张 X 页”. `AGENTS.md` now tells agents to load localization rules when editing `/topics` copy.

**Gate:** `checkTopicLeafTitle` runs in `build:topic-ig` (before flatten) and `validateTopicLeafTitles` in `lint:seo` (on generated keys). Prompt cluster titles must match local builder/generator words and hit at least six of eight scene tokens.

## Notes / boundaries

- Other topic H1s that ask a **user-job** question (“BMI, TDEE, or macros: which health number first”) were left in place; only chrome-noun titles (`prompt page`, `compare page`) were rewritten.
- Nav short label `topic_ai_prompt_template_builder` remains “AI prompt tools”.
- Local wrangler on `:8787` did not respond during this pass (probe hung). Disk HTML is updated under `public/_pages/{lang}/topics/ai-prompt-template-builder.html`; seeing it in the browser needs a healthy `start:dev` and local R2 seed (`upload:r2:local` if the bucket still has the old gzip).
- Did not rewrite remaining “decision question” H1s across all 18 topics; the new rule applies to future tool and topic copy.

[actions]
- Updated `tool-i18n-localization.mdc`, `tool-i18n-seo.mdc`, `seo-html-defaults.mdc`, `project-core.mdc`, `AGENTS.md`, `.github/copilot-instructions.md`.
- Added `scripts/lib/topic-title-heuristics.mjs` and `scripts/validate-topic-leaf-titles.mjs`; wired into `build-topic-ig.mjs` and `lint:seo`.
- Rewrote prompt-cluster titles in `topic-ig-copy-en.mjs` / `zh` / rest locales; English/Chinese `text-compare` titles; regenerated `i18n-topic-ig.mjs`; rebuilt and gzipped topic `_pages` HTML.
