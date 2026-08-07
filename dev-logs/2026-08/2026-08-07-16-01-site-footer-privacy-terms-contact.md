Date: 2026-08-07 16:01
Summary: Expanded site footer with Privacy, Terms, and Contact pages across ten locales.

[question]
补充常规网站foot及关联页面

[try to solve]
已按常规工具站补齐页脚与关联页：

- 页脚现为版权行 + About / Privacy / Terms / Contact（静态站与工具页 SSR 共用同一链接集）
- 新增十语静态页：`/privacy`、`/terms`、`/contact`（默认语无前缀；其余为 `/{lang}/…`），含 hreflang、sitemap、Worker 路由
- Privacy 写明本地处理、边缘 Worker 场景、Clarity/百度统计与联系邮箱；Terms 含可接受使用、无担保、健康/财务教育性免责；Contact 使用公开邮箱 `dailyonetools@outlook.com`
- 信息页文案落在 `scripts/site/i18n-site-pages.mjs`，由 `t()` 合并查询

[actions]
- 新增 `scripts/site/pages/{info-page,privacy,terms,contact}.mjs`、`scripts/site/i18n-site-pages.mjs`
- 更新 `scripts/site/components/footer.mjs`、`src/pages/site/footer.ts`、`scripts/build-site.mjs`、`src/index.ts`、`scripts/site/config.mjs`、`scripts/site/i18n.mjs`、`scripts/site/pages/about.mjs`
- 十语 `src/site/i18n/*.ts` 增加 footer 短标签键
- `npm run build:site`（sitemap 含新页）
