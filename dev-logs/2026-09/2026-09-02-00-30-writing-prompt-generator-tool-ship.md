Date: 2026-09-02 00:30
Summary: Shipped the writing-prompt-generator tool with four local prompt modes, ten-locale i18n, and full verify:tool gates.

[question]
writing-prompt-generator 立项实现

[try to solve]
## Context

The prompt-builder keyword funnel identified **writing prompt generator** as a build candidate: users want ready-made creative writing starters (dialogue, character, script beats, random mix) without sending drafts to a server. The parent cluster already has `prompt-template-builder` (structured templates + optional Workers AI expand/polish). This tool fills the **fiction/creative writing** intent with **100% local** generation.

## Process

1. **Brief & coverage** — Created `work-tasks/writing-prompt-generator/` with `02-tool-info.md` (marked `ready`) and `03-locale-briefs.md`. Ran `npm run coverage:gate -- --slug=writing-prompt-generator --phase=all` (0b + phase 2/4 tables).
2. **Catalog & page** — Added shard `src/site/tool-catalog.d/writing-prompt-generator.json` (`page.style: opts`, `localProcessing: true`, related: `prompt-template-builder`, `chatgpt-export-to-markdown`). Implemented `src/pages/writingPromptGeneratorPage.ts` with modes: Dialogue, Character, Script, Random; MD/JSON export; `loadSample()` dialogue preset; DOM prefix `wpg`.
3. **i18n** — Master `en.ts` plus nine locale rewrites (`zh`, `es`, `ar`, `pt`, `id`, `fr`, `ja`, `ru`, `de`), 88 keys each under `src/site/i18n/tools/writing-prompt-generator/`.
4. **Cross-link** — Added `writing-prompt-generator` to `prompt-template-builder` catalog `related`. Updated README tool lists (zh/en).
5. **Build fix** — First `verify:tool` failed in `renderHeader` (`replaceAll` on undefined). Aligned header/sidebar/footer args with `promptTemplateBuilderPage.ts`: `brandHref`, `enabledLangs`, sidebar `{ title, groups, id }`, footer `{ lang }` only.
6. **Ship gate** — `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=writing-prompt-generator` passed (coverage, merge, build:site, HTML smoke, lint:seo, isolation).

## Root cause / analysis

- **Intent split**: `prompt-template-builder` targets reusable instruction templates and optional AI polish; **writing-prompt-generator** targets creative fiction starters with deterministic local combinatorics — no Worker AI dependency, lower abuse surface.
- **Layout bug**: New page copied an older `renderHeader` signature; site layout now expects `brandHref` + `enabledLangs` instead of passing raw `defaultLang` into header helpers.

## Solution

| Area | Path / behavior |
| --- | --- |
| Slug | `writing-prompt-generator` |
| Modes | Dialogue, Character, Script, Random |
| Privacy | All generation in browser; `localProcessing: true` |
| Output | Markdown or JSON; copy + download |
| Locales | 10 (en master + 9 rewrites) |
| Related | ↔ `prompt-template-builder`, `chatgpt-export-to-markdown` |

Production deploy: run usual Cloudflare Pages pipeline after commit; no new Worker bindings required for this tool.

## Notes / boundaries

- Does **not** call Workers AI or Turnstile — purely client-side.
- Topic hub `ai-prompt-template-builder` and `midjourney-prompt-builder` remain separate backlog items.
- Icon: `public/icons/tools/writing-prompt-generator.svg`.

[actions]
- Added catalog shard, page, icon, ten locale i18n shards, work-tasks briefs
- Cross-linked `prompt-template-builder.json` related; README tool lists
- Fixed `writingPromptGeneratorPage.ts` layout render args
- `npm run merge:tools`, `npm run build:site`, `verify:tool` OK
