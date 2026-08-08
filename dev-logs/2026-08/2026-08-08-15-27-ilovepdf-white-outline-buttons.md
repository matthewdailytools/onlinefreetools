Date: 2026-08-08 15:27
Summary: Switch primary buttons to iLovePDF white-background outline style.

[question]
按钮采用的是对应站点白色底的按钮

[try to solve]
主按钮改为对齐 iLovePDF `.btn--secondary`：白底、朱红描边（`outline: 2px solid #e5322d`）、朱红文字；悬停描边/文字加深为 `#bd060a`，背景仍为白。不再使用朱红实心填充。

[actions]
- public/styles/site.css
