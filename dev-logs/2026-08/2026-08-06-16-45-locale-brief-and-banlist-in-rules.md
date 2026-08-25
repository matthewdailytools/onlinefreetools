Date: 2026-08-06 16:45
Summary: Solidified the per-locale brief template and ban-list into the localization rule and work-tasks templates.

[question]
把上述「每语 brief 模板 + 禁词表」固化进 tool-i18n-localization.mdc 和 work-tasks 模板

[try to solve]
Locked the scheme into durable docs:

1. `.cursor/rules/tool-i18n-localization.mdc` — per-locale brief fields, banned words/patterns, agents must rewrite from brief (not Translate), ≥3 review rounds.
2. `work-tasks/_template/03-locale-briefs.md` — ten-locale fill-in, shared ban-list checkboxes, multi-round checklist.
3. Synced: `02-tool-info.md`, `work-tasks/README.md`, `work-tasks-tool-brief.mdc` (directory and workflow include `03`).

[actions]
- .cursor/rules/tool-i18n-localization.mdc
- .cursor/rules/work-tasks-tool-brief.mdc
- work-tasks/_template/03-locale-briefs.md
- work-tasks/_template/02-tool-info.md
- work-tasks/README.md
