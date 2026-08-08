Date: 2026-08-08 11:00
Summary: Remove homepage hero lead and refresh three why cards across ten locales.

[question]
首页上的"安静好用的免费工具库：计算器、格式转换与站长辅助。打开即用，无需注册。"删除，然后优化三个优点卡片

[try to solve]
已删除首屏 `home_hero_lead` 段落（十语同步移除该 i18n 键），首屏仅保留品牌 H1 与两个 CTA；微调 hero 标题下边距与按钮动画时序。

三个优点卡片重写为差异化价值（替换原「浏览器内/免费/十语」）：
1. **本地优先** — 浏览器内处理，需 edge 时事先说明
2. **打开即用** — 无注册安装，复制结果即可
3. **过程看得见** — 公式、步骤与边界说明

十语 `scripts/site/i18n.mjs` 已更新；`npm run build:site` 已重建 `public/_pages/*/index.html`。

[actions]
- scripts/site/components/content-home.mjs
- scripts/site/i18n.mjs
- public/styles/site.css
- public/_pages/*/index.html（build 输出）
