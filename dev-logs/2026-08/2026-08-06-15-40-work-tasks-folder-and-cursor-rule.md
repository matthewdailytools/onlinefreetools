Date: 2026-08-06 15:40
Summary: Added work-tasks/ folder with templates and a Cursor rule for new-tool briefing.

[question]
新建一个工作任务文件夹，里面根据需要建的工具创建子文件夹，子文件夹下面根据提供的工具方向进行讨论生成新工具信息文档，将这个规则创建在.cursor下

[try to solve]
已落地：

1. `work-tasks/` — 新工具立项工作区
   - `README.md` 说明目录与流程
   - `_template/`：`00-request.md`、`01-direction-discussion.md`、`02-tool-info.md`
   - 每个待建工具复制为 `work-tasks/{kebab-slug}/`

2. `.cursor/rules/work-tasks-tool-brief.mdc`
   - 立项时先建夹写文档；对照工具方向 A/B/C；写满 IG 预审与卡片后状态 `ready`，再按 `tool-creation.mdc` 实现
   - globs: `work-tasks/**/*`

3. `project-core.mdc` 补充 `work-tasks/` 目录约定与文档优先级第 4 条

[actions]
- work-tasks/README.md, work-tasks/_template/*
- .cursor/rules/work-tasks-tool-brief.mdc
- .cursor/rules/project-core.mdc
