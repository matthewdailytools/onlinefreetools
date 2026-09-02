Date: 2026-09-02 21:38
Summary: Pivoted sketch-prompt-generator from pencil/line-art image prompts to Sketch.app (Mac design tool) AI operation prompts across fields, copy, and locales.
Visibility: people

[question]
修改为第一种：Prompt 让 AI 去操作 Sketch.app（设计软件）出图

[try to solve]
## Context
User confirmed the product intent should be prompts that instruct chat AIs to operate Sketch.app (Bohemian Coding / Sketch B.V. Mac UI design software) for artboards, symbols, and export — not Midjourney-style pencil/line-art image prompts.

## Process
1. Rewrote `work-tasks/sketch-prompt-generator/02-tool-info.md` and `03-locale-briefs.md` (0b/0i, Planner long-tail note: original S1 line-art intentionally unsatisfied → Midjourney FAQ).
2. Replaced UI fields `medium/stroke/composition/artist_ref` with `goal/artboard/symbols/export_ops` in Page + `SKETCH_PROMPT_PRESET`.
3. Role/task assembly text now names Sketch.app ops and explicitly excludes Midjourney/line-art.
4. Related tools → `product-design-prompt-builder`, `prompt-template-builder`, `midjourney-prompt-builder`.
5. Rewrote ten-locale i18n (Sketch.app brand kept; no 素描/croquis as product name); FAQ disambiguation; References → sketch.com docs + developer.sketch.com.
6. Updated README + topic table row; `coverage:gate` 0b/2/4 green; `build:site` prerender shows Sketch.app H1.

## Root cause / analysis
Earlier shipping used Planner S1 “sketch” as drawing style. User override is authoritative for product meaning; SEO risk of mismatch with historical Planner bucket is documented as intentional pivot with FAQ boundary.

## Solution
Live tool meaning: paste-ready prompts for AI-guided Sketch.app steps. Line-art seekers are pointed to Midjourney prompt builder. Local + optional Cloudflare AI unchanged.

## Notes / boundaries
- Page does not launch Sketch.app or run plugins.
- `verify:tool` may still fail site-wide SEO WARNs on unrelated web-check tools; sketch-specific description WARN fixed.
- Isolation for shared preset/README needs `CROSS_TOOL_UPDATE=1` when checking.

[actions]
- Updated work-tasks, Page, presets, catalog related, ten i18n shards, README, topic md
- Ran coverage:gate all phases; build:site; lint:tool-page; isolation with CROSS_TOOL_UPDATE=1
