Date: 2026-08-06 17:04
Summary: Require updating README tool list when adding a new tool; sync list with catalog.

[question]
规则增加：新增工具后，更新readme文档中的工具清单

[try to solve]
已在 `tool-creation.mdc` 工程清单、首页/导航章节与上线 Checklist 增加硬要求：新工具须同步更新根目录 `README.md`「工具清单 / Tools List」（中英各一条，与 `tool-catalog.json` 一致）。已同步 `copilot-instructions` 与 `SEO_PUBLISH_CHECKLIST`。并按 catalog 补全 README 缺失项（text-diff、ROI、百分比增减、梯度等），英文链接改为规范无前缀 `/tools/...`。

[actions]
- .cursor/rules/tool-creation.mdc
- .github/copilot-instructions.md
- docs/SEO_PUBLISH_CHECKLIST.md
- README.md
