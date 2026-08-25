Date: 2026-08-08 15:32
Summary: Match iLovePDF Workflows tag button style and fluid horizontal page padding.

[question]
按钮采用https://www.ilovepdf.com/ 上Workflows按钮的样式，另外页面正文body左右margin应该跟随屏幕改变

[try to solve]
1. Primary/outline buttons align with home filter `.tag` (Workflows): white background, `1px #d6d6df`, full-round pill, font-weight 500; hover border `#292931`; pressed fill `#292931` with white text.
2. Horizontal page padding uses `--page-pad-x`: default 48px, ≤1440px → 32px, ≤960px → 24px (aligned with iLovePDF `.tools`); shared by tool-page `#content` and home hero/main.

[actions]
- public/styles/site.css
