Date: 2026-09-10 21:03
Summary: Removed weekly shipping-capacity language from sound-editor doc 12; sequencing and 立项口令 remain.
Visibility: project

[question]
文档中剔除每周产能限制

[try to solve]
## Context

Doc 12 still framed planning as “1–2 full-IG tools per week” and used “this week” as the unit for not auto-building pages.

## Process

Searched `docs/sound-editor/` for 周产能 / 周 1–2 / 本周 KPI. The cap lived in 12 only (heading §5, 建 URL, Planner 档, 开始条件). 11/02/06 had no remaining weekly site-tool quota.

## Solution

Dropped the weekly quota. Kept: no auto-schedule from the inventory, 立项口令, full IG, synonym doorway, P0–P3 order, serial page/i18n (coverage quality, not a weekly cap).

[actions]
- Edited `docs/sound-editor/12-slug-hub-and-scene.md`
