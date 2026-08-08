Date: 2026-08-08 15:44
Summary: Make tool page body width fluid with viewport like the home layout.

[question]
工具页的正文宽度也是，要随屏幕改变而改变

[try to solve]
工具页 `#content` 改为占满主栏、`max-width` 对齐 `--home-max` + 流体 `--page-pad-x`；去掉原先固定 880px 对 tool-panel / lead / sections / 计算器卡片的限制，正文宽度随屏宽伸缩。

[actions]
- public/styles/site.css
