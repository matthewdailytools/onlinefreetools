Date: 2026-09-02 20:48
Summary: Confirmed that sketch-prompt-generator means hand-drawn/line-art sketch prompts, not Sketch.app UI design software; locale “素描/Skizze/croquis” readings are correct.
Visibility: people

[question]
sketch-prompt-generator 中，分析 sketch 是不是一个画画软件，其他语言理解成素描是否正确？

[try to solve]
## Context
User asked whether “sketch” in `sketch-prompt-generator` refers to Bohemian Coding’s Sketch design app, and whether translating it as “素描” (and equivalents) in other locales is correct.

## Process
1. Read catalog shard, `02-tool-info.md`, English/Chinese i18n, and SEO keyword planner notes under `docs/seo/keywords/prompt-builder/`.
2. Check UI fields and Example: Medium / Stroke / Composition / Artist ref; sample uses graphite, cross-hatching, Kim Jung Gi line economy.
3. Compare related tools (`midjourney-prompt-builder`, `film-prompt-builder`, `prompt-template-builder`) and topic copy (“线稿”).
4. Review ten-locale titles: zh 素描, de Skizzen, fr croquis, es boceto, pt esboço, id sketsa, ja スケッチ, ar للرسم — all art-drawing senses, not product-name Sketch.

## Root cause / analysis
English “sketch” is ambiguous (art sketch vs Sketch.app). Product evidence locks the art sense: hand-drawn look fields, S1 image cluster next to Midjourney, Planner phrase `sketch prompt generator`, internal label 线稿. Sketch.app would imply UI/prototyping prompts and different related tools — not present here.

## Solution
- Treat sketch as **drawing/line-art style**, not Sketch.app.
- Locale mappings to 素描 / Skizze / croquis / boceto / esboço / sketsa / スケッチ are **correct**.
- Optional zh nuance: “线稿” can be stronger for AI image search; “素描” remains valid and already used in H1.

## Notes / boundaries
- Do not rebrand H1 to “Sketch.app prompt” unless SERP/intent changes.
- Keep FAQ vs Prompt template builder; do not add UI-design software framing.

[actions]
- Analysis only; no code changes
