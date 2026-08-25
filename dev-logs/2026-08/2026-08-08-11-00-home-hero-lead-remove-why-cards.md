Date: 2026-08-08 11:00
Summary: Remove homepage hero lead and refresh three why cards across ten locales.

[question]
首页上的"安静好用的免费工具库：计算器、格式转换与站长辅助。打开即用，无需注册。"删除，然后优化三个优点卡片

[try to solve]
Removed the hero `home_hero_lead` paragraph (dropped that i18n key in all ten locales). Hero keeps brand H1 and two CTAs only; tweaked title bottom margin and button animation timing.

Rewrote the three value cards (replacing the old “in-browser / free / ten locales” set):
1. **Local-first** — process in the browser; call out edge use when needed
2. **Open and go** — no signup or install; copy results and leave
3. **Visible process** — formulas, steps, and boundary notes

Updated ten-locale `scripts/site/i18n.mjs`; ran `npm run build:site` to rebuild `public/_pages/*/index.html`.

[actions]
- scripts/site/components/content-home.mjs
- scripts/site/i18n.mjs
- public/styles/site.css
- public/_pages/*/index.html (build output)
