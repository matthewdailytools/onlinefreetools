Date: 2026-08-08 21:30
Summary: Homepage missing domain-lookup because code is uncommitted/undeployed and local wrangler is not running; built _pages already include the card.

[question]
为什么首页找不到入口

[try to solve]
本地已 `build:site`：`public/_pages/zh/index.html` featured 第 10 张即「域名查询」；顶栏/全部工具也有。

找不到通常因为：
1. 看的是线上 https://onlinefreetools.org —— `domain-lookup` 相关文件仍是未跟踪/未推送，生产没有。
2. 本地未起服务或曾用 `--no-build`：`status:dev` 显示 8787 未监听。

本地验收：`npm run start:dev` 后打开 `/zh/`（带 Accept: text/html）或直达 `/zh/tools/domain-lookup`。要上线需 commit + push/deploy。

[actions]
- 查 `public/_pages/zh/index.html`、`git status`、`status:dev`
