Date: 2026-08-06 16:35
Summary: Added a Cursor rule for locale-native i18n and mandatory multi-pass SEO review after generation.

[question]
将语言翻译本地化，以及生成后多次核查和修改放入规则文档

[try to solve]
Added `.cursor/rules/tool-i18n-localization.mdc`: write copy for local search habits; ban English-template machine translation; for new tools or major i18n changes require ≥3 review rounds (master + lint → search-intent rewrite → spot-check and lint again).

Cross-linked from `tool-i18n-seo.mdc`, the `tool-creation.mdc` checklist, `project-core.mdc` priority notes, `docs/SEO_TOOL_RULES.md`, and `work-tasks/_template/02-tool-info.md`.

[actions]
- .cursor/rules/tool-i18n-localization.mdc
- .cursor/rules/tool-i18n-seo.mdc
- .cursor/rules/tool-creation.mdc
- .cursor/rules/project-core.mdc
- docs/SEO_TOOL_RULES.md
- work-tasks/_template/02-tool-info.md
