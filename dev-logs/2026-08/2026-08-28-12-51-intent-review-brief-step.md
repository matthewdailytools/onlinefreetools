Date: 2026-08-28 12:51
Summary: Added a mandatory user-intent review step (0i) to tool briefs so agents check whether the brief meets the searcher’s job and whether it over-scopes, then rewrite How and UI boundaries before marking ready.

[question]
在规则中增加“从用户意图review 立项是否满足和超出预期并优化” 步骤

[try to solve]
New hard gate after keyword coverage (0b) and before `02=ready`: review three layers (site-owner request, head-query searcher task, Planner head terms), classify meet / partial / over-scope / deliberately unmet, and rewrite How, primary vs secondary UI, FAQ, and description. Coverage-table green is not a substitute.

Canonical rule is `work-tasks-tool-brief.mdc` step 5 plus the “用户意图审查” section. Mirrored in localization 0i, tool-coverage-pass, tool-creation checklist, work-tasks templates, and `coverage:gate` 0b (filled section required when present; legacy briefs without the section still skip).

[actions]
- Updated `.cursor/rules/work-tasks-tool-brief.mdc`, `tool-i18n-localization.mdc`, `tool-creation.mdc`
- Updated `.cursor/skills/tool-coverage-pass/SKILL.md`, `work-tasks/_template/`, `work-tasks/README.md`
- Extended `scripts/lib/title-coverage-heuristics.mjs` and coverage validators
- Filled the new 02/03 fields on `measuring-magnetic-fields`
