Date: 2026-08-06 16:35
Summary: Added cursor rule for i18n localization and multi-pass SEO review.

[question]
将语言翻译本地化，以及生成后多次核查和修改放入规则文档

[try to solve]
新增 `.cursor/rules/tool-i18n-localization.mdc`：要求按当地检索习惯写文案、禁止英模机翻；新工具/大改 i18n 须 ≥3 轮核查（母版+lint → 检索向重写 → 抽查再 lint）。并挂到 `tool-i18n-seo.mdc`、`tool-creation.mdc` checklist、`project-core.mdc` 优先级、`docs/SEO_TOOL_RULES.md`、`work-tasks/_template/02-tool-info.md`。

[actions]
- .cursor/rules/tool-i18n-localization.mdc
- .cursor/rules/tool-i18n-seo.mdc
- .cursor/rules/tool-creation.mdc
- .cursor/rules/project-core.mdc
- docs/SEO_TOOL_RULES.md
- work-tasks/_template/02-tool-info.md
