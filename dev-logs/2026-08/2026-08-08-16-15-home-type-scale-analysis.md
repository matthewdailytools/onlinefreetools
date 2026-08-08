Date: 2026-08-08 16:15
Summary: Analyzed homepage font-size hierarchy; found inverted levels and failed featured/secondary title distinction.

[question]
分析网站各个模块字体大小，看起来大小层次不对，不一致 http://localhost:8788/zh/

[try to solve]
对照 `site.css` + `content-home.mjs` + Bootstrap 默认：Hero 品牌 1.75–2.625rem；区块 H2 1.35–1.65；分类 H3 1.2；Why 标题 1.05（小于卡片标题 1.125，层次倒置）；推荐/分类卡片标题因 `.card .card-title` 特异性压过 `.h5/.h6` 而同为 1.125rem，h5/h6 区分失效；分类区正文用 `.small`(0.875em) 与推荐区正文不一致属有意但标题未拉开；Hero `btn-lg` 被改成 1rem 与普通按钮接近；`font-weight:750` 无效。根因是缺少统一 type scale token，字号散落且与 Bootstrap 工具类打架。

[actions]
