Date: 2026-08-06 11:59
Summary: Synced .cursor/rules and copilot-instructions with Google SEO strategy and Information Gain requirements.

[question]
直接修改（.cursor/rules 规则文件以对齐谷歌 SEO / IG 策略）

[try to solve]
已更新 `.cursor/rules` 下 5 个 SEO 相关规则，并同步 `.github/copilot-instructions.md`：

- **tool-i18n-seo.mdc**：IG 九维 ≥3、长尾一带多场景、References/Related、JSON-LD/cloaking 红线、FAQ 非 KPI、人工审译
- **tool-creation.mdc**：§5.1 页面结构、PR Checklist、related≥2、WASM 懒加载
- **seo-html-defaults.mdc**：JSON-LD 约束、禁虚假评分/llms.txt、title 格式
- **project-core.mdc**：文档优先级链（SEO_TOOL_RULES → 策略文档 → cursor rules）
- **cloudflare-workflow.mdc**：发版前引用 IG Checklist
- **copilot-instructions.md**：10 语、description≥120、IG 与旧 12 语/80 字口径对齐

[actions]
- .cursor/rules/tool-i18n-seo.mdc
- .cursor/rules/tool-creation.mdc
- .cursor/rules/seo-html-defaults.mdc
- .cursor/rules/project-core.mdc
- .cursor/rules/cloudflare-workflow.mdc
- .github/copilot-instructions.md
