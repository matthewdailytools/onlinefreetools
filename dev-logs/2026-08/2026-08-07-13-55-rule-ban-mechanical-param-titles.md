Date: 2026-08-07 13:55
Summary: Codify ban on mechanical parameter-list titles in localization rules.

[question]
加入到规则中，避免后续出现类似的情况

[try to solve]
已写入本地化权威规则，避免再出现「最长边、质量与目标体积」式机械 title：

- `.cursor/rules/tool-i18n-localization.mdc`：新增 **Title / H1 自然口语**、忌说明书腔；禁词表增加「参数枚举 title」；收紧合规第 6 条；轮次/定稿自检同步
- `work-tasks/_template/03-locale-briefs.md`：共用禁词勾选 + Title 方向注释
- `.github/copilot-instructions.md`：摘要同步（rules → copilot 单向）

[actions]
- Updated `tool-i18n-localization.mdc`, `_template/03-locale-briefs.md`, `copilot-instructions.md`, `image-compress/03` checklist
