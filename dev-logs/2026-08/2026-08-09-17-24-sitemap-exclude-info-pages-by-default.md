Date: 2026-08-09 17:24
Summary: Exclude about/privacy/terms/contact from default sitemap generation.

[question]
sitemap 生成，默认剔除: 关于，隐私，联系，条款

[try to solve]
生产全量 sitemap 默认不再包含关于/隐私/条款/联系（4×10 语 = 40 URL）。需纳入时显式 `--info about,...` 或操作页勾选。已改 `scripts/site/sitemap.mjs`、CLI、sitemap-ui、ops/README、SEO_PUBLISH_CHECKLIST；`npm run sitemap` → 1360 URLs，零信息页 loc。

[actions]
- scripts/site/sitemap.mjs：infoPages 默认 []
- ops/seo/generate-sitemap.mjs、sitemap-ui.mjs、sitemap-ui.html
- ops/README.md、docs/SEO_PUBLISH_CHECKLIST.md
- npm run sitemap 刷新 public/sitemap.xml
