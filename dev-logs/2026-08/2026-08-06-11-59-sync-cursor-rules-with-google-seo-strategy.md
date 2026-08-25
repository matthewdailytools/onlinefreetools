Date: 2026-08-06 11:59
Summary: Synced `.cursor/rules` and `copilot-instructions` with the Google SEO strategy and Information Gain requirements.

[question]
直接修改（.cursor/rules 规则文件以对齐谷歌 SEO / IG 策略）

[try to solve]
Updated five SEO-related rules under `.cursor/rules` and synced `.github/copilot-instructions.md`:

- **tool-i18n-seo.mdc**: IG nine dimensions ≥3, long-tail intents on one page by default, References/Related, JSON-LD/cloaking red lines, FAQ not a KPI, human review of translations
- **tool-creation.mdc**: §5.1 page structure, PR checklist, related≥2, WASM lazy load
- **seo-html-defaults.mdc**: JSON-LD constraints, no fake ratings / `llms.txt`, title format
- **project-core.mdc**: doc priority chain (SEO_TOOL_RULES → strategy doc → cursor rules)
- **cloudflare-workflow.mdc**: reference IG checklist before release
- **copilot-instructions.md**: 10 locales, description≥120, IG aligned with the older 12-locale / 80-char guidance

[actions]
- `.cursor/rules/tool-i18n-seo.mdc`
- `.cursor/rules/tool-creation.mdc`
- `.cursor/rules/seo-html-defaults.mdc`
- `.cursor/rules/project-core.mdc`
- `.cursor/rules/cloudflare-workflow.mdc`
- `.github/copilot-instructions.md`
