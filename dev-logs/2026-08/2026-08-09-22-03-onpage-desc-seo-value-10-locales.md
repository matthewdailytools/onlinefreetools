Date: 2026-08-09 22:03
Summary: on-page-seo-checker 10 语描述前置 SEO 价值句，突出工具对搜索排名与点击的作用。

[question]
上面的seo工具对seo的作用需要在描述中体现出来，注意各个语言需要符合用户语言习惯

[try to solve]
逐语独立重写 on-page-seo-checker 的 `tool_onpage_description`（页面 meta 描述/H1 摘要）与 `tool_onpage_home_desc`（首页卡片描述），把「该工具对 SEO 的作用」前置成首句，而非直译母版。

- en 母版首句：Weak titles, missing meta descriptions, duplicate H1s and broken canonicals quietly cost rankings and clicks.
- zh 首句：标题偏弱、meta 描述缺失、重复 H1 或 canonical 配置错误，都会悄悄拖累搜索排名与点击。
- 其余 es/ja/ar/pt/id/fr/ru/de 均按当地表达习惯独立改写（Google 排名/点击的说法逐语不同），保留检查项、本地处理说明与示例句。
- 同步更新 `work-tasks/on-page-seo-checker/02-tool-info.md` 的 SEO 卡片 Title/Description 要点，及 `03-locale-briefs.md` 多轮记录（新增「4 描述 SEO 作用增强」行）。
- 验证：`npm run merge:tools` 成功（124 tools / 10 locales）；聚合 home_desc 10 语生效；dev server 上 zh/en 页面 meta description 已含 SEO 价值首句；`lint:seo` 通过（0 入链警告、无参数枚举 title）；`build:site` 通过。

[actions]
- 修改 `src/site/i18n/tools/on-page-seo-checker/{en,zh,es,ja,ar,pt,id,fr,ru,de}.ts` 的 tool_onpage_description 与 tool_onpage_home_desc
- 修改 `work-tasks/on-page-seo-checker/02-tool-info.md`、`03-locale-briefs.md`
- 运行 `npm run merge:tools`、`npm run build:site`、`npm run lint:seo`
