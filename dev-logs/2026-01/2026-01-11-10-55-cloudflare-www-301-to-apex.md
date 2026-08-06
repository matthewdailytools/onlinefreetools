日期：2026年1月11日10时55分
摘要：在 Cloudflare 控制台配置将 www 域名 301 重定向到裸域（非 www）。

【question】
how cloudfare setting: www domain 301 redirect to none www domain

【try to solve】
推荐用 Cloudflare Redirect Rules（最直接），把 `www.example.com` 永久重定向到 `example.com`，并保留路径与查询参数。

前置检查
- DNS：`www` 需要有记录（通常 `CNAME www -> example.com` 或 `A/AAAA`），并且建议打开代理（橙云），这样重定向规则能生效。
- SSL/TLS：确保站点可用 HTTPS（Cloudflare 里通常选 Full 或 Full (strict)）。

方案 A：Redirect Rules（推荐）
1）进入 Cloudflare Dashboard -> 选择你的站点 -> Rules -> Redirect Rules。
2）Create rule。
3）When incoming requests match...
- Field 选 `Hostname`
- Operator 选 `equals`
- Value 填 `www.example.com`
4）Then...
- Action 选 `Static redirect`
- URL 填 `https://example.com/$1`
- Status code 选 `301`
- 打开 “Preserve query string”（或等价选项）
- 如果有 “Preserve path”/“Dynamic” 选项：确保会把原始 path 拼到目标上（常见写法是用 `$1` 表示原 path；不同 UI 版本字段名略有差异，以“保留路径”为准）。
5）保存并把规则放在较靠前的位置（优先于其它重写/重定向规则）。

方案 B：Bulk Redirects（可选，适合多条映射）
1）Rules -> Bulk Redirects -> Create。
2）建一个 redirect list：
- Source：`http://www.example.com/*` 与 `https://www.example.com/*`
- Target：`https://example.com/$1`
- Status：301
3）创建 Bulk Redirect rule 并启用。

快速自测
- 访问 `https://www.example.com/some/path?x=1` 应 301 到 `https://example.com/some/path?x=1`。
