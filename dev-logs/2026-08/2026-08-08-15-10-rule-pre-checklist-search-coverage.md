Date: 2026-08-08 15:10
Summary: Rules now require a hard pre-checklist pass analyzing slug, title, keywords, and desc for search habit and keyword coverage before any engineering/page/launch checklists.

[question]
把规则修改为：生成清单前再一次对slug， title，关键词，desc，分析是否符合用户搜索习惯和关键词覆盖进行优化覆盖优化

[try to solve]
Codified “search-coverage optimization before checklists” as a hard gate (Agent/human analyze and write back per checklist; lint does not replace it):

- **Step 0b** (`tool-i18n-localization.mdc`): Before checking/generating page-module, engineering, or pre-launch checklists, or the README tool list, you must analyze and optimize **slug / title / keywords / desc** and produce a coverage table; without that, `02` must not move to `ready`.
- Post-copy steps 2 and 4 **remain** (optimize again after generation).
- Synced: `work-tasks-tool-brief.mdc`, `tool-creation.mdc`, `tool-i18n-seo.mdc`, `project-core.mdc`; template `02` gained a coverage-table section; `03` gained checkboxes and multi-round rows.

[actions]
- Updated `.cursor/rules/tool-i18n-localization.mdc`, `work-tasks-tool-brief.mdc`, `tool-creation.mdc`, `tool-i18n-seo.mdc`, `project-core.mdc`
- Updated `work-tasks/_template/02-tool-info.md`, `03-locale-briefs.md`
