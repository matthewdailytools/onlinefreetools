Date: 2026-08-08 15:44
Summary: Make tool page body width fluid with viewport like the home layout.

[question]
工具页的正文宽度也是，要随屏幕改变而改变

[try to solve]
Tool-page `#content` now fills the main column with `max-width` aligned to `--home-max` plus fluid `--page-pad-x`. Removed the prior fixed 880px caps on tool-panel / lead / sections / calculator cards so body width scales with the viewport.

[actions]
- public/styles/site.css
