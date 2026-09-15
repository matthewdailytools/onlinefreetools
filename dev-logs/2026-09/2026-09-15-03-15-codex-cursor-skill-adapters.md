Date: 2026-09-15 03:15
Summary: Added Codex-native adapters and a mandatory preflight so repository Cursor skills are consistently applied.
Visibility: people

[question]
根据方案进行优化修改

[try to solve]
## Context

The repository keeps durable tool workflows in `.cursor/skills`, while Codex
uses `AGENTS.md` and its native skill discovery mechanism. Relying only on prose
links in `AGENTS.md` left room for an agent to begin implementation before
identifying every applicable Cursor workflow.

## Process

The existing five Cursor skills were read in full to preserve their actual
trigger boundaries. Thin Codex adapters were then added under `.agents/skills`.
Each adapter has focused discovery metadata and points to one canonical Cursor
skill instead of copying its instructions. The root agent instructions were
also extended with a mandatory preflight and an explicit skill trigger matrix.

## Root cause / analysis

Cursor frontmatter such as `alwaysApply` and `globs` is not a portable
substitute for Codex-native skill discovery. Copying complete workflows into a
second directory would make discovery easier but create two sources of truth
that could drift. A thin adapter preserves native discovery while keeping the
Cursor workflow canonical.

## Solution

Five adapters now cover keyword funnel analysis, tool coverage passes,
single-tool token efficiency, converter landing-page SEO, and converter input
UI. `AGENTS.md` now requires agents to classify the task, identify and fully
read matching skills, load their required rules, announce active skills before
editing, repeat the preflight if scope expands, and report executable gate
results at completion.

All five adapters passed the skill-creator validation tool. Their canonical
relative links were checked, the root instructions contain exactly one
mandatory preflight section, and `git diff --check` passed.

## Notes / boundaries

The adapters intentionally contain no duplicated workflow details. Cursor
skills remain authoritative, so future workflow changes should normally be
made only in `.cursor/skills`; adapter metadata needs updating only when a
skill's trigger scope changes. No tool page, catalog entry, localization, or
deployment behavior was changed.

[actions]
- Added five Codex-native adapter skills under `.agents/skills/`.
- Added mandatory skill preflight, composition rules, and completion reporting to `AGENTS.md`.
- Validated skill structure, canonical links, duplicate headings, and diff formatting.
