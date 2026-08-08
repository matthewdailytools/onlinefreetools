Date: 2026-08-08 16:06
Summary: Clarified Git-connected Cloudflare deploy: only tracked or build-generated vendor ships.

[question]
目前的部署是云flare自动拉github代码

[try to solve]
Cloudflare 拉 GitHub 时：仓库里有的才会默认上线；gitignore 的 vendor 只有 CF 构建命令跑 `npm run build:site`（内含 copy-site-chrome + copy-image-optimizer）才会生成。本地 `predeploy` 不会在 Git 自动部署里跑。bootstrap/fonts 已入库 → push 后全站 chrome 应修复。jsquash/gifenc/wasm 仍 ignore → 若 CF Build command 未跑 build:site，图片工具会缺 vendor。建议 CF 构建设为 `npm ci && npm run build:site`（或等价），或把那三项也入库。

[actions]
