Date: 2026-08-08 19:31
Summary: Implemented multi-tool auto coverage workflow (0b / step 2 / step 4) with coverage:gate, Skill, rules, and backfilled 1b/2b rows.

[question]
多工具创建自动完成检索覆盖（0b / 步 2 / 步 4）— Implement the plan as specified.

[try to solve]
Landed the planned three-layer stack: Plan phased todos template + Skill `tool-coverage-pass` + `npm run coverage:gate` artifact gate.

- Added `scripts/validate-tool-coverage-rounds.mjs` (`phase=0b|2|4|all`) and `coverage:gate` in `package.json`
- Templates `02`/`03` pre-seed coverage-table notes and multi-round row IDs (`0b`/`1b`/`2b`)
- `lint:seo` runs coverage rounds for catalog tools that have a “pre-checklist search coverage” section; removed hardcoded `FORCE_TITLE_SLUGS` (section presence forces the check)
- Skill: `.cursor/skills/tool-coverage-pass/SKILL.md`; synced `tool-creation` / `work-tasks-tool-brief` / `tool-i18n-localization` / `tool-i18n-seo` / copilot; multi-tool Plans must not “implement everything in one shot”
- Regression: backfilled `03` multi-round `1b`/`2b` for 18–24 and sectioned brand/wcag tools (including new multi-round block on `wcag-contrast-checker`); `coverage:gate` / `lint:seo` green (older tools COVER-WARN only)

[actions]
- scripts/validate-tool-coverage-rounds.mjs (new)
- scripts/validate-tool-seo.mjs / scripts/validate-tool-title-coverage.mjs / package.json
- work-tasks/_template/02-tool-info.md, 03-locale-briefs.md
- .cursor/skills/tool-coverage-pass/SKILL.md
- .cursor/rules/tool-creation.mdc, work-tasks-tool-brief.mdc, tool-i18n-localization.mdc, tool-i18n-seo.mdc
- .github/copilot-instructions.md
- work-tasks/*/03-locale-briefs.md (18–24 and brand/wcag multi-round rows)
- npm run coverage:gate / lint:seo
