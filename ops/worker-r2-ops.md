# Worker + R2 运维手册

工具 / taxonomy / about 等 HTML 以 **gzip** 存 R2；Worker：**Cache → R2**（未命中 **404**）。  
**各语言首页**由 `build:site` 写入 **常规路径** `public/index.html` 与 `public/{lang}/index.html`（进 Static Assets）；Worker：**Cache → Assets → R2 `_pages/...` 兜底**。`wrangler` 对 `/` 与各 `/{lang}/` 设 `run_worker_first`，保留 Accept-Language。须 **commit + git push** 更新首页。  
其它静态资源（css/js/vendor/sitemap/robots/icons）同走 Assets。

架构设计（键规范、URL 映射）：[`docs/worker+R2架构/design.md`](../docs/worker+R2架构/design.md)  
思路原文：[`docs/worker+R2架构/初始思路.md`](../docs/worker+R2架构/初始思路.md)  
日常启停总览：[`ops/README.md`](./README.md)

### 发版一览（现行）

| 步骤 | 谁做 | 说明 |
|---|---|---|
| `npm run deploy` | 本机 | 全量 `predeploy` build + lint → `upload:r2`（hash 增量）→ `verify:r2`；**不**本机 `wrangler deploy` |
| `git push` | 本机 → GitHub | Cloudflare **拉仓库**部署 Worker + Assets |
| `npm run verify:r2:live` | 本机（CF 成功后） | 生产 `/api/ops/pages-build` 与 R2 对齐 |

紧急本机直发 Worker：`npm run deploy:worker-only`（或 `node scripts/deploy-site.mjs --wrangler-deploy`）。  
本机直连 Cloudflare 超时（`ETIMEDOUT 172.64.*`）：**§3.1.5** / **§9.2**（`R2_HTTPS_PROXY=socks5h://127.0.0.1:8888`）。

---

## 1. 组件与绑定

| 组件 | 配置 / 名称 | 作用 |
|---|---|---|
| Worker | `wrangler.jsonc` → `name: onlinefreetools`，`main: src/index.ts` | 路由、语言协商、API、Cache→R2 HTML |
| R2 | binding `PAGES_BUCKET` → 桶 `onlinefreetools-pages` | 预渲染 HTML（`.html.gz`；首页亦上传作兜底） |
| R2 预览 | `onlinefreetools-pages-preview` | 本地 / preview 用（可选单独创建） |
| Assets | `assets.directory: ./public/` + `public/.assetsignore` | vendor、sitemap、**首页** `index.html` / `{lang}/index.html` |
| 缓存版本 | var `PAGES_CACHE_VERSION` | 改值可使 HTML Cache API key 失效（须随 Worker 一起经 **git push** 上线） |

R2 object key 示例：`_pages/en/tools/text-diff.html.gz`（**不是**公开 URL）。

---

## 2. 首次开通（只做一次）

1. 登录正确 Cloudflare 账号：`npx wrangler login` / `npx wrangler whoami`（记下 **Account ID**，供 `.env` 的 `R2_ACCOUNT_ID`）
2. 创建桶：

```bash
npx wrangler r2 bucket create onlinefreetools-pages
npx wrangler r2 bucket create onlinefreetools-pages-preview   # 可选
```

3. 确认 `wrangler.jsonc` 中 `r2_buckets` 的 `bucket_name` / `preview_bucket_name` 与上一致。
4. **配置远程快速上传凭据**（推荐）：按 **§3.1** 在 Cloudflare 创建 R2 S3 Token，写入本机 `.env`（`cp .env.example .env`）。未配置时 `upload:r2` 仍可走 wrangler，但很慢。
5. 确认 **GitHub ↔ Cloudflare** 已绑定本仓库，且生产自定义域绑在**同一 Worker**（`onlinefreetools.org`）。仅本机 `wrangler deploy` 而域在别的账号/项目上时，生产不会更新。

**未建桶就部署 Worker**：常因 R2 binding 失败而部署失败。  
**桶在但从未 `upload:r2`**：taxonomy / 工具等 **404**；首页若已随 git 进 Assets 仍可访问（Worker 优先读 Assets）。

---

## 3. 日常命令

| 命令 | 作用 |
|---|---|
| `npm run build:site` | 全量：merge → 刷新首页/taxonomy/sitemap/vendor → 预渲染所有工具页 → gzip |
| `npm run build:site:full` | 同 `build:site`，保留为显式全量别名 |
| `npm run tool:touch -- --slug=a,b` | 把目标工具 catalog shard 的 `updatedAt` 改为当前 ISO 时间 |
| `npm run prerender:tools` | 全量预渲染所有工具页 |
| `npm run prerender:tools:full` | 强制预渲染所有工具页 |
| `npm run gzip:pages` | 增量压缩：为 `_pages` 下源 HTML 新于 `.gz` 的文件生成旁路 `.html.gz`（默认 level 9） |
| `npm run gzip:pages:full` | 强制重压全部 `_pages/**/*.html` |
| `npm run upload:r2` | 默认增量：按上次成功上传 manifest 的 `fileHashes` 比较，只上传 hash 不同的 `.html.gz`，并重写 `_meta/pages-build.json` |
| `npm run upload:r2:full` | 强制全量上传 `_pages/**/*.html.gz` |
| `npm run upload:r2:local` | 同步到**本地** wrangler 模拟桶（`getPlatformProxy`） |
| `npm run verify:r2` | 校验 R2 清单与 `PAGES_CACHE_VERSION` / 本地 contentHash 一致；有 S3 凭据时与 `upload:r2` 一样优先走 S3 读取 |
| `npm run verify:r2:live` | 同上 + 请求生产 `/api/ops/pages-build`（**等 CF 部署完成后再跑**） |
| `npm run deploy` | 默认：全量 build + lint → upload:r2（hash 增量）→ verify → **打印 git push 步骤**；默认不 live |
| `npm run deploy:full` | 强制全量 build + 全量 upload + verify |
| `npm run deploy:skip-upload` | 跳过上传，仍 verify + 提示 push |
| `npm run stage:tools:changed` | 只 stage 变更/新增工具相关路径；可加 `-- --slug=a,b` |
| `npm run commit:tools:changed` | 只 commit 变更/新增工具相关路径；建议显式 `-- --slug=a,b -m "tools: update ..."` |
| `npm run deploy:worker-only` | 紧急：本机 `wrangler deploy` |
| `npm run upload:r2 -- --dry-run` | 只打印将上传的 object key |
| `npm run upload:r2 -- --s3` | 强制 S3（缺凭据则失败） |
| `npm run upload:r2 -- --wrangler` | 强制逐文件 wrangler put（慢回退） |
| `npm run lint:seo` / `lint:vendor` | 发版门禁 |
| `npx wrangler deploy` | 仅 Worker + Assets（**不**校验 R2；生产默认走 GitHub） |

环境变量（可选）：

| 变量 | 默认 | 说明 |
|---|---|---|
| `R2_PAGES_BUCKET` | `onlinefreetools-pages` | 上传目标桶名 |
| `R2_UPLOAD_CONCURRENCY` | S3=`32` / wrangler=`6` | 并发 put 数 |
| `R2_ACCOUNT_ID` / `CLOUDFLARE_ACCOUNT_ID` | — | S3 endpoint 用账户 ID |
| `R2_ACCESS_KEY_ID` / `AWS_ACCESS_KEY_ID` | — | R2 S3 API Access Key |
| `R2_SECRET_ACCESS_KEY` / `AWS_SECRET_ACCESS_KEY` | — | R2 S3 API Secret |
| `R2_S3_ENDPOINT` / `AWS_ENDPOINT_URL` | `https://{accountId}.r2.cloudflarestorage.com` | 可选覆盖 |
| `R2_HTTPS_PROXY` / `HTTPS_PROXY` / `HTTP_PROXY` / `ALL_PROXY` | 空（直连） | 本机经代理访问 R2；`ssh -D 8888` 用 `socks5h://127.0.0.1:8888`（优先 `R2_HTTPS_PROXY`） |
| `PAGES_CACHE_VERSION` | `wrangler.jsonc` vars | 发版递增以失效边缘 HTML 缓存 |
| `PAGES_R2_PREFIX` | 空 | 可选 R2 key 前缀（如 `builds/abc/`） |

### 3.1 加速远程 `upload:r2`（S3 + 增量）

默认远程路径：**进程内 S3 `PutObject`**（`@aws-sdk/client-s3`），不再为每个文件 spawn wrangler。未配置 S3 凭据时回退 wrangler（慢，会打 warn）。

凭据与可选参数写入仓库根 **`.env`**（模板 `.env.example`；`.env*` 已 gitignore，**禁止提交密钥**）。脚本启动时自动加载 `.env`、`.env.local`（**不覆盖** shell 里已 `export` 的同名变量）。

#### 3.1.1 参数一览：从哪取值

| `.env` 键 | 是否必填 | Cloudflare 侧如何拿 | 本机如何拿 / 写 |
|---|---|---|---|
| `R2_ACCOUNT_ID` | S3 路径必填（无自定义 endpoint 时） | Dashboard → 任意域 Overview 右侧 **API** → **Account ID**；或 **Workers & Pages** → Account details → Account ID；或全局搜索 **Copy account ID** | `npx wrangler whoami` 输出的账户 **Account ID**；多账户时选与桶 `onlinefreetools-pages` 所在账户一致的那一行 |
| `R2_ACCESS_KEY_ID` | S3 路径必填 | 见下 **§3.1.2** 创建 R2 API Token 后页面上的 **Access Key ID**（只显示一次，立刻复制） | 粘贴进 `.env`；**无法**从 wrangler / 仓库反查已有 Secret |
| `R2_SECRET_ACCESS_KEY` | S3 路径必填 | 同上页的 **Secret Access Key**（只显示一次；丢失只能重新建 token） | 粘贴进 `.env`；勿写入 git / 聊天 / 截图仓库 |
| `R2_PAGES_BUCKET` | 可选 | Dashboard → **R2** → 桶列表中的名称 | 默认 `onlinefreetools-pages`（与 `wrangler.jsonc` `r2_buckets` 一致）；本机一般不用改 |
| `R2_UPLOAD_CONCURRENCY` | 可选 | — | 本机调并发；S3 默认 `32`，wrangler 回退默认 `6` |
| `R2_S3_ENDPOINT` | 可选 | 默认拼 `https://<AccountID>.r2.cloudflarestorage.com`（见 [R2 Authentication](https://developers.cloudflare.com/r2/api/tokens/)）；EU / FedRAMP 管辖桶用对应 jurisdiction endpoint | 仅当桶有 jurisdiction 或要用自定义 endpoint 时写入 `.env` |
| `R2_HTTPS_PROXY` | 可选 | — | 本机 HTTP/SOCKS 隧道，见 **§3.1.3** |

兼容别名（一般不必写）：`CLOUDFLARE_ACCOUNT_ID`、`AWS_ACCESS_KEY_ID`、`AWS_SECRET_ACCESS_KEY`、`AWS_ENDPOINT_URL`。

> **不要混淆**：Dashboard「My Profile → API Tokens」里的 **Cloudflare API Token**（给 wrangler REST / `CLOUDFLARE_API_TOKEN`）**不是** R2 S3 的 Access Key。S3 上传必须用 **R2 → Manage API Tokens** 生成的一对 Key（§3.1.2）。Object Read & Write 的 R2 token **不能**代替 wrangler REST 的 Admin 权限（见 §9.1）。

#### 3.1.2 在 Cloudflare 创建 R2 S3 凭据

官方说明：[R2 API tokens / Authentication](https://developers.cloudflare.com/r2/api/tokens/)

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)，确认右上角账户是托管 `onlinefreetools.org` / 桶 `onlinefreetools-pages` 的那个账户。
2. 左侧进入 **R2** → **Overview**（对象存储总览）。
3. 在 **Account Details**（账户详情）区域，点 **API Tokens** 旁的 **Manage**（管理）。
4. 选择 **Create Account API token** 或 **Create User API token**（个人常用 User；账号级仅 Super Administrator 可管）。
5. **Permissions（权限）**选 **Object Read & Write**（对象读与写）。可 **Apply to specific buckets only**，勾选 `onlinefreetools-pages`（及若需要的 preview 桶）。
6. 创建成功后页面会显示：
   - **Access Key ID** → 写入 `.env` 的 `R2_ACCESS_KEY_ID`
   - **Secret Access Key** → 写入 `.env` 的 `R2_SECRET_ACCESS_KEY`  
   Secret **只显示一次**，关掉页面后无法再看，务必当场保存到本机 `.env`。
7. 同页或账户详情中确认 **Account ID**，写入 `R2_ACCOUNT_ID`（也可用本机 `wrangler whoami`，见下）。

#### 3.1.3 在本机写入与校验

```bash
# 1) 确认 wrangler 登录的是正确账户，并抄 Account ID
npx wrangler login          # 若尚未登录
npx wrangler whoami         # 记下 Account ID（多账户时对准含 onlinefreetools 的那一行）
npx wrangler r2 bucket list # 应能看到 onlinefreetools-pages

# 2) 从模板生成本机配置（勿 git add .env）
cp .env.example .env
```

编辑仓库根 `.env` 示例：

```bash
# 来自 wrangler whoami 或 Dashboard Account ID
R2_ACCOUNT_ID=0123456789abcdef0123456789abcdef

# 来自 R2 → Manage API Tokens 创建成功页（各只出现一次）
R2_ACCESS_KEY_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
R2_SECRET_ACCESS_KEY=yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy

# 可选
# R2_PAGES_BUCKET=onlinefreetools-pages
# R2_UPLOAD_CONCURRENCY=32
# 本机直连 Cloudflare 超时见 §3.1.5：
# R2_HTTPS_PROXY=socks5h://127.0.0.1:8888
```

校验脚本是否读到 S3 凭据（应走 s3，而不是 wrangler warn）：

```bash
npm run upload:r2 -- --dry-run
# 期望日志含：transport=s3
# 若仍 transport=wrangler：检查 .env 是否在仓库根、键名是否正确、或 shell 是否用空字符串盖住了变量
```

也可用临时 `export`（优先级高于 `.env`），不必写文件；CI 则把同名变量配进 Runner secrets。

#### 3.1.4 Hash 增量 / 全量上传

```bash
npm run upload:r2              # 默认增量：只传需更新 .html.gz + 重写 meta
npm run upload:r2:full         # 强制全量（S3 并发，通常数十秒级）
```

增量对比顺序：上传前计算本地 `public/_pages/**/*.html.gz` 的 sha256，读取 R2 `_meta/pages-build.json`（无远程 meta 时回退本地 `.cache/pages-build.json`）里的上次成功上传 `fileHashes`，只上传 hash 不同或缺失的对象。上传成功后重写 `_meta/pages-build.json`，保存本次全量文件列表、`contentHash` 和每个对象的 `fileHashes`。首次、无 meta 或无哈希时会自动扩大到全量上传。`npm run deploy` 默认走 hash 增量上传；排障、重建基线或怀疑远端缺对象时用 `npm run deploy:full`。

如何判断需要更新上传的文件：

- 工具页、首页、taxonomy、about/privacy/terms/contact 等所有 `.html.gz`：统一按 `fileHashes` 是否变化上传。
- 新增对象：远端 meta 没有该 key 的 hash，视为需要上传。
- git 数据不参与此判断：未 commit 的修改、最新 commit、最新 push 都不会触发上传；真正的上传依据是本地 `.html.gz` 内容 hash。

#### 3.1.5 本机代理 / SSH 隧道（直连 Cloudflare 超时）

国内或受限网络下，`upload:r2` / `verify:r2` 可能在 TCP 阶段失败：

```text
AggregateError [ETIMEDOUT]
  connect ETIMEDOUT 172.64.*.*:443
```

这通常**不是** `.env` 凭据错误（日志已出现 `transport=s3` 时凭据已读到），而是本机无法直连 `*.r2.cloudflarestorage.com`（Cloudflare Anycast）。

`scripts/lib/r2-s3-client.mjs` 会为 S3 客户端注入代理（AWS SDK **默认不读** `HTTPS_PROXY`）。读取顺序：

1. `R2_HTTPS_PROXY`（推荐，专给 R2，避免被 Cursor 等注入的失效 `HTTPS_PROXY` 覆盖）
2. `HTTPS_PROXY` / `https_proxy`
3. `HTTP_PROXY` / `http_proxy`
4. `ALL_PROXY` / `all_proxy`

协议：

| 本机隧道类型 | 典型命令 | `.env` / 命令行 URL |
|---|---|---|
| SSH 动态端口（SOCKS） | `ssh -D 8888 user@jump` | **`socks5h://127.0.0.1:8888`**（注意 `socks5h`，DNS 也走代理） |
| HTTP CONNECT 代理 | Clash / Surge HTTP 端口 | `http://127.0.0.1:7890` |
| 系统 TUN / VPN | 客户端开增强模式 | 通常**不必**设代理变量 |

**操作步骤（以本机 `8888` = `ssh -D` 为例）**：

```bash
# 1) 确认隧道在听
nc -z 127.0.0.1 8888 && echo ok

# 2) 确认是 SOCKS（HTTP 会 CONNECT aborted）
curl -I --connect-timeout 8 -x socks5h://127.0.0.1:8888 https://cloudflare.com
# 期望：有 HTTP 响应头（如 301/200），不是超时 / CONNECT aborted

# 3) 单次命令（优先）
R2_HTTPS_PROXY=socks5h://127.0.0.1:8888 npm run upload:r2
R2_HTTPS_PROXY=socks5h://127.0.0.1:8888 npm run verify:r2
R2_HTTPS_PROXY=socks5h://127.0.0.1:8888 npm run deploy

# 或写入仓库根 .env（持久；勿提交）
# R2_HTTPS_PROXY=socks5h://127.0.0.1:8888

# 4) 确认脚本吃到了代理
R2_PROXY_DEBUG=1 R2_HTTPS_PROXY=socks5h://127.0.0.1:8888 npm run upload:r2 -- --dry-run
# stderr 期望：[r2-s3] using proxy=socks5h://127.0.0.1:8888
```

**常见误用**：

- 把 SOCKS 写成 `http://127.0.0.1:8888` → CONNECT aborted 或仍超时。
- 只开了浏览器代理、未设 `R2_HTTPS_PROXY` / 未开 TUN → Node 仍直连 CF IP。
- Cursor 注入了已关闭的 `HTTPS_PROXY=http://127.0.0.1:xxxxx` → 用 **`R2_HTTPS_PROXY`** 覆盖，或 `unset HTTPS_PROXY HTTP_PROXY ALL_PROXY` 后再 export 正确值。
- `--wrangler` 回退路径**不**走本节 S3 代理注入；网络不通时请用默认 S3 + `R2_HTTPS_PROXY`，不要强制 wrangler。

本地 `upload:r2:local` / `start:dev` 写模拟桶，**默认不连 Cloudflare**。做法：从 `wrangler.jsonc` 去掉 Workers AI 绑定后走临时配置（`.cache/wrangler.no-ai.json`），再 `getPlatformProxy({ persist: true, remoteBindings: false })`；wrangler 带 `--local -c` 同一份配置。wrangler 4.58 上 AI 是 always-remote，仅关 `remoteBindings` 仍会建 preview session，本机直连 `*.workers.dev` 超时就会让灌桶失败。需要本机试 Prompt AI 时：`npm run start:dev -- --remote-bindings`（须能访问 Cloudflare，可配 `R2_HTTPS_PROXY`）。

#### 3.1.6 少量工具改动路径

适用：只新增或修改少量工具（catalog shard / i18n shard / page module / icon / work-task）。构建仍全量；上传会根据 hash 只传变化对象。

```bash
npm run tool:touch -- --slug=image-compress
npm run build:site
npm run upload:r2
npm run verify:r2
npm run commit:tools:changed -- --slug=image-compress -m "tools: update image compress"
git push
```

`build:site` / `deploy` 不看 git 工作树，且构建总是全量。编辑工具时仍应把对应 `src/site/tool-catalog.d/{slug}.json` 的 `updatedAt` 改为本次编辑时间（建议 UTC ISO，例如 `2026-08-14T12:00:00.000Z`），用于可见更新时间、sitemap/SEO 元数据和 `commit:tools:changed` 等工具路径辅助。

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

1. （npm `predeploy`）`build:site`（全量）+ `lint:seo` + `lint:vendor`
2. `upload:r2` — 默认只上传 `.html.gz` hash 不同的对象（S3 优先），成功后写入 R2 `_meta/pages-build.json`（`pagesCacheVersion` + `contentHash` + 全量 `fileHashes`）
3. `verify:r2` — R2 清单 ↔ `wrangler.jsonc` 的 `PAGES_CACHE_VERSION` + 本地哈希；抽样 object 存在；有 S3 凭据时优先用 S3 读取，避免与 wrangler 登录账号不一致
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

少量工具改动且已更新对应 catalog `updatedAt`：

```bash
npm run deploy
npm run commit:tools:changed -- --slug=image-compress -m "tools: update image compress"
git push
# 等 Dashboard 成功
npm run verify:r2:live
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
| R2 | `_meta/pages-build.json` → `pagesCacheVersion` + `contentHash`（**schemaVersion 4** 另含全量 `fileHashes`，供默认增量 `upload:r2`） |
| 探针 | `GET /api/ops/pages-build` → `{ pagesCacheVersion, r2MetaVersion, aligned }` |

三者 `pagesCacheVersion` 必须相同；`contentHash` 必须与本地 `public/_pages/**/*.html.gz` 一致。改 HTML 后务必重新 `upload:r2`；仅改 Worker 且 HTML 未变可用 `deploy:skip-upload` 后再 push。需要重传所有对象时用 `upload:r2:full`。

### 入库与 Assets（GitHub 路径）

| 产物 | 是否入库 | 说明 |
|---|---|---|
| `public/vendor/**` | **必须 commit** | 否则样式 / WASM 404 |
| `public/_pages/**` | **gitignore（整树）** | 仅本地 `build:site` 产物；权威只认 R2；`.assetsignore` 双保险 |

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
npm run start:dev                    # build:site + 灌本地 R2（失败则退出）+ wrangler --local + 最新工具页探测 + Ops UI
npm run start:dev -- --no-seed-r2    # 不灌本地 R2（预渲染 HTML 将 404，除非桶里已有对象）
npm run start:dev -- --no-build      # 跳过构建，仍会灌本地 R2（gzip/清单可能过期）
npm run start:dev -- --remote-bindings  # 允许 Workers AI 远程 preview（须能访问 Cloudflare）
npm run upload:r2:local              # 单独灌本地模拟桶（含 _meta/pages-build.json；不连 CF）
npm run verify:r2 -- --local         # 校验本地模拟桶 ↔ wrangler 版本
npm run status:dev                   # 首页 + 最新工具页；新工具 404 会 FAIL
```

| 场景 | 行为 |
|---|---|
| 已 `build:site`，未 seed R2 | 预渲染 HTML **404**（Assets 无 `_pages`） |
| 已 seed 本地 R2 | 与生产路径一致（Cache → R2） |
| 生产未 upload | **全部**预渲染 HTML **404** |
| 灌桶失败但 wrangler 仍起（旧行为） | 首页/旧工具 200，**新**工具 404 |

默认站点：`http://127.0.0.1:8787/`（探测须带 `Accept: text/html`）。`status:dev` 默认探 8787；若 `--port 8788` 勿被 FAIL 误导。`start:dev` 不再吞掉 `upload:r2:local` 错误。

---

## 6. 缓存失效

HTML：`Cache-Control: public, s-maxage=86400, max-age=0`，`Vary: Accept-Encoding`。  
Cache key = 公开 URL（**含 query**）+ `__ce=identity` + `__v=<PAGES_CACHE_VERSION>`（缓存**明文** HTML；R2 仍存 gzip）。`/zh/` 与 `/zh/?preview=1` 是不同 HTML cache key；`__ce` / `__v` 由 Worker 追加或覆盖。

发版后要尽快让用户看到新 HTML：

1. 在 `wrangler.jsonc` 递增 `PAGES_CACHE_VERSION` → **`upload:r2`（写入 meta）+ git push**（Worker vars 上线）；或  
2. 等待 s-maxage 过期；或  
3. Dashboard Cache Purge（若账号具备）。

改 HTML 后务必 **`upload:r2`**，否则边缘仍可能命中旧 R2 对象。只 push 不 upload → 新 Worker + 旧 HTML。

### 6.1 运维按 URL 清 Worker Cache

Worker 内置受保护接口，可删除 `caches.default` 中某个公开 URL 的 exact key：

```bash
curl -sS -X POST 'http://127.0.0.1:8787/api/admin/cache/purge' \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer $CACHE_ADMIN_TOKEN" \
  --data '{"urls":["/zh/","/zh/tools/archive-extractor"]}'
```

Token 配置：

- 本地 `wrangler dev`：写入 `.dev.vars` 的 `CACHE_ADMIN_TOKEN=...`（文件已 gitignore，勿提交）。
- 生产：`npx wrangler secret put CACHE_ADMIN_TOKEN`。
- 请求头支持 `Authorization: Bearer <token>` 或 `X-Cache-Admin-Token: <token>`。

边界：

- 这是 **Worker Cache API exact-key delete**，不是 R2 删除，也不是 Cloudflare CDN 全局 purge。
- Workers Cache API 不提供枚举 `caches.default` 全部条目的能力；接口收到 `{"all":true}` / `{"purgeEverything":true}` 会先校验 token，再返回不支持枚举清空。全站级失效用 `PAGES_CACHE_VERSION`；CDN 级全清用 Cloudflare Cache Purge API / Dashboard。

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
| 本地工具 404 | 未 seed R2 / `--no-seed-r2` / 未 `build:site` / 灌桶被吞过 | `upload:r2:local`；勿依赖 Assets。`start:dev` 灌桶失败会退出；`status:dev` 会测最新工具页 |
| 本地**新**工具 404、旧工具/首页 200 | 模拟桶仍是旧对象（灌桶失败或 `--no-build` 曾跳过 seed） | 看 `start:dev` / `upload:r2:local` 是否报错；`npm run status:dev`；不要用首页 200 当验收 |
| 改了文案线上仍旧 | 只 push 未 upload；或 Cache / 旧 R2 | 再 `upload:r2`；递增 `PAGES_CACHE_VERSION` 并 push |
| `verify:r2:live` 过早失败 | CF 尚未部署完 | 等 Dashboard 成功后再跑 |
| `verify:r2:live` aligned=false | Worker vars 与 R2 meta 不一致 | 先 upload，再 push 含正确 `PAGES_CACHE_VERSION` 的 commit |
| Worker 包又接近 3MB | 误把 `toolPageRegistry` / `*Page.ts` import 进 Worker | 入口只用 `toolSlugs` + R2 |
| `upload:r2` 报 **403 Forbidden** | 账号/权限/桶；或 Object R/W token | 见 §9.1 |
| `upload:r2` **ETIMEDOUT** 连 `172.64.*:443` | 本机直连 Cloudflare 不通 | 见 **§9.2** / **§3.1.5**；`R2_HTTPS_PROXY=socks5h://127.0.0.1:8888` |
| `upload:r2` 很慢 | 未配 S3、回退 wrangler put；或首次无 meta / 无 `fileHashes` 自动扩大上传 | 配 §3.1 S3 凭据；确认 `_meta/pages-build.json` 有 `fileHashes`；或调 `R2_UPLOAD_CONCURRENCY` |
| `Credential access key has length 31, should be 32` | `.env` 里 `R2_ACCESS_KEY_ID` 少复制/多删了一位 | 核对长度为 **32**；或 Dashboard 重新创建 R2 token 再写入 `.env`（见 §3.1.2） |
| R2 缺 `_meta/pages-build.json` | 未用新版 upload | `upload:r2`；看 `.cache/pages-build.json` |
| gzip 正文乱码 | 双重压缩（历史） | 对外 identity；压缩交给运行时 |

### 9.1 `upload:r2` → 403 Forbidden

**优先改用 S3**（§3.1）：R2 API Token 的 Object Read & Write 即可，不必 Admin。

若仍走 `--wrangler`：`wrangler r2 object put` 用 **Cloudflare REST API**（不是 S3）。

1. **确认账号与桶**  
   ```bash
   npx wrangler whoami
   npx wrangler r2 bucket list
   npx wrangler r2 bucket create onlinefreetools-pages   # 若没有
   ```
2. **重登**并对准正确账户：`npx wrangler logout && npx wrangler login`  
   必要时删 `node_modules/.cache/wrangler/wrangler-account.json` 再 login。
3. **`CLOUDFLARE_API_TOKEN`**：Object Read & Write **不能**用于 wrangler REST put（会 403）。需 **Admin Read & Write**，或 `unset CLOUDFLARE_API_TOKEN` 改走 OAuth / **§3.1 S3 凭据**。
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

### 9.2 `upload:r2` → ETIMEDOUT（连不上 Cloudflare）

症状：日志已有 `transport=s3` / `files=…`，随后：

```text
AggregateError [ETIMEDOUT]: connect ETIMEDOUT 172.64.x.x:443
```

| 检查 | 命令 / 动作 |
|---|---|
| 本机能否直连 CF | `curl -I --connect-timeout 8 https://cloudflare.com`（超时 → 需代理/TUN） |
| 本地隧道是否 SOCKS | `curl -I -x socks5h://127.0.0.1:8888 https://cloudflare.com` |
| 脚本是否吃到代理 | `R2_PROXY_DEBUG=1 R2_HTTPS_PROXY=socks5h://127.0.0.1:8888 npm run upload:r2 -- --dry-run` |
| 协议是否写错 | SOCKS 必须 `socks5h://`；`http://127.0.0.1:8888` 对 `ssh -D` 无效 |

完整步骤与变量优先级见 **§3.1.5**。

---

## 10. 检查清单（复制用）

### 首次开通

- [ ] `wrangler login` 账号正确；`whoami` Account ID 已写入 `.env` 的 `R2_ACCOUNT_ID`  
- [ ] 已按 §3.1.2 创建 R2 Object Read & Write token，Access/Secret 写入 `.env`（`upload:r2 -- --dry-run` 显示 `transport=s3`）  
- [ ] 若本机直连 Cloudflare 超时：已按 §3.1.5 配置 `R2_HTTPS_PROXY`（如 `socks5h://127.0.0.1:8888`）并通过 `R2_PROXY_DEBUG=1` 确认  
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
