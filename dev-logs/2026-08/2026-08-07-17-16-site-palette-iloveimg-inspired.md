Date: 2026-08-07 17:16
Summary: Updated site color tokens to an iLoveIMG-inspired cyan-on-lavender palette while keeping a single accent.

[question]
学习修改配色

[try to solve]
从 iLoveIMG 克制吸收配色并改全站 token：页底 #f5f5fa、正文 #1d1d1b、主色 #1c83a8 / 亮青 #3cb6e2；引入 --accent-rgb 统一按钮/焦点/描边；工具页用 --tool-page-bg；Hero 光晕对齐青绿；图标与 brand/favicon SVG 由旧蓝 #0a6ebd 换成 #1c83a8。不做多色图标墙或紫渐变。

[actions]
- 修改 public/styles/site.css
- 批量更新 public/**/*.svg 中的 #0a6ebd → #1c83a8
