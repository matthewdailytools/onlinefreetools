Date: 2026-08-08 17:36
Summary: Compared localhost:8788/zh/ vs onlinefreetools.org/zh/ styles; almost identical except one sidebar CSS line and two unpublished tools.

[question]
分析本地 http://localhost:8788/zh/ 和https://onlinefreetools.org/zh/ 样式是否一致

[try to solve]
结论：**整体样式基本一致**；样式栈（Bootstrap / Plus Jakarta Sans / site.css / theme.js / 四套 data-theme）两边相同。唯一 CSS 差异是本地 `site.css` 已去掉侧栏选中态左侧品牌色条（`box-shadow: inset 3px 0 0 var(--accent)`），线上仍保留。另有内容差异：本地多 `brand-style-guide`、`smart-website-color-scheme` 两个工具；线上多 Cloudflare Insights 脚本（不影响样式）。

对比方法：拉取两边 `/zh/` HTML 与静态资源并做字节级比对。

| 资源 | 结果 |
|------|------|
| `/vendor/bootstrap/bootstrap.min.css` | 一致 |
| `/vendor/fonts/plus-jakarta-sans.css` | 一致 |
| `/js/theme.js` | 一致 |
| `/styles/site.css` | **差 1 行**（见上） |
| HTML head 样式链接 / preload / 内联 layout style | 一致 |
| CSS class 集合 | 一致（70 个） |
| 主题 bootstrap（`oft-theme` → teal/green/amber/navy） | 一致 |

首页视觉上几乎无差；进入带侧栏选中态的工具页时，线上会多一条左侧品牌色竖条，本地没有。

[actions]
- 对比 `http://localhost:8788/zh/` 与 `https://onlinefreetools.org/zh/` 的 HTML/CSS/JS
