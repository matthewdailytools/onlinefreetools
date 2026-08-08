Date: 2026-08-08 21:25
Summary: Restyle the three home why cards with asymmetric shapes, index badges, and theme accents.

[question]
顶部三个卡片进行美化（可以调整卡片形状）

[try to solve]
三张 Why 卡改为 article + 01/02/03 异形序号徽章；三卡使用不同不对称圆角；顶缘品牌细带与角落主题光斑；悬停轻抬升。颜色与阴影均基于 `--brand*`。已 `build:site`。

[actions]
- scripts/site/components/content-home.mjs
- public/styles/site.css（.home-why-item*）
- npm run build:site
