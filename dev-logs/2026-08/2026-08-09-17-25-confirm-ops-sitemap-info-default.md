Date: 2026-08-09 17:25
Summary: Confirm ops sitemap CLI/UI were updated with default info-page exclusion.

[question]
ops中的sitemap生成是否同步修改了

[try to solve]
是。ops 已与核心同步：CLI（generate-sitemap.mjs）、操作页（sitemap-ui.html/mjs）、ops/README 均默认剔除关于/隐私/条款/联系；勾选或 `--info` 才纳入并视为筛选。

[actions]
- 只读核对 ops/seo/* 与 ops/README.md
