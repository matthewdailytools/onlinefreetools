Date: 2026-08-09 16:57
Summary: Implement Google-aligned internal/external link execution plan for the site.

[question]
内链与外链落地执行方案

Implement the plan as specified, it is attached for your reference. Do NOT edit the plan file itself.

To-do's from the plan have already been created. Do not create them again. Mark them as in_progress as you work, starting with the first one. Don't stop until you have completed all the to-dos.

[try to solve]
已按方案落地：文档（内链三级/出站/入站）、lint 门禁、默认语 URL 统一、Related 同标签、catalog related 同簇补齐（零 inbound 清零）、markdown/text-diff References、BMI/compress-pdf/ROI 语境内链、清理「See related tools」占位、白帽获链月度清单。`npm run lint:seo` 与 `build:site` 通过。

[actions]
- docs/seo/2026-08-09/link-strategy-execution.md；§7 / seo README / SEO_PUBLISH_CHECKLIST 回链
- ops/seo/inbound-link-outreach.md；ops/README 索引
- scripts/validate-tool-links.mjs + lint:seo 接入
- nav/cards/taxonomy/footer → withLangPath；Related 去 target=_blank
- tool-catalog.d related 校正；merge + build:site
- markdown/text-diff References；renderContextualToolLinks；i18n 占位清理
