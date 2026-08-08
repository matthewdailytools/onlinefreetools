Date: 2026-08-08 15:24
Summary: Align site background, font, buttons, and cards with iLovePDF visual tokens.

[question]
将本站样式按照https://www.ilovepdf.com/  修改背景色，字体，按钮，卡片框

[try to solve]
已按 iLovePDF 视觉 token 更新全站样式（克制吸收，不热链对方私有 Graphik 字体）：

- 背景：`#f5f5fa`；正文 `#33333b` / 次要 `#47474f`；边框 `#d6d6df`
- 主色：朱红 `#e5322d`（悬停 `#bd060a`）
- 字体：Plus Jakarta Sans（Graphik 开源近似）；布局模板与静态页已切换
- 按钮：8px 圆角、实心红/描边红、无阴影（去掉原 pill + 投影）
- 卡片：白底、`1px #d6d6df`、16px 圆角；悬停边框加深至 `#292931`（无抬升阴影）
- 首页 hero 改为浅色居中标题区，与对标站一致

主要改动：`public/styles/site.css`、`src/pages/site/layout.ts`、`scripts/site/layout.mjs`；并 `npm run build:site` 刷新静态页。

[actions]
- public/styles/site.css
- src/pages/site/layout.ts
- scripts/site/layout.mjs
- public/_pages/**（build:site）
- npm run build:site
