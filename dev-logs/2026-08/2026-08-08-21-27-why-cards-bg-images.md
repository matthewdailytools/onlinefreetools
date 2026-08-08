Date: 2026-08-08 21:27
Summary: Add theme-tinted SVG background illustrations to the three home why cards.

[question]
why卡片尝试增加背景图片

[try to solve]
为三张 Why 卡增加右下/角落水印插画：`why-local` / `why-signup` / `why-process` 单色 SVG，经 CSS `mask-image` + `--brand` 染色，随主题变色；悬停略提高不透明度。已 `build:site`。

[actions]
- public/icons/home/why-local.svg、why-signup.svg、why-process.svg
- scripts/site/components/content-home.mjs（.home-why-bg）
- public/styles/site.css
- npm run build:site
