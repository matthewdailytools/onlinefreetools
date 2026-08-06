Date: 2026-08-06 17:12
Summary: Reviewed text-diff work-tasks and page against latest SEO/localization rules; filled locale briefs and improved IG/privacy/structure.

[question]
按照最新的规则策略，review和优化text-diff的立项文档以及生成的text-diff工具的页面

[try to solve]
对照 `seo-google-policy` / `tool-creation` / `tool-i18n-localization` 审查后落地：

**立项文档**
- 补全缺失的 `work-tasks/text-diff/03-locale-briefs.md`（十语检索词、按钮说法、禁词勾选、≥3 轮记录；ar/ja/ru 标待母语抽查）
- 重写 `02-tool-info.md`：对齐 Google-first、CDN 载库诚实说明、IG 维 4/7、README 验收、模块顺序
- 更新 `01` 结论为已上线 + 指向 `03`

**页面 / i18n**
- Rules 改为结构化三种方式对照列表（适用场景与风险）
- 首屏预填改为各语 `sample_a`/`sample_b`；增加绿/红图例
- References 移到 FAQ/Related 之后
- How + FAQ 隐私：区分「粘贴文本不上传」与「可从 CDN 加载 jsdiff」
- 十语 Example/样例本地化（去掉 Hello world 同构）
- `npm run lint:seo` 通过

[actions]
- work-tasks/text-diff/01-direction-discussion.md
- work-tasks/text-diff/02-tool-info.md
- work-tasks/text-diff/03-locale-briefs.md (new)
- src/pages/textDiffPage.ts
- src/site/i18n/{en,zh,es,de,fr,pt,id,ja,ru,ar}.ts
