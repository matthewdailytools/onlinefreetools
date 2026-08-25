Date: 2026-08-08 11:54
Summary: Added a hard rule that tool pages must configure and auto-run real sample results on load.

[question]
在规则中增加：页面配置实际运行的样例结果

[try to solve]
Added a hard section in `tool-creation.mdc`: “on-load sample must actually produce a result” (Load sample, auto-run on enter, visible result area, aligned with Example; exceptions must be documented in `02`), and added it to the ship Checklist. Synced into `work-tasks-tool-brief.mdc` and `_template/02-tool-info.md` as a required interaction-spec item. Reference implementations: `imageCompressPage` / `imageCropPage`.

[actions]
- Updated `.cursor/rules/tool-creation.mdc`
- Updated `.cursor/rules/work-tasks-tool-brief.mdc`
- Updated `work-tasks/_template/02-tool-info.md`
