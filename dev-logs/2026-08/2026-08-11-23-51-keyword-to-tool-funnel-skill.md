Date: 2026-08-11 23:51
Summary: Added keyword-to-tool-funnel Skill and rule for discover-or-enrich workflow.

[question]
这是一个单独的规则或者说skill，目标是从关键词中寻找新的工具进行创建或者融入丰富已有的工具进行更新

[try to solve]
Added executable Skill `.cursor/skills/keyword-to-tool-funnel/SKILL.md` (goal: keywords → new tools or absorb/enrich existing ones; does not auto-create work-tasks) and trigger rule `.cursor/rules/keyword-to-tool-funnel.mdc` when editing the pool; hooked into project-core SEO index and tracker/funnel/README. Bridges to `tool-coverage-pass`: use this Skill for analysis; use coverage when actually creating tools or changing i18n.

[actions]
- .cursor/skills/keyword-to-tool-funnel/SKILL.md
- .cursor/rules/keyword-to-tool-funnel.mdc
- .cursor/rules/project-core.mdc
- docs/seo/keyword-to-tool-tracker.md
- docs/seo/keyword-to-tool-funnel.md
- docs/seo/README.md
