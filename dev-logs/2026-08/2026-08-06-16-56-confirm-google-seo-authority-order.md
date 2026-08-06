Date: 2026-08-06 16:56
Summary: Confirmed Google-first SEO authority order and applied A–E (new seo-google-policy.mdc + priority/doc fixes).

[question]
确认

[try to solve]
已按确认落地权威序与 A–E：

1. **P0 Google** — 新建 `.cursor/rules/seo-google-policy.mdc`（Helpful Content / Spam 含 2026-05 AI Overviews·AI Mode / 禁 llms.txt·操纵 AI 摘要 / scaled content·cloaking·YMYL·链接等镜像清单；仓库最高合规权威）。
2. **权威序** — `project-core.mdc`、`tool-i18n-seo.mdc`、策略文首与 §9、`SEO_TOOL_RULES`、`SEO_PUBLISH_CHECKLIST`、`copilot-instructions`、`work-tasks/README`、`tool-creation` 交叉引用统一为：Google → 运行代码/`lint:seo` → `.cursor/rules` → `docs/*` → copilot（从 rules 同步）。冲突须判断并人工确认后再改。
3. **A–E**：A 改 project-core；B 改 tool-i18n-seo；C 策略 §5.2 description **≥120**（建议 120–160）；D §3.1 维 7 对齐 locale brief + ≥3 轮；E 新建 seo-google-policy；§2.2 机翻禁令同步 localization 规则。

[actions]
- .cursor/rules/seo-google-policy.mdc (new)
- .cursor/rules/project-core.mdc
- .cursor/rules/tool-i18n-seo.mdc
- .cursor/rules/tool-creation.mdc
- docs/2026-07-28-google-seo-strategy-implementation.md
- docs/SEO_TOOL_RULES.md
- docs/SEO_PUBLISH_CHECKLIST.md
- .github/copilot-instructions.md
- work-tasks/README.md
