Date: 2026-08-08 19:31
Summary: Implemented multi-tool auto coverage workflow (0b / step 2 / step 4) with coverage:gate, Skill, rules, and backfilled 1b/2b rows.

[question]
多工具创建自动完成检索覆盖（0b / 步 2 / 步 4）— Implement the plan as specified.

[try to solve]
已按计划落地三层叠加：Plan 分阶段 todos 模板 + Skill `tool-coverage-pass` + `npm run coverage:gate` 产物门禁。

- 新增 `scripts/validate-tool-coverage-rounds.mjs`（phase=`0b|2|4|all`）与 `package.json` 的 `coverage:gate`
- 模板 `02`/`03` 预置覆盖表说明与多轮行 ID（`0b`/`1b`/`2b`）
- `lint:seo` 对 catalog 中有「清单前检索覆盖」专节的工具跑 coverage rounds；去掉硬编码 `FORCE_TITLE_SLUGS`（有专节即强制）
- Skill：`.cursor/skills/tool-coverage-pass/SKILL.md`；同步 `tool-creation` / `work-tasks-tool-brief` / `tool-i18n-localization` / `tool-i18n-seo` / copilot；多工具 Plan 禁止「一次实现全部」
- 回归：为 18–24 及带专节的 brand/wcag 等补齐 `03` 多轮 `1b`/`2b`（含 `wcag-contrast-checker` 新增「多轮记录」）；`coverage:gate` / `lint:seo` 全绿（旧工具仅 COVER-WARN）

[actions]
- scripts/validate-tool-coverage-rounds.mjs（新增）
- scripts/validate-tool-seo.mjs / scripts/validate-tool-title-coverage.mjs / package.json
- work-tasks/_template/02-tool-info.md、03-locale-briefs.md
- .cursor/skills/tool-coverage-pass/SKILL.md
- .cursor/rules/tool-creation.mdc、work-tasks-tool-brief.mdc、tool-i18n-localization.mdc、tool-i18n-seo.mdc
- .github/copilot-instructions.md
- work-tasks/*/03-locale-briefs.md（18–24 及 brand/wcag 等补齐多轮行）
- npm run coverage:gate / lint:seo
