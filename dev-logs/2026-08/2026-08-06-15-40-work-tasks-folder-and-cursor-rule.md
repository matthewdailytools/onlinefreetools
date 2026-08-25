Date: 2026-08-06 15:40
Summary: Added the `work-tasks/` folder with templates and a Cursor rule for new-tool briefing.

[question]
新建一个工作任务文件夹，里面根据需要建的工具创建子文件夹，子文件夹下面根据提供的工具方向进行讨论生成新工具信息文档，将这个规则创建在.cursor下

[try to solve]
Shipped:

1. `work-tasks/` — new-tool briefing workspace
   - `README.md` describes layout and flow
   - `_template/`: `00-request.md`, `01-direction-discussion.md`, `02-tool-info.md`
   - Copy per pending tool to `work-tasks/{kebab-slug}/`

2. `.cursor/rules/work-tasks-tool-brief.mdc`
   - On intake, create the folder and docs first; map to direction A/B/C; fill IG pre-review and card, set status `ready`, then implement per `tool-creation.mdc`
   - globs: `work-tasks/**/*`

3. `project-core.mdc` gained `work-tasks/` directory convention and docs-priority item 4

[actions]
- `work-tasks/README.md`, `work-tasks/_template/*`
- `.cursor/rules/work-tasks-tool-brief.mdc`
- `.cursor/rules/project-core.mdc`
