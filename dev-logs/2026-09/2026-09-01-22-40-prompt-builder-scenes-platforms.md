Date: 2026-09-01 22:40
Summary: Added movie, short-drama, Android, and iOS scene chips to prompt-template-builder and named ChatGPT/Gemini/Claude/DeepSeek on-page without splitting URLs.

[question]
1、增加电影，短剧，Android，iOS编程的场景；2、ChatGPT / Gemini / Claude / DeepSeek平台名在description和页面体现

[try to solve]
## Context
The prompt-builder topic previously marked movie/short-drama/mobile code as “no Planner evidence → do not invent,” and blocked platform-specific generator URLs as doorway risk. The user asked to add those four usage scenes and to surface the four chat platforms in copy and UI—while keeping one builder URL.

## Process
1. Read `prompt-template-builder` page, en/zh i18n, and topic/planner docs.
2. Added five first-screen **scene preset chips** on `/tools/prompt-template-builder`: Code review (default), Feature film, Short drama, Android code, iOS code. Each chip fills Role/Task/Constraints/Output and auto-builds Markdown.
3. Added a visible **platforms lead** under the H1 summary naming ChatGPT, Gemini, Claude, and DeepSeek; updated description, How, FAQ q6, Rules, and six Use cases across **ten locales**.
4. Updated SEO docs: planner scenes S8–S12 (film / short drama / Android / iOS / four platforms absorb into S0); topic doc clarifies platforms must appear in copy but **must not** get separate slugs.
5. Ran `tool:touch`, `merge:tools`, and `lint:tool-page --require-html` (green).

## Root cause / analysis
Planner CSV still has zero volume for film/mobile scenes, but product intent overrides “wait for CSV” when scenes share the same four-field control surface. Platform names belong in description and first screen for user clarity; separate `/chatgpt-…` URLs would be scaled doorway pages with no control difference.

## Solution
- **Live page**: scene chips + platform line + FAQ “Can I use this with ChatGPT, Gemini, Claude, or DeepSeek?”
- **SEO**: absorb S8–S11 via chips/use cases; S12 via description + visible copy (no new URLs)
- **Still defer**: video/thesis until Planner evidence; no per-platform generator slugs

## Notes / boundaries
- Preset Role/Task bodies stay English (common for AI prompts); chip labels are localized in ten languages.
- Run `npm run build:site` before ship if prerendered HTML must refresh in `public/_pages/`.

[actions]
- `src/pages/promptTemplateBuilderPage.ts`: scene chips + PRESETS
- `src/site/i18n/tools/prompt-template-builder/*`: ten-locale copy
- `docs/seo/keywords/prompt-builder/*`: planner, topic, README
- `src/site/tool-catalog.d/prompt-template-builder.json`: updatedAt via tool:touch
