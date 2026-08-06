# 运维手册（ops）

**站点**：https://onlinefreetools.org  
**平台**：Cloudflare Workers + 静态资源（`public/`）  
**配置**：根目录 `wrangler.jsonc`（入口 `src/index.ts`）

> 构建与 SEO 脚本仍在 `scripts/`；本目录存放**日常启停、部署与运维**相关脚本与说明。

---

## 1. 目录结构

```
ops/
├── README.md              # 本文（运维总览）
├── lib/
│   └── dev-process.mjs    # 本地 dev 进程：PID、端口、杀进程
└── dev/
    ├── start-dev.mjs      # 启动（Node，跨平台）
    ├── stop-dev.mjs       # 停止
    ├── start-dev.ps1      # Windows PowerShell
    ├── stop-dev.ps1
    ├── start-dev.sh       # macOS / Linux
    └── stop-dev.sh

# IndexNow 相关（在 scripts/，非 ops/）
# scripts/submit-indexnow.mjs
# public/{INDEXNOW_KEY}.txt   # 所有权验证公钥文件（须公开可访问）
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
| `npm run build:logs` | 仅重建 `public/devlogs/` |
| `npm run lint:seo` | SEO 文案校验（description / FAQ / YMYL） |
| `npm run indexnow` | 将 sitemap（或指定 URL）提交到 Bing IndexNow |

**发版前最低要求**：

```bash
npm run build:site && npm run lint:seo
```

详细清单见 [`docs/SEO_PUBLISH_CHECKLIST.md`](../docs/SEO_PUBLISH_CHECKLIST.md) 与 [`docs/2026-07-28-google-seo-strategy-implementation.md`](../docs/2026-07-28-google-seo-strategy-implementation.md) §8.2。

### 4.1 Bing IndexNow

IndexNow 用于在内容变更后主动通知 Bing 等参与引擎抓取。站点根路径须托管验证文件：

- 文件：`public/{key}.txt`（正文 = key）
- Worker 亦在 `src/index.ts` 对 `/{key}.txt` 直出（与谷歌 HTML 验证同类）
- 线上：`https://onlinefreetools.org/{key}.txt` 必须 **HTTP 200**
- key 配置：`scripts/site/config.mjs` 的 `indexNowKey`，或环境变量 `INDEXNOW_KEY`

```bash
# 确认 key 已在生产可访问后：提交 sitemap 中全部 URL
curl -sS -o /dev/null -w "%{http_code}\n" "https://onlinefreetools.org/<INDEXNOW_KEY>.txt"  # 期望 200
npm run indexnow

# 仅提交若干 URL
npm run indexnow -- --url https://onlinefreetools.org/tools/html-entity

# 预览 payload（不发请求）
npm run indexnow -- --dry-run

# 使用 Bing 直连端点
npm run indexnow -- --endpoint bing
```

成功响应一般为 HTTP `200` 或 `202`（`202` 表示 key 校验仍在进行；确认 key 文件已上线即可）。可在 [Bing Webmaster Tools → IndexNow](https://www.bing.com/webmasters) 查看接收情况。

> IndexNow key 是协议要求的**公开验证文件**，不是 Cloudflare/OAuth 类私密密钥；但仍勿与其他真正的 API Token 混用或误提交到无关位置。

**部署注意**：`npm run deploy` / `wrangler deploy` 必须实际更新服务 `onlinefreetools.org` 的那套 Worker。若自定义域 zone 不在当前 Wrangler 账号下，部署只会更新 `*.workers.dev`，生产 key 文件会继续 404，IndexNow 校验失败。需先在拥有该 zone 的 Cloudflare 账号中把域名绑到本 Worker（Custom Domain），或在实际服务该域的项目中同步 key 文件后再跑 `npm run indexnow`。

---

## 5. 部署

```bash
npm run deploy
```

等价于 `predeploy` 钩子自动执行 `build:site` + `lint:seo` 后 `wrangler deploy`。

**手动分步**：

```bash
npm run build:site
npm run lint:seo
npx wrangler deploy
```

**部署后建议**：

1. 打开生产首页与 1–2 个工具页抽检
2. Google Search Console 确认 `https://onlinefreetools.org/sitemap.xml` 可访问（sitemap **不含** devlogs）
3. 新工具确认各语言 URL 与 hreflang
4. 确认 IndexNow key 可访问：`https://onlinefreetools.org/{key}.txt`，然后 `npm run indexnow`

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
