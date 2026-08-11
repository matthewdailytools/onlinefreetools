Date: 2026-08-11 23:38
Summary: Remediated audit findings for 10 SEO tools: website-headers coverage docs, lint:seo false positives, and meta descriptions to 120–160.

[question]
需要

[try to solve]
按审计三项全部修复并验证通过：

1. **website-headers 覆盖文档**：补齐 `02-tool-info.md` 清单前检索覆盖与 Title/Description；修正 `03-locale-briefs.md` 表头错位，勾选清单前/检索覆盖已优化，补 `0b`/`1b`/`2b`。`coverage:gate --slug=website-headers --phase=all` → OK。

2. **lint:seo 误报**：`scripts/validate-tool-seo.mjs` 的 `extractDescriptions` 仅校验 catalog `faqPrefix_description`，跳过 UI 字段如 `tool_og_field_og_description`。

3. **meta description**：10 工具 × 10 语言重写为约 120–160 字符，含 SEO 收益与 example/步骤类关键词；去掉机械填充与断句。`npm run merge:tools` + `lint:seo` → OK；10 个 slug `coverage:gate --phase=all` → 全部 OK。

[actions]
- `work-tasks/website-headers/02-tool-info.md`, `03-locale-briefs.md`
- `scripts/validate-tool-seo.mjs`
- `src/site/i18n/tools/{10 SEO slugs}/*.ts` + merge 生成物
- `npm run merge:tools`, `npm run lint:seo`, `coverage:gate` ×10
