# Worker + R2 架构设计（可执行）

对齐 [初始思路.md](./初始思路.md)。公开 URL 与 SEO 体系不变；多语言 HTML 以 gzip 单版本存 R2，Worker 做 Cache → R2；**不**把 `_pages` 打进 Cloudflare Assets。

## 分层

| 层 | 内容 |
|---|---|
| Assets（`public/`，经 `.assetsignore`） | css / js / vendor / icons / sitemap / robots / devlogs 等；**不含** `_pages/**` |
| R2（`PAGES_BUCKET`） | **唯一**预渲染 HTML：`_pages/{lang}/**/*.html.gz` |
| Worker | 路由、语言协商、301/验证直出、API、Cache API |

`public/.assetsignore` 排除 `_pages/` 与 `*.html.gz`；且 `public/_pages/` **整树 gitignore**，确保预渲染页既不进仓库也不进 Cloudflare Static Assets。

## R2 object key

内部路径，**不是**公开 URL：

- `_pages/{lang}/index.html.gz`
- `_pages/{lang}/about.html.gz`（privacy / terms / contact 同理）
- `_pages/{lang}/where-to-use-tools/index.html.gz`、`…/{id}.html.gz`
- `_pages/{lang}/tool-type/…` 同理
- `_pages/{lang}/tools/{slug}.html.gz`

示例：公开 `/tools/text-diff` 与 `/en/tools/text-diff` → `_pages/en/tools/text-diff.html.gz`。

## 公开 URL → 内部 HTML 路径

| 公开 pathname | 内部 asset HTML 路径 |
|---|---|
| `/` | `/_pages/{defaultLang}/index.html` |
| `/{lang}/` | `/_pages/{lang}/index.html` |
| `/about` | `/_pages/{defaultLang}/about.html` |
| `/{lang}/about/` | `/_pages/{lang}/about.html` |
| `/where-to-use-tools` | `/_pages/{defaultLang}/where-to-use-tools/index.html` |
| `/{lang}/tool-type/{id}/` | `/_pages/{lang}/tool-type/{id}.html` |
| `/tools/{slug}` | `/_pages/{defaultLang}/tools/{slug}.html` |
| `/{lang}/tools/{slug}` | `/_pages/{lang}/tools/{slug}.html` |

R2 key = 去掉前导 `/` 的 asset 路径 + `.gz`。

## 请求路径

1. **Cache API**（key = 公开 URL + `PAGES_CACHE_VERSION`；缓存**明文** HTML）
2. **R2** 读 `{prefix}_pages/...html.gz`，Worker 内 **gunzip**
3. R2 未命中 → **404**（不再回退 Assets：`_pages` 已从 Assets 排除）
4. **对外始终返回未压缩 HTML**（不设 `Content-Encoding`），由运行时/边缘按 `Accept-Encoding` 再压缩
5. `/api/*`、验证文件、静态扩展名仍走 Assets / 原逻辑

## 缓存头

- HTML：`Cache-Control: public, s-maxage=86400, max-age=0`
- `Vary: Accept-Encoding`
- 发版：改 `PAGES_CACHE_VERSION`（vars）使 cache key 变化；或缩短 s-maxage 后自然失效

## 构建与部署

```bash
npm run build:site          # merge → 静态页 → 预渲染工具 → gzip _pages
npm run upload:r2           # 同步 .html.gz + 写 _meta/pages-build.json
npm run verify:r2           # R2 ↔ wrangler PAGES_CACHE_VERSION / contentHash
npm run deploy              # predeploy → upload → verify → 提示 git push（CF）；live 另跑
# CF 成功后：npm run verify:r2:live
```

`predeploy` 含 `build:site` + lint。运维操作：[`ops/worker-r2-ops.md`](../../ops/worker-r2-ops.md)。

## SEO 不变量

- URL / trailing slash / en 无前缀规则不变
- sitemap.xml、robots.txt 仍在 Assets
- hreflang / canonical / x-default 写在预渲染 HTML 内（与原 SSR 同源渲染函数）
- GSC HTML、IndexNow txt 仍 Worker 直出 200
- Accept-Language 对无前缀 HTML 的 302 + Vary 不变
- 旧路径 301 不变

## 回滚

- 代码：回退到仍 SSR 工具页的提交
- 数据：R2 可保留 `builds/{id}/_pages/...` 前缀，用 `PAGES_R2_PREFIX` 切换（当前默认空前缀）
