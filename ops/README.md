# 运维手册（ops）

**站点**：https://onlinefreetools.org  
**平台**：Cloudflare Workers + Static Assets（`public/`）+ **R2**（预渲染 HTML gzip）  
**配置**：根目录 `wrangler.jsonc`（入口 `src/index.ts`；R2 binding `PAGES_BUCKET`）

> 站点构建脚本仍在 `scripts/`；本目录存放**日常启停、部署、SEO 运维**相关脚本与说明。  
> **Worker + R2**：本机 `upload:r2` + **git push（Cloudflare 拉 GitHub）** + `verify:r2:live` —— 见 [`ops/worker-r2-ops.md`](./worker-r2-ops.md)。

---

## 1. 目录结构

```
ops/
├── README.md              # 本文（运维总览）
├── worker-r2-ops.md       # Worker + R2：建桶、upload、git push、verify、缓存、回滚
├── lib/
│   └── dev-process.mjs    # 本地 dev 进程：PID、端口、杀进程
├── dev/
│   ├── start-dev.mjs      # 启动（Node，跨平台）
│   ├── stop-dev.mjs       # 停止
│   ├── start-dev.ps1      # Windows PowerShell
│   ├── stop-dev.ps1
│   ├── start-dev.sh       # macOS / Linux
│   └── stop-dev.sh
└── seo/
    ├── submit-indexnow.mjs # Bing IndexNow 多场景提交（Node）
    ├── submit-indexnow.sh  # 同上（bash 包装，参数原样转发）
    ├── generate-sitemap.mjs # 全量/筛选生成 sitemap（CLI）
    ├── sitemap-ui.mjs       # 本地 Ops 操作页（Sitemap + 运维手册，127.0.0.1 + 密码）
    ├── sitemap-ui.html      # 操作页 UI
    ├── inbound-link-outreach.md # 白帽入站获链月度清单
    └── keyword-to-tool-ops.md   # 关键词批次 → 新建/丰富工具（操作说明）

# IndexNow 验证公钥（须公开可访问）
# public/{INDEXNOW_KEY}.txt
```

**运行时状态**（不提交 Git）：

| 路径 | 说明 |
|---|---|
| `.run/wrangler-dev.pid` | 后台 `wrangler dev` 进程 ID |
| `.run/wrangler-dev.log` | dev 标准输出/错误日志 |
| `.run/ops-ui.pid` | 后台 Ops UI（`sitemap:ui` / `ops:ui`）进程 ID |
| `.run/ops-ui.log` | Ops UI 标准输出/错误日志 |

---

## 2. 环境准备

1. **Node.js** LTS（与仓库 `package.json` engines 一致即可）
2. 安装依赖：`npm install`
3. Wrangler 使用项目内 devDependency，无需全局安装（可选 `npm i -g wrangler`）
4. 远程 `upload:r2` S3 凭据（**推荐**，详见 [`worker-r2-ops.md`](./worker-r2-ops.md) **§3.1**）：

| 参数 | Cloudflare 获取 | 本机落盘 |
|---|---|---|
| `R2_ACCOUNT_ID` | Dashboard → Workers & Pages / 域 Overview → **Account ID**；或全局搜索 Copy account ID | `npx wrangler whoami` 抄 Account ID → 写入 `.env` |
| `R2_ACCESS_KEY_ID` / `R2_SECRET_ACCESS_KEY` | **R2** → Overview → Account Details → **API Tokens → Manage** → 创建 token（权限 **Object Read & Write**，可限定桶 `onlinefreetools-pages`）→ 创建页复制 Access Key ID 与 Secret（Secret 只显示一次） | `cp .env.example .env` 后粘贴；**勿提交** `.env` |

```bash
npx wrangler login && npx wrangler whoami
cp .env.example .env   # 编辑填入上表三项
npm run upload:r2 -- --dry-run   # 期望 transport=s3
```

未配置时回退 `wrangler` 逐文件 put（慢）。Worker/Assets 生产默认靠 **GitHub → Cloudflare**，不必每次本机 `wrangler deploy`。

---

## 3. 本地开发

### 3.1 后台启停（推荐日常）

```bash
npm run start:dev                 # build:site + 本地 R2 seed + 后台 wrangler + Ops UI
npm run start:dev -- --no-build   # 跳过构建，快速启动
npm run start:dev -- --no-seed-r2 # 跳过本地 R2 灌桶（预渲染 HTML 将 404，除非桶已有对象）
npm run start:dev -- --no-ops-ui  # 不启动 Ops / sitemap 操作页
npm run start:dev -- --port 8787  # 指定 wrangler 端口
npm run stop:dev                  # 停止 wrangler 与 Ops UI
npm run status:dev                # 查看端口 / 健康检查（含 Ops UI）
npm run restart:dev               # 重启
```

默认访问：

| 服务 | URL |
|---|---|
| 站点（wrangler） | **http://127.0.0.1:8787/**（请在浏览器打开；勿用无 `Accept: text/html` 的简单探测，Worker 对 `/` 会返回 404） |
| Ops UI（sitemap / 运维手册） | **http://127.0.0.1:8791/**（等同 `npm run sitemap:ui` / `ops:ui`；密码见 §4.0） |

启动脚本会等待 wrangler 日志出现 `Ready on ...` 并通过 HTTP 健康检查；随后后台拉起 Ops UI。失败时查看 `.run/wrangler-dev.log` / `.run/ops-ui.log`。

**Windows 直接运行**：

```powershell
.\ops\dev\start-dev.ps1
.\ops\dev\start-dev.ps1 -NoBuild
.\ops\dev\start-dev.ps1 -NoOpsUi
.\ops\dev\stop-dev.ps1
```

**macOS / Linux**：

```bash
chmod +x ops/dev/*.sh   # 首次可选
./ops/dev/start-dev.sh
./ops/dev/start-dev.sh --no-build
./ops/dev/start-dev.sh --no-ops-ui
./ops/dev/start-dev.sh --port 8788      # 或 -p 8788 / 8788
./ops/dev/start-dev.sh --no-build -p 8788
./ops/dev/status-dev.sh -p 8788
./ops/dev/stop-dev.sh --port 8788
```

### 3.2 前台开发（占用当前终端）

```bash
npm run dev
# 或
npx wrangler dev
```

适合需要直接看 Wrangler 热重载输出的场景。

---

## 4. 构建与校验

| 命令 | 用途 |
|---|---|
| `npm run build:site` | 默认增量：生成首页/taxonomy/sitemap/vendor，只预渲染 `updatedAt` 晚于本地生成基线的工具页；缺 `_pages` 基线会自动全量补齐 |
| `npm run build:site:full` | 强制全量预渲染所有工具页 |
| `npm run tool:touch -- --slug=<slug>` | 工具内容/文案/图标改动后刷新 catalog `updatedAt` |
| `npm run upload:r2` | 默认增量：工具页按 `updatedAt > toolUploadedAt` 上传，非工具页按哈希变化上传，并重写 meta |
| `npm run upload:r2:full` | 强制全量上传远程 R2（S3 优先；含 `_meta/pages-build.json`） |
| `npm run verify:r2` / `verify:r2:live` | R2 ↔ Worker `PAGES_CACHE_VERSION` 校验；有 S3 凭据时优先用 S3 读取（live 含生产探针） |
| `npm run deploy` | **生产推荐**：默认增量 predeploy → upload:r2 → verify → **提示 git push**（CF 拉 GitHub） |
| `npm run deploy:full` | 强制全量 build + 全量 upload + verify |
| `npm run deploy:skip-upload` | HTML 未变时跳过上传，仍 verify + 提示 push |
| `npm run deploy:worker-only` | 紧急本机 `wrangler deploy` |
| `npm run stage:tools:changed` / `commit:tools:changed` | 只 stage/commit 变更或指定 slug 的工具相关路径 |
| `npm run sitemap` | 仅生成 sitemap（全量或 CLI 筛选；见 §4.0） |
| `npm run sitemap:ui` / `npm run ops:ui` | 本地 Ops 操作页（Sitemap + 运维手册；见 §4.0） |
| `npm run build:logs` | 仅重建 `public/devlogs/` |
| `npm run lint:seo` | SEO 文案校验（description / FAQ / YMYL） |
| `npm run indexnow` | IndexNow 提交（默认本地 sitemap；见 §4.1） |
| `npm run indexnow:check` | 检查线上 `/{key}.txt` |
| `npm run indexnow:baseline` | 远程 sitemap → 写入增量状态，不 POST |
| `npm run indexnow:incremental` | 远程 sitemap − 状态中已有 URL → POST |
| `npm run indexnow:since-git` | 需再传 ref，如 `npm run indexnow:since-git -- HEAD~1` |

**发版前最低要求**：

```bash
npm run deploy
# 等价于：增量 build:site + lint → 增量 upload:r2 → verify:r2 →（请 git push，CF 拉仓库）
# CF 成功后再：npm run verify:r2:live
```

Worker + R2 细节见 [`ops/worker-r2-ops.md`](./worker-r2-ops.md)。SEO 清单见 [`docs/SEO_PUBLISH_CHECKLIST.md`](../docs/SEO_PUBLISH_CHECKLIST.md) 与策略文档 §8.2。

### 4.0 Sitemap 筛选生成与操作页

日常发版仍以 **`npm run build:site` → `public/sitemap.xml`** 为准（GSC / IndexNow 默认读此全量 sitemap 文件；工具页预渲染本身默认增量）。
工具页构建/上传增量不依赖 git：编辑工具时运行 `npm run tool:touch -- --slug=<slug>`（或手动更新对应 `src/site/tool-catalog.d/{slug}.json` 的 `updatedAt`）；构建对比 `.cache/tool-build-state.json` 的 `toolGeneratedAt`，上传对比 `_meta/pages-build.json` 的 `toolUploadedAt`。最新 push、最新 commit、未 commit 修改都不是增量判断依据。
本节用于：**只重建 sitemap**、或按语言 / 信息页 / 分类 / 场景 / 工具类型做**子集**生成（排查、抽样提交、临时清单）。

| 路径 | 说明 |
|---|---|
| `scripts/site/sitemap.mjs` | 生成核心（`build:site` 与 ops 共用） |
| `scripts/site/sitemap-lastmod.mjs` | `<lastmod>`：源文件哈希决定日期 |
| `scripts/site/sitemap-lastmod-state.json` | lastmod 状态（**入库**；全量构建更新） |
| `ops/seo/generate-sitemap.mjs` | CLI（`npm run sitemap`） |
| `ops/seo/sitemap-ui.mjs` + `sitemap-ui.html` | 本地密码门 Ops 页（`npm run sitemap:ui` / `ops:ui`） |
| `public/sitemap.xml` | **生产全量**（部署与搜索引擎提交用） |
| `public/sitemap.filtered.xml` | 筛选默认输出；已 `.gitignore`，勿当线上源 |

#### lastmod 规则

- 每个 `<url>` 写入 `<lastmod>yyyy-MM-dd</lastmod>`。
- **内容未变**（对应源文件哈希与状态一致）→ **沿用**上次日期。
- **新建或源文件有更新** → 使用当前 git `HEAD` 提交日（无 git 时用当天 UTC）。
- 仅全量写入 `public/sitemap.xml` 时更新状态文件；筛选构建默认不改状态。
- 发版前请提交更新后的 `sitemap.xml` 与 `sitemap-lastmod-state.json`，避免 CI 与本地日期漂移。

#### 写入规则

| 情形 | 默认输出 |
|---|---|
| 全量（无筛选） | `public/sitemap.xml` |
| 筛选 | `public/sitemap.filtered.xml` |
| 筛选 + 覆盖主文件 | `public/sitemap.xml`（**会覆盖生产全量**，慎用） |

- CLI：`--overwrite-main`  
- 操作页：勾选「覆盖主文件」；页面上的「当前目标」会实时显示将写入的路径；**预览（dry-run）也会返回目标路径**（不写盘）。  
- 全量内容本身始终写主文件；「覆盖主文件」仅在**内容为筛选**时改变目标路径。

#### 筛选语义

- **语言** `--lang` / 操作页勾选：只展开这些语种 URL；hreflang 交替链接也只含本次语言集合。  
- **信息页** `--info`：`about` / `privacy` / `terms` / `contact`（**默认全部剔除**；需纳入时显式 `--info`；另可 `--no-home` / `--no-info`）。  
- **场景 leaf** `--scenario`：`/where-to-use-tools/{id}`；同时按 scenario **过滤工具**。  
- **工具类型 leaf** `--subject` / `--tool-type`：`/tool-type/{id}`；同时按 subject 过滤工具。  
- **分类** `--category`：仅过滤工具（catalog `category`）。  
- **工具命中**：`category ∪ scenario ∪ subject` 为 **OR**；三维皆空（或操作页上场景/类型「全选」、分类未勾）= **全部工具**。  
- Hub / leaf 开关：`--no-scenario-hub`、`--no-subject-hub`、`--no-scenario-leaves`、`--no-subject-leaves`、`--no-tools`。  
- 可选项 id 列表：`npm run sitemap -- --meta`（JSON）。

#### CLI

```bash
npm run sitemap                              # 全量 → public/sitemap.xml（不含关于/隐私/条款/联系）
npm run sitemap -- --help
npm run sitemap -- --meta                    # 打印可选 lang/category/scenario/subject
npm run sitemap -- --info about,privacy      # 显式纳入信息页 → 默认写 filtered
npm run sitemap -- --lang en,zh --info about,privacy
npm run sitemap -- --scenario documents --subject pdf
npm run sitemap -- --category calculator --dry-run
npm run sitemap -- --lang en --overwrite-main   # 筛选内容写入主文件（慎用）
npm run sitemap -- --out /tmp/sitemap-en.xml --lang en
```

#### 操作页（推荐）

日常本地开发时，**`npm run start:dev` / `./ops/dev/start-dev.sh` 会默认一并后台启动**本页（`stop:dev` / `stop-dev.sh` 会一并停止）。也可单独前台运行：

```bash
npm run sitemap:ui
# 或 npm run ops:ui
# 浏览器打开 http://127.0.0.1:8791/
```

| 项 | 说明 |
|---|---|
| 进入密码 | 默认 `345621`；环境变量 `SITEMAP_UI_PASSWORD` 可覆盖 |
| 端口 | 默认 `8791`；`SITEMAP_UI_PORT` 可覆盖 |
| 绑定 | **仅** `127.0.0.1`，勿对公网暴露、勿配反向代理到公网 |
| 会话 | 内存 + HttpOnly cookie；进程重启需重新登录 |
| 页签 | **Sitemap 生成**（语言 / 信息页 / 场景 / 工具类型 / category；预览与写入）；**运维手册**（只读渲染 `ops/README.md`、入站清单、关键词漏斗操作说明等白名单文档） |
| 与 start:dev | 默认随 `start:dev` 启动；可用 `--no-ops-ui` 跳过；PID/日志见 `.run/ops-ui.*` |
| 代码更新后 | **须重启** Ops UI（`npm run stop:dev && npm run start:dev`，或单独停再 `npm run ops:ui`）后刷新浏览器 |

安全：密码仅为本地轻门禁，**不是**对外认证方案；生产 sitemap 仍只通过 `build:site` / 部署流水线发布。

#### 与 IndexNow / GSC

- GSC 提交与日常 IndexNow：**只用**线上/本地全量 `sitemap.xml`（见 §4.1）。  
- 筛选文件可用于本地核对或临时 `--sitemap public/sitemap.filtered.xml`；**不要**把残缺主文件部署上去。  
- 误用「覆盖主文件」后：立刻 `npm run sitemap` 或 `npm run build:site` 恢复全量。

### 4.1 Bing IndexNow

IndexNow 用于在内容变更后主动通知 Bing 等参与引擎抓取。站点根路径须托管验证文件：

- 文件：`public/{key}.txt`（正文 = key）
- Worker 亦在 `src/index.ts` 对 `/{key}.txt` 直出（与谷歌 HTML 验证同类）
- 线上：`https://onlinefreetools.org/{key}.txt` 必须 **HTTP 200**
- key 配置：`scripts/site/config.mjs` 的 `indexNowKey`，或环境变量 `INDEXNOW_KEY`

也可用 bash 包装（参数与 npm 相同，无需 `--`）：

```bash
./ops/seo/submit-indexnow.sh --help
./ops/seo/submit-indexnow.sh --check-key
./ops/seo/submit-indexnow.sh --tool html-entity --dry-run
```

```bash
# 检查线上 key（期望 HTTP 200 且正文 = key）
npm run indexnow -- --check-key
# 或：npm run indexnow:check

# 按 sitemap 提交（本地 public/sitemap.xml）
npm run indexnow
npm run indexnow -- --sitemap
npm run indexnow:sitemap

# 指定本地 / 远程 sitemap
npm run indexnow -- --sitemap public/sitemap.xml
npm run indexnow -- --sitemap https://onlinefreetools.org/sitemap.xml
npm run indexnow -- --remote-sitemap
npm run indexnow:remote-sitemap

# 仅 sitemap + 过滤
npm run indexnow -- --sitemap-only --include /tools/ --exclude /zh/

# 新工具：提交该工具全部语言 URL
npm run indexnow -- --tool html-entity
npm run indexnow -- --tool html-entity,add-www-to-dns --lang zh,en

# 路径 / 首页 / About / 文件列表
npm run indexnow -- --path /tools/yaml-json
npm run indexnow -- --home --about
npm run indexnow -- --urls-file ./urls.txt

# 预览、Bing 端点、提交前强制 key 可用
npm run indexnow -- --sitemap --dry-run --verbose --limit 10
npm run indexnow -- --endpoint bing --require-live-key

# 增量推送（状态文件默认 .run/indexnow-state.json，已 gitignore）
npm run indexnow -- --baseline --remote-sitemap          # 把当前全量 URL 记为已推，不 POST
# 或：npm run indexnow:baseline
npm run indexnow -- --incremental --remote-sitemap       # 只推状态里没有的新 URL
# 或：npm run indexnow:incremental
npm run indexnow -- --since-git HEAD~1                   # 按相对 HEAD 的 git 变更映射工具/页面
npm run indexnow -- --incremental --since-git origin/main --require-live-key
npm run indexnow -- --reset-state                        # 清空本地增量状态

# 完整参数说明
npm run indexnow -- --help
```

**Sitemap → IndexNow**：协议只接受**页面** `urlList`。CLI / 工具页都会先解析 sitemap 的 `<loc>`（含 sitemapindex 递归）再提交，**不会**把 `sitemap.xml` 地址本身当作变更页 POST。工具页可用同 host 的 sitemap URL 或粘贴 XML；Worker 提供 `POST /api/tools/indexnow/resolve-urls`，提交时也会再展开一次。

**增量逻辑**（`npm run indexnow:incremental` = `--incremental --remote-sitemap`）：

1. 拉取生产 `https://onlinefreetools.org/sitemap.xml` 全部 `<loc>`
2. 读取本地状态 `.run/indexnow-state.json`（已 gitignore）
3. `pending = 候选 − 状态中已有 URL`（不看页面内容 / 暂不读 sitemap `lastmod`）
4. `pending` 为空则结束；否则 POST（默认 `api.indexnow.org`）
5. 仅 HTTP `200`/`202` 的批次合并回状态；失败批次下次仍会重试

| 场景 | 推荐命令 |
|---|---|
| 冷启动 / 刚全量推完 / 换 key | `npm run indexnow:baseline` 或全量 `npm run indexnow:remote-sitemap` |
| sitemap 出现新 URL（新工具/新语） | `npm run indexnow:incremental` |
| 已有 URL 正文有改动 | `npm run indexnow -- --since-git origin/main --require-live-key` 或 `--tool <slug>` |
| 清空本地记忆 | `npm run indexnow -- --reset-state` |

`--dry-run` 不写状态；`--no-save-state` 可禁止成功后写回。`keyLocation` 使用裸域 `https://onlinefreetools.org/{key}.txt`（勿用 www）。

成功响应一般为 HTTP `200` 或 `202`（`202` 表示 key 校验仍在进行；确认 key 文件已上线即可）。可在 [Bing Webmaster Tools → IndexNow](https://www.bing.com/webmasters) 查看接收情况。

> IndexNow key 是协议要求的**公开验证文件**，不是 Cloudflare/OAuth 类私密密钥；但仍勿与其他真正的 API Token 混用或误提交到无关位置。

**部署注意**：生产发版请用 **`npm run deploy`**（R2 upload + 版本校验）再 **git push**（CF 拉 GitHub 更新 Worker/Assets）。裸 `npx wrangler deploy` 不灌 R2、不做校验。自定义域须绑在 Cloudflare 拉仓库部署的那套 Worker 上；否则 IndexNow key 等可能仍 404。

### 4.2 关键词批次 → 新建 / 丰富工具

有一批 Google 搜索词时：先分析进池，再决定 **新建工具** 或 **更新已有工具**（优先 absorb）。  
完整操作步骤、产物路径与拍板表见：

**[`ops/seo/keyword-to-tool-ops.md`](./seo/keyword-to-tool-ops.md)**

摘要：

1. 准备词表（建议带 locale/gl）→ 对 Agent 说「按 keyword-to-tool-funnel 分析…」  
2. 产出：`docs/seo/serp-batches/` + `keyword-daily-pool.tsv` + `keyword-to-tool-tracker.md`  
3. `absorb` → 改已有工具文案；`build` → **确认后再**开 `work-tasks/{slug}/`（分析阶段不自动建夹）  
4. 上线仍走 `build:site` + `lint:seo` + §4.1 IndexNow  

Skill：`.cursor/skills/keyword-to-tool-funnel/SKILL.md`。事项跟进：`docs/seo/keyword-to-tool-tracker.md`。

---

## 5. 部署

> **Worker + R2 完整步骤、建桶、缓存失效、工具 404 排查**：见 [`ops/worker-r2-ops.md`](./worker-r2-ops.md)。

```bash
npm run deploy
# CF 部署成功后再：
npm run verify:r2:live
```

流程：`predeploy`（默认增量 `build:site` + lint）→ **`upload:r2`**（默认增量；S3 优先，须本机 `.env`；见 [`worker-r2-ops.md`](./worker-r2-ops.md) §3.1）→ **`verify:r2`** → **git push**（Cloudflare 拉 GitHub 部署 Worker + Assets）→ **`verify:r2:live`**。

仅改少量 HTML 且不跑完整 `deploy` 时：`npm run upload:r2` → `npm run verify:r2` →（若需）push。  
少量工具改动时：`npm run tool:touch -- --slug=<slug>` → `npm run build:site`（或显式 `npm run build:site -- --slug=<slug>`）→ `npm run upload:r2` → `npm run verify:r2` → `npm run commit:tools:changed -- --slug=<slug> -m "tools: update <slug>"` → `git push`。不传 `--slug` 时，build/upload 增量命令看 `updatedAt` 与上次生成/上传时间，不看 git 工作树、最新 commit 或最新 push。
仅改 Worker、HTML 未变：`npm run deploy:skip-upload` 后再 push。  
紧急本机直发：`npm run deploy:worker-only`（或 `node scripts/deploy-site.mjs --wrangler-deploy`）。裸 `npx wrangler deploy` **不**灌 R2、**不**做版本校验。

**Git 自动部署（Cloudflare 拉 GitHub）**：这是当前 **Worker + Assets** 的默认路径。远端通常**不跑** `predeploy` / **不**灌 R2——须先本地（或 CI）`upload:r2`。`public/vendor/` 必须已提交；**整个 `public/_pages/` 已 gitignore**。仅 push、未 upload → **预渲染 HTML 易 404**。
**部署后建议**：

1. 打开生产首页与 1–2 个**工具页**抽检；确认 `/vendor/bootstrap/bootstrap.min.css` 与 `/vendor/fonts/plus-jakarta-sans.css` 为 **200**
2. 确认 `https://onlinefreetools.org/api/ops/pages-build` 返回 `aligned: true`
3. Google Search Console 确认 `https://onlinefreetools.org/sitemap.xml` 可访问（sitemap **不含** devlogs）
4. 新工具确认各语言 URL 与 hreflang
5. 确认 IndexNow key 可访问：`https://onlinefreetools.org/{key}.txt`；日常用 `npm run indexnow -- --since-git origin/main --require-live-key` 或 `npm run indexnow:incremental`（见 §4.1）
6. HTML 更新后若边缘仍旧：递增 `PAGES_CACHE_VERSION` 或见 R2 手册 §6

---

## 6. 日志与监控

| 类型 | 位置 |
|---|---|
| 本地 dev 日志 | `.run/wrangler-dev.log` |
| Cloudflare Workers 日志 | Cloudflare Dashboard → Workers → 观测 / Real-time logs |
| 本地查看 dev 日志 | `Get-Content .run/wrangler-dev.log -Wait`（PowerShell）或 `tail -f .run/wrangler-dev.log` |

密钥与 API Token **不得**写入仓库。R2 S3 上传凭据放本机 `.env`（见 §2 / [`worker-r2-ops.md`](./worker-r2-ops.md) §3.1）；Worker 运行时密钥用 Wrangler secrets 或 Cloudflare Dashboard 环境变量。

---

## 7. 故障排查

### 端口 8787 被占用或「已在运行」但浏览器打不开

```bash
npm run stop:dev
npm run status:dev    # 应显示 HTTP health: OK
npm run restart:dev
```

常见原因：Windows 上 wrangler 监听进程 PID 与 PID 文件不一致；`stop:dev` 已优先按**端口**停止。若 `status:dev` 为 FAIL，先看日志：

```powershell
Get-Content .run\wrangler-dev.log -Tail 40
```

### 浏览器 / curl 返回 404

Worker 对 `/` 要求请求头含 `text/html`（浏览器正常访问无此问题）。不要用 `curl http://127.0.0.1:8787/` 无 `-H Accept:text/html` 判断服务是否存活；请用 `npm run status:dev`。

### 启动后页面 404 / 样式丢失

先构建静态资源。默认增量会在 `_pages` 基线缺失时自动补齐；排障时可显式全量：

```bash
npm run build:site
# 或：npm run build:site:full
npm run restart:dev
```

### 生产首页正常、工具页 404

多为未灌 R2 或 R2 与 Worker 版本未对齐（工具 HTML 不在 Git）。见 [`ops/worker-r2-ops.md`](./worker-r2-ops.md) §9：

```bash
npm run deploy
# 或：npm run build:site && npm run upload:r2 && npm run verify:r2 && git push
# CF 成功后：npm run verify:r2:live
curl -sS https://onlinefreetools.org/api/ops/pages-build
# 期望 aligned: true
```

### `verify:r2` / live 失败

- 缺 `_meta/pages-build.json` → 先 `npm run upload:r2`
- `pagesCacheVersion` 不一致 → 确认 `wrangler.jsonc` 的 `PAGES_CACHE_VERSION` 与刚上传的清单一致，再 `npm run deploy` + **git push**
- `contentHash` 不一致 → 本地改过 HTML 未重新 upload；再跑 `build:site` + `upload:r2`（需要重传全部对象时用 `upload:r2:full`）
- live `aligned: false` → Worker（push）与 R2 清单不一致；按 `upload → verify → git push → verify:r2:live` 重发；勿在 CF 未完成时跑 live
- live 过早失败 → 等 Cloudflare Dashboard 部署成功后再 `verify:r2:live`

### `lint:seo` 失败

按终端提示补全 i18n 中 `tool_*_description`（≥120 字符、含步骤/示例）或 FAQ；规则见 [`docs/SEO_TOOL_RULES.md`](../docs/SEO_TOOL_RULES.md)。

### 部署失败

1. 确认 `npx wrangler whoami` 已登录正确账号
2. 检查 `wrangler.jsonc` 中 `name`、`main`、`assets.directory`、`r2_buckets`
3. 确认 R2 桶已创建（见 [`worker-r2-ops.md`](./worker-r2-ops.md) §2）
4. 本地 `npx wrangler deploy --dry-run` 试打包（Worker 包应远小于 3MB gzip）
5. `npm run verify:r2` 单独跑，排除「仅 R2 未对齐」导致的 deploy 编排失败

### PID 文件残留但进程已死

```bash
npm run stop:dev
```

脚本会清理 `.run/wrangler-dev.pid`；必要时手动删除该文件后重新 `start:dev`。

---

## 8. 相关文档

| 文档 | 内容 |
|---|---|
| [`ops/worker-r2-ops.md`](./worker-r2-ops.md) | **Worker + R2** 建桶、upload、发版、缓存、回滚 |
| [`docs/worker+R2架构/design.md`](../docs/worker+R2架构/design.md) | R2 键规范与请求路径设计 |
| [`docs/SEO_PUBLISH_CHECKLIST.md`](../docs/SEO_PUBLISH_CHECKLIST.md) | 发版与 GSC |
| [`docs/2026-07-28-google-seo-strategy-implementation.md`](../docs/2026-07-28-google-seo-strategy-implementation.md) | SEO 策略与 Checklist |
| [`ops/seo/keyword-to-tool-ops.md`](./seo/keyword-to-tool-ops.md) | 关键词批次 → 新建/丰富工具（操作） |
| [`docs/seo/keyword-to-tool-tracker.md`](../docs/seo/keyword-to-tool-tracker.md) | 同上事项跟进状态 |
| [`ops/seo/inbound-link-outreach.md`](./seo/inbound-link-outreach.md) | 白帽入站获链月度清单 |
| [`.cursor/rules/cloudflare-workflow.mdc`](../.cursor/rules/cloudflare-workflow.mdc) | Agent 用 Cloudflare 约定 |
| [`scripts/`](../scripts/) | 站点构建、SEO lint 实现 |

---

*维护：新增运维脚本时放入 `ops/` 对应子目录，并更新本节目录结构与命令表。*
