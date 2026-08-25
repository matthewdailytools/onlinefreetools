Date: 2026-08-08 16:15
Summary: Analyzed homepage font-size hierarchy; found inverted levels and failed featured/secondary title distinction.

[question]
分析网站各个模块字体大小，看起来大小层次不对，不一致 http://localhost:8788/zh/

[try to solve]
Compared `site.css` + `content-home.mjs` + Bootstrap defaults: Hero brand 1.75–2.625rem; section H2 1.35–1.65; category H3 1.2; Why headings 1.05 (smaller than card titles at 1.125 — inverted hierarchy); featured/category card titles both land at 1.125rem because `.card .card-title` specificity beats `.h5/.h6`, so h5/h6 distinction fails; category body uses `.small` (0.875em) vs featured body intentionally, but titles are not stepped; Hero `btn-lg` overridden to 1rem near normal buttons; `font-weight:750` is invalid. Root cause: no unified type-scale tokens; sizes are scattered and fight Bootstrap utility classes.

[actions]
