Date: 2026-08-08 15:10
Summary: Rules now require a hard pre-checklist pass analyzing slug, title, keywords, and desc for search habit and keyword coverage before any engineering/page/launch checklists.

[question]
把规则修改为：生成清单前再一次对slug， title，关键词，desc，分析是否符合用户搜索习惯和关键词覆盖进行优化覆盖优化

[try to solve]
已把「清单前检索覆盖优化」写成硬门禁（Agent/人工按清单分析回写，非 lint 自动替代）：

- **步 0b**（`tool-i18n-localization.mdc`）：在勾选/生成页面模块清单、工程清单、上线前 Checklist、README 工具清单之前，必须分析并优化 **slug / title / 关键词 / desc**，产出覆盖表；未完成不得 `02`→`ready`。
- 文案生成后的步 2 / 步 4 **仍然保留**（生成后再优化）。
- 同步：`work-tasks-tool-brief.mdc`、`tool-creation.mdc`、`tool-i18n-seo.mdc`、`project-core.mdc`；模板 `02` 增加覆盖表专节、`03` 增加勾选与多轮行。

[actions]
- Updated `.cursor/rules/tool-i18n-localization.mdc`, `work-tasks-tool-brief.mdc`, `tool-creation.mdc`, `tool-i18n-seo.mdc`, `project-core.mdc`
- Updated `work-tasks/_template/02-tool-info.md`, `03-locale-briefs.md`
