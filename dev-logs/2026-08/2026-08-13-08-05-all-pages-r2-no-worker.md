Date: 2026-08-13 08:05
Summary: Pure R2 no-Worker only for fully static HTML; site APIs/lang negotiate block it.

[question]
如果坚持所有页面来自R2，不经过worker，是否能够实现

[try to solve]
纯静态 HTML 理论上可以：放弃 Pages Worker，主机名挂 R2 自定义域；对象 key 对齐公开 URL；存明文 HTML（或正确设 Content-Encoding:gzip）；用 CF 边缘缓存。但本站做不到「所有页面且零 Worker」而不砍功能：`/` Accept-Language、大量 301、验证文件、以及全部 `/api/*`（headers/SEO/DNS/IndexNow 等）都依赖 Worker。可行折中：静态页 R2 公开域 + API 另子域 Worker；或维持现状 Worker+R2 绑定（请求仍经 Worker，热路径 HIT 几乎无源站成本）。结论：严格「全部页面、不经 Worker」对本站不可完整实现；仅静态子集可。

[actions]
- （只读架构结论）
