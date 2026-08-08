Date: 2026-08-08 11:54
Summary: Added a hard rule that tool pages must configure and auto-run real sample results on load.

[question]
在规则中增加：页面配置实际运行的样例结果

[try to solve]
在 `tool-creation.mdc` 新增「进页样例须实际跑出结果」硬性节（Load sample、进页自动跑、结果区可见、与 Example 对齐、例外须写 `02`），并加入上线 Checklist；同步写入 `work-tasks-tool-brief.mdc` 与 `_template/02-tool-info.md` 交互规格必填项。参考实现对齐 `imageCompressPage` / `imageCropPage`。

[actions]
- Updated `.cursor/rules/tool-creation.mdc`
- Updated `.cursor/rules/work-tasks-tool-brief.mdc`
- Updated `work-tasks/_template/02-tool-info.md`
