Date: 2026-08-11 23:51
Summary: Added keyword-to-tool-funnel Skill and rule for discover-or-enrich workflow.

[question]
这是一个单独的规则或者说skill，目标是从关键词中寻找新的工具进行创建或者融入丰富已有的工具进行更新

[try to solve]
新增可执行 Skill `.cursor/skills/keyword-to-tool-funnel/SKILL.md`（目标：关键词→新建工具或 absorb 丰富已有；不自动建 work-tasks），以及编辑词池时触发的规则 `.cursor/rules/keyword-to-tool-funnel.mdc`；并挂入 project-core SEO 索引与 tracker/funnel/README。与 `tool-coverage-pass` 衔接：分析用本 Skill，真正创建/改 i18n 再走 coverage。

[actions]
- .cursor/skills/keyword-to-tool-funnel/SKILL.md
- .cursor/rules/keyword-to-tool-funnel.mdc
- .cursor/rules/project-core.mdc
- docs/seo/keyword-to-tool-tracker.md
- docs/seo/keyword-to-tool-funnel.md
- docs/seo/README.md
