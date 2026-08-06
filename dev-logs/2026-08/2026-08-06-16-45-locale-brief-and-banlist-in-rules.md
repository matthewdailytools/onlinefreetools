Date: 2026-08-06 16:45
Summary: Solidified per-locale brief template and ban-list into localization rule and work-tasks templates.

[question]
把上述「每语 brief 模板 + 禁词表」固化进 tool-i18n-localization.mdc 和 work-tasks 模板

[try to solve]
已固化：

1. `.cursor/rules/tool-i18n-localization.mdc` — 每语 brief 字段、禁词/禁模式表、Agent 须「按 brief 重写」勿 Translate、≥3 轮核查
2. `work-tasks/_template/03-locale-briefs.md` — 十语填空 + 共用禁词勾选 + 多轮记录表
3. 同步：`02-tool-info.md`、`work-tasks/README.md`、`work-tasks-tool-brief.mdc`（目录与工作流含 03）

[actions]
- .cursor/rules/tool-i18n-localization.mdc
- .cursor/rules/work-tasks-tool-brief.mdc
- work-tasks/_template/03-locale-briefs.md
- work-tasks/_template/02-tool-info.md
- work-tasks/README.md
