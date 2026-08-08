Date: 2026-08-08 21:24
Summary: Beautify home top band through Featured with theme-following gradients and navbar accent.

[question]
顶部（截止“推荐”）颜色过于单调，进行美化（需要跟随主题）

[try to solve]
将 Hero + Why + 推荐包入 `home-top` 连续氛围带（径向光晕、点阵、品牌渐变底）；顶栏加主题浅染与品牌底边高光；品牌名用文字渐变融入 `--brand`；「推荐」标题左侧品牌色条。全部基于 `--brand` / `--brand-tint`，切换主题即变色。已 `build:site`。

[actions]
- scripts/site/components/content-home.mjs（home-top / home-featured）
- public/styles/site.css（navbar + home-top 氛围）
- npm run build:site
