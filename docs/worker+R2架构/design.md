# Worker + R2 架构设计（可执行）

对齐 [初始思路.md](./初始思路.md)。公开 URL 与 SEO 体系不变；工具/taxonomy 等 HTML 以 gzip 存 R2；**各语言首页**写在 Assets **常规路径**（降低 TTFB，随 git push 更新）。

## 分层

| 层 | 内容 |
|---|---|
| Assets（`public/`，经 `.assetsignore`） | css / js / vendor / icons / sitemap / robots / **首页** `index.html`、`{lang}/index.html` |
| R2（`PAGES_BUCKET`） | 预渲染 HTML（含首页备份）：`_pages/{lang}/**/*.html.gz` |
| Worker | 路由、语言协商、301/验证直出、API；首页 Cache→Assets→R2；其它页 Cache→R2 |

`public/.assetsignore` 排除 `_pages/` 与 `*.html.gz`。首页不在 `_pages` 例外里，而在公开路径；`run_worker_first` 含 `/` 与各 `/{lang}/`，避免 Assets 抢先跳过 Accept-Language。

## R2 object key

内部路径，**不是**公开 URL：

- `_pages/{lang}/index.html.gz`
- `_pages/{lang}/about.html.gz`（privacy / terms / contact 同理）
- `_pages/{lang}/where-to-use-tools/index.html.gz`、`…/{id}.html.gz`
- `_pages/{lang}/tool-type/…` 同理
- `_pages/{lang}/tools/{slug}.html.gz`

示例：公开 `/tools/text-diff` 与 `/en/tools/text-diff` → `_pages/en/tools/text-diff.html.gz`。

## 公开 URL → 存储路径

| 公开 pathname | Assets（首页） | R2（其它页 / 首页兜底） |
|---|---|---|
| `/` | `/index.html` | `_pages/{defaultLang}/index.html.gz` |
| `/{lang}/` | `/{lang}/index.html` | `_pages/{lang}/index.html.gz` |
| `/about` | — | `_pages/{defaultLang}/about.html.gz` |
| `/{lang}/about/` | — | `_pages/{lang}/about.html.gz` |
| `/where-to-use-tools` | — | `_pages/{defaultLang}/where-to-use-tools/index.html.gz` |
| `/{lang}/tool-type/{id}/` | — | `_pages/{lang}/tool-type/{id}.html.gz` |
| `/tools/{slug}` | — | `_pages/{defaultLang}/tools/{slug}.html.gz` |
| `/{lang}/tools/{slug}` | — | `_pages/{lang}/tools/{slug}.html.gz` |

## 请求路径

**首页**（`/`、`/{lang}/`）：

1. Worker 先跑（`run_worker_first`；`/` 上做 Accept-Language）
2. **Cache API**（明文）
3. **ASSETS** 读 `/index.html` 或 `/{lang}/index.html`
4. Assets miss → **R2** `_pages/{lang}/index.html.gz`
5. 仍 miss → **404**

**其它预渲染页**：

1. **Cache API**
2. **R2** gunzip
3. 未命中 → **404**（不回退 Assets）

对外始终返回未压缩 HTML；`/api/*`、验证文件、静态扩展名仍走 Assets / 原逻辑。

## 缓存头

- HTML：`Cache-Control: public, s-maxage=86400, max-age=0`
- `Vary: Accept-Encoding`
- 发版：改 `PAGES_CACHE_VERSION`（vars）使 cache key 变化；或缩短 s-maxage 后自然失效

## 构建与部署

```bash
cp .env.example .env        # 首次：填 R2_ACCOUNT_ID / R2_ACCESS_KEY_ID / R2_SECRET_ACCESS_KEY（见 ops §3.1）
npm run build:site          # 全量：静态共享页刷新，并预渲染所有工具页 + gzip
npm run build:site:full     # 同 build:site，保留为显式全量别名
npm run tool:touch -- --slug=<slug> # 工具内容改动后刷新 catalog updatedAt
npm run upload:r2           # 默认 hash 增量：按上次成功上传 manifest 的 fileHashes，只上传变化 .html.gz；仍重写 meta
npm run upload:r2:full      # 强制全量同步 .html.gz + 写 _meta/pages-build.json（优先 S3 API）
npm run verify:r2           # R2 ↔ wrangler PAGES_CACHE_VERSION / contentHash
npm run deploy              # 全量 build + hash 增量 upload:r2 → verify → 提示 git push（CF）；live 另跑
npm run deploy:full         # 强制全量 build + 全量 upload + verify
# CF 成功后：npm run verify:r2:live
```

远程上传：有 `.env` S3 凭据时进程内并发 `PutObject`；否则回退逐文件 `wrangler r2 object put`（慢）。`_meta/pages-build.json` 现为 **schemaVersion 4**（含上次成功上传的全量 `fileHashes`，供 hash 增量上传）；Worker 探针仍只读 `pagesCacheVersion` / `contentHash`。构建默认全量；R2 上传不看 git 或 `updatedAt`，只比较本地 `.html.gz` 内容 hash 与上次上传 manifest。

`predeploy` 含 `build:site` + lint。运维操作与凭据获取：[`ops/worker-r2-ops.md`](../../ops/worker-r2-ops.md)（尤其 **§3.1**）。

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
