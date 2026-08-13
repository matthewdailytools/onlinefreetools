Date: 2026-08-13 08:19
Summary: Guide to speed up remote R2 publish: concurrency now, S3 API + delta upload next.

[question]
如何优化R2的发布速度

[try to solve]
瓶颈在「每个文件起一次 wrangler CLI」，不是 gzip 体积。按投入从低到高可以这样加速：

## 现状

- `npm run upload:r2` 对约 **1510** 个 `.html.gz` 各 `spawn npx wrangler r2 object put`
- 默认 `R2_UPLOAD_CONCURRENCY=6`
- 墙钟时间主要吃在 **CLI 冷启动 × 次数**，不是 24MB 传输本身
- `upload:r2:local` 走 binding 直写，所以本地快、远程慢

## 立刻可用（不改代码）

1. **提高并发**（最简单）
   ```bash
   R2_UPLOAD_CONCURRENCY=20 npm run upload:r2
   ```
   经验上 12–24 通常比 6 快一截；再高容易撞 API 限流/本机 CPU，建议试几次找甜点。

2. **HTML 没变就别灌桶**
   ```bash
   npm run deploy:skip-upload
   ```
   只改 Worker/Assets 时跳过全量 put。

3. **确认不必每次本机 `wrangler deploy`**
   当前默认是 upload → git push → CF 拉仓库；发布墙钟别把 Worker 部署和 R2 灌桶混成一条慢路径重复做。

## 高收益改造（建议落地）

| 方向 | 效果 | 做法 |
|------|------|------|
| **S3 兼容 API 直传** | 通常从「数分钟～十余分钟」降到「数十秒级」 | 用 `@aws-sdk/client-s3` + R2 endpoint，进程内并发 `PutObject`；**不要**再 spawn wrangler。Token 用 R2 S3 凭据（Object R/W），与 wrangler REST 的 Admin token 分开 |
| **只传变更（delta）** | 改 1 个工具时接近秒级 | 本地已有整桶 `contentHash`；扩展 meta：按 key 存 per-file sha256，对比上次 `.cache/pages-build.json` 或 R2 meta，只 put 变更 + 重写 `_meta/pages-build.json` |
| **批量/流水线** | 稳定化 | CI 里 `build:site` → S3 上传 → `verify:r2`，本机只 push；或本机 delta + CI 全量兜底 |

实现优先级建议：**先 S3 直传（去掉 CLI）→ 再加 delta**。并发调参只能治标。

## 不值得优先做的

- 再压 gzip：已是 `.html.gz`，体积不是主因
- 提高 `multipart`：单文件很小，multipart 帮不上忙
- 指望 Cloudflare Git 部署自动灌 R2：远端默认**不会**跑 `upload:r2`

若要改脚本，最小改动是：`upload-r2-pages.mjs` 远程路径改成 S3 `PutObject` + 可选 `--changed-only`。

[actions]
- （只读说明）
