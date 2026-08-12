# Worker + R2 运维手册

多语言 HTML（含工具页）以 **gzip 单版本** 存 R2；Worker 做 **Cache API → R2**（未命中 **404**）。  
静态资源（css/js/vendor/sitemap/robots/icons）走 Workers Static Assets（`public/`，经 `.assetsignore` **排除 `_pages/`**）。

架构设计（键规范、URL 映射）：[`docs/worker+R2架构/design.md`](../docs/worker+R2架构/design.md)  
思路原文：[`docs/worker+R2架构/初始思路.md`](../docs/worker+R2架构/初始思路.md)  
日常启停总览：[`ops/README.md`](./README.md)

### 发版一览（现行）

| 步骤 | 谁做 | 说明 |
|---|---|---|
| `npm run deploy` | 本机 | `predeploy`（build + lint）→ `upload:r2` → `verify:r2`；**不**本机 `wrangler deploy` |
| `git push` | 本机 → GitHub | Cloudflare **拉仓库**部署 Worker + Assets |
| `npm run verify:r2:live` | 本机（CF 成功后） | 生产 `/api/ops/pages-build` 与 R2 对齐 |

紧急本机直发 Worker：`npm run deploy:worker-only`（或 `node scripts/deploy-site.mjs --wrangler-deploy`）。

---

## 1. 组件与绑定

| 组件 | 配置 / 名称 | 作用 |
|---|---|---|
| Worker | `wrangler.jsonc` → `name: onlinefreetools`，`main: src/index.ts` | 路由、语言协商、API、Cache→R2 HTML |
| R2 | binding `PAGES_BUCKET` → 桶 `onlinefreetools-pages` | **唯一**预渲染 HTML（`.html.gz`） |
| R2 预览 | `onlinefreetools-pages-preview` | 本地 / preview 用（可选单独创建） |
| Assets | `assets.directory: ./public/` + `public/.assetsignore` | vendor、sitemap 等；**不含** `_pages` HTML |
| 缓存版本 | var `PAGES_CACHE_VERSION` | 改值可使 HTML Cache API key 失效（须随 Worker 一起经 **git push** 上线） |

R2 object key 示例：`_pages/en/tools/text-diff.html.gz`（**不是**公开 URL）。

---

## 2. 首次开通（只做一次）

1. 登录正确 Cloudflare 账号：`npx wrangler login` / `npx wrangler whoami`（远程 `upload:r2` 需要）
2. 创建桶：

```bash
npx wrangler r2 bucket create onlinefreetools-pages
npx wrangler r2 bucket create onlinefreetools-pages-preview   # 可选
```

3. 确认 `wrangler.jsonc` 中 `r2_buckets` 的 `bucket_name` / `preview_bucket_name` 与上一致。
4. 确认 **GitHub ↔ Cloudflare** 已绑定本仓库，且生产自定义域绑在**同一 Worker**（`onlinefreetools.org`）。仅本机 `wrangler deploy` 而域在别的账号/项目上时，生产不会更新。

**未建桶就部署 Worker**：常因 R2 binding 失败而部署失败。  
**桶在但从未 `upload:r2`**：**全部**预渲染 HTML（首页 / taxonomy / 工具）**404**——`_pages` 不进 Assets。

---

## 3. 日常命令

| 命令 | 作用 |
|---|---|
| `npm run build:site` | merge → 首页/taxonomy → **预渲染工具页** → gzip `_pages` → sitemap/vendor |
| `npm run prerender:tools` | 仅预渲染 `public/_pages/{lang}/tools/{slug}.html` |
| `npm run gzip:pages` | 为 `_pages` 下 `.html` 生成旁路 `.html.gz`（默认 level 9） |
| `npm run upload:r2` | 将 `.html.gz` **远程**同步到 `onlinefreetools-pages`，并写 `_meta/pages-build.json` |
| `npm run upload:r2:local` | 同步到**本地** wrangler 模拟桶（`getPlatformProxy`） |
| `npm run verify:r2` | 校验 R2 清单与 `PAGES_CACHE_VERSION` / 本地 contentHash 一致 |
| `npm run verify:r2:live` | 同上 + 请求生产 `/api/ops/pages-build`（**等 CF 部署完成后再跑**） |
| `npm run deploy` | predeploy → upload → verify → **打印 git push 步骤**；默认不 live |
| `npm run deploy:skip-upload` | 跳过上传，仍 verify + 提示 push |
| `npm run deploy:worker-only` | 紧急：本机 `wrangler deploy` |
| `npm run upload:r2 -- --dry-run` | 只打印将上传的 object key |
| `npm run lint:seo` / `lint:vendor` | 发版门禁 |
| `npx wrangler deploy` | 仅 Worker + Assets（**不**校验 R2；生产默认走 GitHub） |

环境变量（可选）：

| 变量 | 默认 | 说明 |
|---|---|---|
| `R2_PAGES_BUCKET` | `onlinefreetools-pages` | 上传目标桶名 |
| `R2_UPLOAD_CONCURRENCY` | `6`（本地上传脚本内） | 并发 put 数 |
| `PAGES_CACHE_VERSION` | `wrangler.jsonc` vars | 发版递增以失效边缘 HTML 缓存 |
| `PAGES_R2_PREFIX` | 空 | 可选 R2 key 前缀（如 `builds/abc/`） |

---

## 4. 标准发版流程

```bash
# 1) 本机：构建 + lint + 灌 R2 + 校验（不部署 Worker）
npm run deploy

# 2) 提交并推送（Cloudflare 拉 GitHub → Worker + Assets）
git status   # vendor / wrangler.jsonc / 源码须入库；*.html.gz 不入库
git push

# 3) Dashboard 显示部署成功后
npm run verify:r2:live
```

`npm run deploy` → [`scripts/deploy-site.mjs`](../scripts/deploy-site.mjs)：

1. （npm `predeploy`）`build:site` + `lint:seo` + `lint:vendor`
2. `upload:r2` — 上传 `.html.gz`，写入 R2 `_meta/pages-build.json`（`pagesCacheVersion` + `contentHash`）
3. `verify:r2` — R2 清单 ↔ `wrangler.jsonc` 的 `PAGES_CACHE_VERSION` + 本地哈希；抽样 object 存在
4. **Worker + Assets**：默认 **注释掉** 本机 `wrangler deploy`；打印 **git push** 步骤
5. `verify:r2:live` — **默认跳过**；CF 成功后单独跑，或 `node scripts/deploy-site.mjs --live`

可选：

```bash
npm run deploy:skip-upload                      # R2 已最新：只 verify + 提示 push
npm run verify:r2
npm run verify:r2:live                          # CF 部署完成后
node scripts/deploy-site.mjs --wrangler-deploy  # 紧急本机 wrangler deploy
node scripts/deploy-site.mjs --live             # 假定 CF 已好，立刻 live verify
```

手动分步（与上等价）：

```bash
npm run build:site
npm run lint:seo && npm run lint:vendor
npm run upload:r2
npm run verify:r2
git push
# 等 Dashboard 成功
npm run verify:r2:live
# 紧急：
# npm run deploy:worker-only
```

### 版本对齐约定

| 位置 | 字段 |
|---|---|
| Worker | `wrangler.jsonc` → `vars.PAGES_CACHE_VERSION`（经 **git push** / 紧急 wrangler 进 env） |
| R2 | `_meta/pages-build.json` → `pagesCacheVersion` + `contentHash` |
| 探针 | `GET /api/ops/pages-build` → `{ pagesCacheVersion, r2MetaVersion, aligned }` |

三者 `pagesCacheVersion` 必须相同；`contentHash` 必须与本地 `public/_pages/**/*.html.gz` 一致。改 HTML 后务必重新 `upload:r2`；仅改 Worker 且 HTML 未变可用 `deploy:skip-upload` 后再 push。

### 入库与 Assets（GitHub 路径）

| 产物 | 是否入库 | 说明 |
|---|---|---|
| `public/vendor/**` | **必须 commit** | 否则样式 / WASM 404 |
| `public/_pages/**` | 可入库作构建产物；**`.assetsignore`** | **不**上传 Cloudflare Assets；权威只认 R2 |
| `public/_pages/*/tools/` | **gitignore** | 只靠构建 + R2 |
| `*.html.gz` | **gitignore** | 只靠 `upload:r2` |

远端 **不跑** 本地 `predeploy`，也 **不会** 自动 `upload:r2`。仅 push、未 upload → 预渲染 HTML 易 404 / 仍旧。

### 发版后抽检

```bash
# 版本对齐（verify:r2:live 之后；可再抽查）
curl -sS https://onlinefreetools.org/api/ops/pages-build
# 期望：{"pagesCacheVersion":"...","r2MetaVersion":"...","aligned":true,...}

# 须带 Accept: text/html
curl -sS -o /dev/null -w '%{http_code}\n' -H 'Accept: text/html' https://onlinefreetools.org/
curl -sS -o /dev/null -w '%{http_code}\n' -H 'Accept: text/html' https://onlinefreetools.org/tools/text-diff
curl -sS -o /dev/null -w '%{http_code}\n' https://onlinefreetools.org/sitemap.xml
curl -sS -o /dev/null -w '%{http_code}\n' https://onlinefreetools.org/google2cb457f0956f79d9.html
```

再人工打开 1–2 个工具页，确认交互与 `/vendor/*` 为 200。需要时按 [`ops/README.md`](./README.md) §4.1 跑 IndexNow。

---

## 5. 本地开发

```bash
npm run start:dev                    # build:site + 灌本地 R2 + wrangler + Ops UI
npm run start:dev -- --no-seed-r2    # 不灌本地 R2（预渲染 HTML 将 404，除非桶里已有对象）
npm run start:dev -- --no-build      # 跳过构建（gzip/清单可能过期）
npm run upload:r2:local              # 单独灌本地模拟桶（含 _meta/pages-build.json）
npm run verify:r2 -- --local         # 校验本地模拟桶 ↔ wrangler 版本
```

| 场景 | 行为 |
|---|---|
| 已 `build:site`，未 seed R2 | 预渲染 HTML **404**（Assets 无 `_pages`） |
| 已 seed 本地 R2 | 与生产路径一致（Cache → R2） |
| 生产未 upload | **全部**预渲染 HTML **404** |

默认站点：`http://127.0.0.1:8787/`（探测须带 `Accept: text/html`）。`status:dev` 默认探 8787；若 `--port 8788` 勿被 FAIL 误导。

---

## 6. 缓存失效

HTML：`Cache-Control: public, s-maxage=86400, max-age=0`，`Vary: Accept-Encoding`。  
Cache key = 公开 URL + `__ce=identity` + `__v=<PAGES_CACHE_VERSION>`（缓存**明文** HTML；R2 仍存 gzip）。

发版后要尽快让用户看到新 HTML：

1. 在 `wrangler.jsonc` 递增 `PAGES_CACHE_VERSION` → **`upload:r2`（写入 meta）+ git push**（Worker vars 上线）；或  
2. 等待 s-maxage 过期；或  
3. Dashboard Cache Purge（若账号具备）。

改 HTML 后务必 **`upload:r2`**，否则边缘仍可能命中旧 R2 对象。只 push 不 upload → 新 Worker + 旧 HTML。

> Worker **对外始终出明文 HTML**（不设 `Content-Encoding: gzip`）；R2 存 gzip，读时 gunzip。压缩交给运行时/边缘，避免双重 gzip 乱码。

gzip 构建侧已用 **level 9**（约省 82% 体积）；再压需换 Brotli 或减 HTML 源（见设计/问答日志）。

---

## 7. 新建工具与本架构

SEO / Skill / brief / 分片流程**不变**（见 `tool-creation.mdc`、`tool-coverage-pass`）。

额外记住：

1. `npm run build:site` 会预渲染该工具十语 HTML 并 gzip  
2. 上线：`npm run deploy` → **git push** → `verify:r2:live`；紧急才 `deploy:worker-only`  
3. **不要**改 `src/index.ts`（`toolSlugs.generated.ts` + `registerToolPages` 自动覆盖）

---

## 8. 回滚

| 层 | 做法 |
|---|---|
| Worker 代码 | `git revert` / 切稳定 commit 后 **push**（或紧急 `deploy:worker-only`）；HTML 未变可 `deploy:skip-upload` 后再 push |
| HTML 内容 | 用上一版构建产物再 `upload:r2` + `verify:r2` 覆盖同 key；再 **push**（若 Worker 也要回退）；或 `PAGES_R2_PREFIX=builds/<旧id>/`（须事先按前缀上传） |
| 紧急只保首页 | 用上一版 `upload:r2` 覆盖首页相关 key；Assets **无** `_pages` 可兜底 |

回滚到「Worker 内 SSR 全量工具页」仅适用于重构前的旧 commit，且会再次撞上 ~3MB Worker 包限制，一般不推荐作长期方案。

---

## 9. 故障排查

| 现象 | 可能原因 | 处理 |
|---|---|---|
| CF/Git 部署报 R2 binding 错 | 桶未创建或名称不一致 | §2 建桶；核对 `wrangler.jsonc` |
| 首页/工具均 404 | 未 `upload:r2`；或误以为 Assets 有 `_pages` | `npm run build:site && npm run upload:r2` |
| 本地工具 404 | 未 seed R2 / `--no-seed-r2` / 未 `build:site` | `upload:r2:local`；勿依赖 Assets |
| 改了文案线上仍旧 | 只 push 未 upload；或 Cache / 旧 R2 | 再 `upload:r2`；递增 `PAGES_CACHE_VERSION` 并 push |
| `verify:r2:live` 过早失败 | CF 尚未部署完 | 等 Dashboard 成功后再跑 |
| `verify:r2:live` aligned=false | Worker vars 与 R2 meta 不一致 | 先 upload，再 push 含正确 `PAGES_CACHE_VERSION` 的 commit |
| Worker 包又接近 3MB | 误把 `toolPageRegistry` / `*Page.ts` import 进 Worker | 入口只用 `toolSlugs` + R2 |
| `upload:r2` 报 **403 Forbidden** | 账号/权限/桶；或 Object R/W token | 见 §9.1 |
| `upload:r2` 很慢 | 远程逐文件 wrangler put | 调 `R2_UPLOAD_CONCURRENCY`；或日后 S3 批量 |
| R2 缺 `_meta/pages-build.json` | 未用新版 upload | `upload:r2`；看 `.cache/pages-build.json` |
| gzip 正文乱码 | 双重压缩（历史） | 对外 identity；压缩交给运行时 |

### 9.1 `upload:r2` → 403 Forbidden

`wrangler r2 object put` 走 **Cloudflare REST API**（不是 S3 兼容 API）。

1. **确认账号与桶**  
   ```bash
   npx wrangler whoami
   npx wrangler r2 bucket list
   npx wrangler r2 bucket create onlinefreetools-pages   # 若没有
   ```
2. **重登**并对准正确账户：`npx wrangler logout && npx wrangler login`  
   必要时删 `node_modules/.cache/wrangler/wrangler-account.json` 再 login。
3. **`CLOUDFLARE_API_TOKEN`**：Object Read & Write **不能**用于 wrangler REST put（会 403）。需 **Admin Read & Write**，或 `unset CLOUDFLARE_API_TOKEN` 改走 OAuth / S3 兼容凭据。
4. Dashboard → R2：账户已开通，桶在**同一** account。

本地不受影响：`npm run upload:r2:local` / `start:dev`。

验证远程对象：

```bash
npx wrangler r2 object get onlinefreetools-pages/_pages/en/tools/text-diff.html.gz --file=/tmp/t.html.gz --remote
file /tmp/t.html.gz   # 应为 gzip
```

Worker 体积自检（不必实际上线）：

```bash
npx wrangler deploy --dry-run
# 期望 Total Upload 约数百 KiB 级，gzip 远小于 3MB
```

---

## 10. 检查清单（复制用）

### 首次开通

- [ ] `wrangler login` 账号正确（能 `upload:r2`）  
- [ ] 已创建 `onlinefreetools-pages`（及可选 preview）  
- [ ] GitHub ↔ Cloudflare 绑定；自定义域绑在同一 Worker  

### 每次发版

- [ ] `npm run deploy`（upload + verify）  
- [ ] **git push**（含 vendor / `PAGES_CACHE_VERSION` 等）  
- [ ] CF Dashboard 部署成功  
- [ ] `npm run verify:r2:live` → `aligned: true`  
- [ ] 抽检 `/`、`/tools/{slug}`、`/sitemap.xml`、验证文件  
- [ ] 需要时 IndexNow / 递增 `PAGES_CACHE_VERSION`  

### 新工具

- [ ] coverage / lint 按 `tool-creation`  
- [ ] `build:site` 后本地打开工具 URL  
- [ ] `npm run deploy` → **git push** → `verify:r2:live`  
- [ ] 生产 `/api/ops/pages-build` → `aligned: true`  
