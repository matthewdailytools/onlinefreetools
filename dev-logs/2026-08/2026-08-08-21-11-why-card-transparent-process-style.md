Date: 2026-08-08 21:11
Summary: Rename why card 3 to transparent process and restyle all three why cards to theme tokens.

[question]
第三个卡片把过程看得见改为过程透明，描述进行润色。然后这三个卡片的字体排版背景色进行优化（注意匹配主题）

[try to solve]
第三张 Why 卡片标题改为「过程透明」（十语对应：Transparent process / Proceso transparente 等），正文润色为强调公式、步骤与边界可见、非黑盒数字。三张卡片样式改用品牌 tint/`color-mix` 渐变底与品牌描边，标题用 `--text-strong`、正文略缩小行高与字距，悬停加深主题色；已 `build:site`。

[actions]
- scripts/site/i18n.mjs（home_why_3_* 十语）
- public/styles/site.css（.home-why-item 排版与主题背景）
- npm run build:site
