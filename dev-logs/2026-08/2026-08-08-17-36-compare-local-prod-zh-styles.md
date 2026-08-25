Date: 2026-08-08 17:36
Summary: Compared localhost:8788/zh/ vs onlinefreetools.org/zh/ styles; almost identical except one sidebar CSS line and two unpublished tools.

[question]
分析本地 http://localhost:8788/zh/ 和https://onlinefreetools.org/zh/ 样式是否一致

[try to solve]
Verdict: **styles are largely identical**. Both sides share the same style stack (Bootstrap / Plus Jakarta Sans / site.css / theme.js / four data-theme sets). The only CSS delta: local `site.css` already removed the sidebar active left brand bar (`box-shadow: inset 3px 0 0 var(--accent)`); production still has it. Content deltas: local has two extra tools (`brand-style-guide`, `smart-website-color-scheme`); production injects Cloudflare Insights (no style impact).

Method: fetched both `/zh/` HTML and static assets and compared byte-level.

| Asset | Result |
|------|------|
| `/vendor/bootstrap/bootstrap.min.css` | Match |
| `/vendor/fonts/plus-jakarta-sans.css` | Match |
| `/js/theme.js` | Match |
| `/styles/site.css` | **1-line diff** (above) |
| HTML head style links / preload / inline layout style | Match |
| CSS class set | Match (70 classes) |
| Theme bootstrap (`oft-theme` → teal/green/amber/navy) | Match |

Home looks nearly the same; on tool pages with a selected sidebar item, production still shows the left brand accent bar that local no longer has.

[actions]
- Compared HTML/CSS/JS for `http://localhost:8788/zh/` vs `https://onlinefreetools.org/zh/`
