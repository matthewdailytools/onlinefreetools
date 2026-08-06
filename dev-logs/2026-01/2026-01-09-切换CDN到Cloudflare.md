日期：2026年1月9日
摘要：切换CDN到Cloudflare

【question】
js和css的cdn文件修改为cloudflare的cdn文件

【try to solve】
已将 `public/index.html` 中的 Bootstrap 5.3.3 CSS/JS 由 jsdelivr 改为 Cloudflare cdnjs，并保留 SRI 与 `referrerpolicy="no-referrer"`。

【执行操作】
- 更新 `public/index.html`
