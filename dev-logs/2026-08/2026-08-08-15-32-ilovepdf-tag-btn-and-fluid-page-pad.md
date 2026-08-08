Date: 2026-08-08 15:32
Summary: Match iLovePDF Workflows tag button style and fluid horizontal page padding.

[question]
按钮采用https://www.ilovepdf.com/ 上Workflows按钮的样式，另外页面正文body左右margin应该跟随屏幕改变

[try to solve]
1. 主/描边按钮对齐首页筛选 `.tag`（Workflows）：白底、`1px #d6d6df`、全圆角 pill、字重 500；悬停边框 `#292931`；按下填充 `#292931` 白字。
2. 正文水平边距用 `--page-pad-x`：默认 48px，≤1440px 为 32px，≤960px 为 24px（对齐 iLovePDF `.tools`）；工具页 `#content` 与首页 hero/main 共用。

[actions]
- public/styles/site.css
