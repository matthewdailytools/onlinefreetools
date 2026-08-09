# 运维手册（ops）

**站点**：https://onlinefreetools.org  
**平台**：Cloudflare Workers + 静态资源（`public/`）  
**配置**：根目录 `wrangler.jsonc`（入口 `src/index.ts`）

> 站点构建脚本仍在 `scripts/`；本目录存放**日常启停、部署、SEO 运维**相关脚本与说明。

---

## 1. 目录结构

```
ops/
├── README.md              # 本文（运维总览）
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
    ├── sitemap-ui.mjs       # 本地操作页服务（127.0.0.1 + 密码）
    ├── sitemap-ui.html      # 操作页 UI
    └── inbound-link-outreach.md # 白帽入站获链月度清单

# IndexNow 验证公钥（须公开可访问）
# public/{INDEXNOW_KEY}.txt
```

**运行时状态**（不提交 Git）：

| 路径 | 说明 |
|---|---|
| `.run/wrangler-dev.pid` | 后台 `wrangler dev` 进程 ID |
| `.run/wrangler-dev.log` | dev 标准输出/错误日志 |

---

## 2. 环境准备

1. **Node.js** LTS（与仓库 `package.json` engines 一致即可）
2. 安装依赖：`npm install`
3. Wrangler 使用项目内 devDependency，无需全局安装（可选 `npm i -g wrangler`）
4. Cloudflare 部署需已登录：`npx wrangler login`

---

## 3. 本地开发

### 3.1 后台启停（推荐日常）

```bash
npm run start:dev                 # build:site + 后台 wrangler dev
npm run start:dev -- --no-build   # 跳过构建，快速启动
npm run start:dev -- --port 8787  # 指定端口
npm run stop:dev                  # 停止
npm run status:dev                # 查看端口 / 健康检查
npm run restart:dev               # 重启
```

默认访问：**http://127.0.0.1:8787/**（请在浏览器打开；勿用无 `Accept: text/html` 的简单探测，Worker 对 `/` 会返回 404）

启动脚本会等待 wrangler 日志出现 `Ready on ...` 并通过 HTTP 健康检查；失败时查看 `.run/wrangler-dev.log`。

**Windows 直接运行**：

```powershell
.\ops\dev\start-dev.ps1
.\ops\dev\start-dev.ps1 -NoBuild
.\ops\dev\stop-dev.ps1
```

**macOS / Linux**：

```bash
chmod +x ops/dev/*.sh   # 首次可选
./ops/dev/start-dev.sh
./ops/dev/start-dev.sh --no-build
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
| `npm run build:site` | 生成首页/About/devlogs/sitemap 等到 `public/` |
| `npm run sitemap` | 仅生成 sitemap（全量或 CLI 筛选；见 §4.0） |
| `npm run sitemap:ui` | 本地 Sitemap 操作页（密码门；见 §4.0） |
| `npm run build:logs` | 仅重建 `public/devlogs/` |
| `npm run lint:seo` | SEO 文案校验（description / FAQ / YMYL） |
| `npm run indexnow` | IndexNow 提交（默认本地 sitemap；见 §4.1） |
| `npm run indexnow:check` | 检查线上 `/{key}.txt` |
| `npm run indexnow:baseline` | 远程 sitemap → 写入增量状态，不 POST |
| `npm run indexnow:incremental` | 远程 sitemap − 状态中已有 URL → POST |
| `npm run indexnow:since-git` | 需再传 ref，如 `npm run indexnow:since-git -- HEAD~1` |

**发版前最低要求**：

```bash
npm run build:site && npm run lint:seo
```

详细清单见 [`docs/SEO_PUBLISH_CHECKLIST.md`](../docs/SEO_PUBLISH_CHECKLIST.md) 与 [`docs/2026-07-28-google-seo-strategy-implementation.md`](../docs/2026-07-28-google-seo-strategy-implementation.md) §8.2。

### 4.0 Sitemap 筛选生成与操作页

日常发版仍以 **`npm run build:site` → 全量 `public/sitemap.xml`** 为准（GSC / IndexNow 默认读此文件）。  
本节用于：**只重建 sitemap**、或按语言 / 信息页 / 分类 / 场景 / 工具类型做**子集**生成（排查、抽样提交、临时清单）。

| 路径 | 说明 |
|---|---|
| `scripts/site/sitemap.mjs` | 生成核心（`build:site` 与 ops 共用） |
| `ops/seo/generate-sitemap.mjs` | CLI（`npm run sitemap`） |
| `ops/seo/sitemap-ui.mjs` + `sitemap-ui.html` | 本地密码门操作页（`npm run sitemap:ui`） |
| `public/sitemap.xml` | **生产全量**（部署与搜索引擎提交用） |
| `public/sitemap.filtered.xml` | 筛选默认输出；已 `.gitignore`，勿当线上源 |

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
- **信息页** `--info`：`about` / `privacy` / `terms` / `contact`（另可 `--no-home` / `--no-info`）。  
- **场景 leaf** `--scenario`：`/where-to-use-tools/{id}`；同时按 scenario **过滤工具**。  
- **工具类型 leaf** `--subject` / `--tool-type`：`/tool-type/{id}`；同时按 subject 过滤工具。  
- **分类** `--category`：仅过滤工具（catalog `category`）。  
- **工具命中**：`category ∪ scenario ∪ subject` 为 **OR**；三维皆空（或操作页上场景/类型「全选」、分类未勾）= **全部工具**。  
- Hub / leaf 开关：`--no-scenario-hub`、`--no-subject-hub`、`--no-scenario-leaves`、`--no-subject-leaves`、`--no-tools`。  
- 可选项 id 列表：`npm run sitemap -- --meta`（JSON）。

#### CLI

```bash
npm run sitemap                              # 全量 → public/sitemap.xml
npm run sitemap -- --help
npm run sitemap -- --meta                    # 打印可选 lang/category/scenario/subject
npm run sitemap -- --lang en,zh --info about,privacy
npm run sitemap -- --scenario documents --subject pdf
npm run sitemap -- --category calculator --dry-run
npm run sitemap -- --lang en --overwrite-main   # 筛选内容写入主文件（慎用）
npm run sitemap -- --out /tmp/sitemap-en.xml --lang en
```

#### 操作页（推荐）

```bash
npm run sitemap:ui
# 浏览器打开 http://127.0.0.1:8791/
```

| 项 | 说明 |
|---|---|
| 进入密码 | 默认 `345621`；环境变量 `SITEMAP_UI_PASSWORD` 可覆盖 |
| 端口 | 默认 `8791`；`SITEMAP_UI_PORT` 可覆盖 |
| 绑定 | **仅** `127.0.0.1`，勿对公网暴露、勿配反向代理到公网 |
| 会话 | 内存 + HttpOnly cookie；进程重启需重新登录 |
| 功能 | 语言 / 信息页 / 场景 hub+leaf / 工具类型 hub+leaf / category；预览统计；生成写入；「当前目标」路径提示 |
| 代码更新后 | **须重启** `sitemap:ui` 进程后刷新浏览器 |

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
3. `pending = 候选 − 状态中已有 URL`（不看页面内容 / 无 sitemap `lastmod`）
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

**部署注意**：`npm run deploy` / `wrangler deploy` 必须实际更新服务 `onlinefreetools.org` 的那套 Worker。若自定义域 zone 不在当前 Wrangler 账号下，部署只会更新 `*.workers.dev`，生产 key 文件会继续 404，IndexNow 校验失败。需先在拥有该 zone 的 Cloudflare 账号中把域名绑到本 Worker（Custom Domain），或在实际服务该域的项目中同步 key 文件后再跑 `npm run indexnow`。

---

## 5. 部署

```bash
npm run deploy
```

等价于 `predeploy` 钩子自动执行 `build:site` + `lint:seo` + `lint:vendor` 后 `wrangler deploy`。

**Git 自动部署（Cloudflare 拉 GitHub）**：远端通常**不跑**本地 `predeploy`。`public/vendor/`（Bootstrap、字体、jsquash、gifenc、wasm-feature-detect）必须已提交；勿再写入 `.gitignore`。升级相关 npm 包后执行 `npm run vendor:site-chrome` / `npm run vendor:image-optimizer`（或 `build:site`），再 `git add public/vendor && commit`。门禁：`npm run lint:vendor`。

**手动分步**：

```bash
npm run build:site
npm run lint:seo
npm run lint:vendor
npx wrangler deploy
```

**部署后建议**：

1. 打开生产首页与 1–2 个工具页抽检；确认 `/vendor/bootstrap/bootstrap.min.css` 与 `/vendor/fonts/plus-jakarta-sans.css` 为 **200**
2. Google Search Console 确认 `https://onlinefreetools.org/sitemap.xml` 可访问（sitemap **不含** devlogs）
3. 新工具确认各语言 URL 与 hreflang
4. 确认 IndexNow key 可访问：`https://onlinefreetools.org/{key}.txt`；日常用 `npm run indexnow -- --since-git origin/main --require-live-key` 或 `npm run indexnow:incremental`（见 §4.1）

---

## 6. 日志与监控

| 类型 | 位置 |
|---|---|
| 本地 dev 日志 | `.run/wrangler-dev.log` |
| Cloudflare Workers 日志 | Cloudflare Dashboard → Workers → 观测 / Real-time logs |
| 本地查看 dev 日志 | `Get-Content .run/wrangler-dev.log -Wait`（PowerShell）或 `tail -f .run/wrangler-dev.log` |

密钥与 API Token **不得**写入仓库；使用 Wrangler secrets 或 Cloudflare Dashboard 环境变量。

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

先完整构建静态资源：

```bash
npm run build:site
npm run restart:dev
```

### `lint:seo` 失败

按终端提示补全 i18n 中 `tool_*_description`（≥120 字符、含步骤/示例）或 FAQ；规则见 [`docs/SEO_TOOL_RULES.md`](../docs/SEO_TOOL_RULES.md)。

### 部署失败

1. 确认 `npx wrangler whoami` 已登录正确账号
2. 检查 `wrangler.jsonc` 中 `name`、`main`、`assets.directory`
3. 本地 `npx wrangler deploy --dry-run` 试打包

### PID 文件残留但进程已死

```bash
npm run stop:dev
```

脚本会清理 `.run/wrangler-dev.pid`；必要时手动删除该文件后重新 `start:dev`。

---

## 8. 相关文档

| 文档 | 内容 |
|---|---|
| [`docs/SEO_PUBLISH_CHECKLIST.md`](../docs/SEO_PUBLISH_CHECKLIST.md) | 发版与 GSC |
| [`docs/2026-07-28-google-seo-strategy-implementation.md`](../docs/2026-07-28-google-seo-strategy-implementation.md) | SEO 策略与 Checklist |
| [`.cursor/rules/cloudflare-workflow.mdc`](../.cursor/rules/cloudflare-workflow.mdc) | Agent 用 Cloudflare 约定 |
| [`scripts/`](../scripts/) | 站点构建、SEO lint 实现 |

---

*维护：新增运维脚本时放入 `ops/` 对应子目录，并更新本节目录结构与命令表。*
