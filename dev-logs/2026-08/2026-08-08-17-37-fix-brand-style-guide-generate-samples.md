Date: 2026-08-08 17:37
Summary: Fixed Generate JS syntax error and added visual Do/Don't samples per module.

[question]
1、要有各个模块的样例展示。2、点击生成没有任何反应

[try to solve]
根因：内联脚本里 `motion: { duration: '…'; reduce: … }` 误用分号分隔对象属性，整段 JS 解析失败，故 Generate / 进页样例均无反应。

已修复为逗号，并去掉易踩坑的 Unicode 破折号；`{brand}` 改用 `split/join`。各开启模块增加左右对照可视化样例（Logo 净空、色占比、字阶、间距圆角、图像图标、动效、语气、触点、对比度）；进页 Sample 默认勾选 M0–M9 以便一次看全。硬刷新后试 `/tools/brand-style-guide`。

[actions]
- Fixed `src/pages/brandStyleGuidePage.ts` (syntax + visual samples + sample modules on)
