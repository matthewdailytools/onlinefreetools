# Online Free Tools / 在线工具学习项目

## Overview / 项目简介
- Learning project for building and iterating on online utilities; updates are irregular by design.
- Live domain: https://onlinefreetools.org
- Runs on Cloudflare (Pages + Workers) with Wrangler for local dev and deploy.

## 工具清单 / Tools List
以下是我们提供的在线工具及其链接（中文版）：

- [获取网站响应 Header](https://onlinefreetools.org/zh/tools/website-headers) - 通过服务器端请求获取网址的 HTTP 响应 Header
- [我的 IP 地址是什么？](https://onlinefreetools.org/zh/tools/ip-address) - 查询您对外显示的公网 IP 地址及基础元信息
- [Markdown ↔ HTML](https://onlinefreetools.org/zh/tools/markdown-to-html) - 浏览器内 Markdown 与 HTML 双向转换：预览、安全清理与导出
- [在线文本对比](https://onlinefreetools.org/zh/tools/text-diff) - 并排对比两段文本，高亮增删改差异
- [如何计算BMI](https://onlinefreetools.org/zh/tools/how-to-calculate-bmi) - 计算您的BMI（身体质量指数），评估体重是否健康
- [如何计算 ROI](https://onlinefreetools.org/zh/tools/how-to-calculate-roi) - 计算投资回报率（ROI），用于评估投资与活动效果
- [如何计算边际收益](https://onlinefreetools.org/zh/tools/how-to-calculate-marginal-revenue) - 计算边际收益，用于定价与盈利分析
- [平方英尺计算器](https://onlinefreetools.org/zh/tools/square-feet) - 根据长度和宽度计算面积（平方英尺）
- [如何计算百分比增减](https://onlinefreetools.org/zh/tools/how-to-calculate-percentage-change) - 计算两个数值之间的百分比涨跌
- [如何计算梯度](https://onlinefreetools.org/zh/tools/how-to-calculate-gradient) - 根据两点坐标计算斜率 / 梯度

Below are our available online tools with their links (English version):

- [Fetch Website Response Headers](https://onlinefreetools.org/tools/website-headers) - Fetch a URL's HTTP response headers server-side
- [What Is My IP Address?](https://onlinefreetools.org/tools/ip-address) - Find your public IP address as seen by the internet with basic metadata
- [Markdown ↔ HTML](https://onlinefreetools.org/tools/markdown-to-html) - Convert Markdown ↔ HTML with sanitize, preview, and export
- [Text Diff Checker](https://onlinefreetools.org/tools/text-diff) - Compare two texts side by side and highlight differences
- [How to Calculate BMI](https://onlinefreetools.org/tools/how-to-calculate-bmi) - Calculate your BMI (Body Mass Index) to assess if your weight is healthy
- [How to Calculate ROI](https://onlinefreetools.org/tools/how-to-calculate-roi) - Calculate return on investment (ROI) for performance analysis
- [How to Calculate Marginal Revenue](https://onlinefreetools.org/tools/how-to-calculate-marginal-revenue) - Calculate marginal revenue for pricing and profitability analysis
- [Square Feet Calculator](https://onlinefreetools.org/tools/square-feet) - Calculate area in square feet from length and width
- [How to Calculate Percentage Change](https://onlinefreetools.org/tools/how-to-calculate-percentage-change) - Calculate the percentage increase or decrease between two values
- [How to Calculate Gradient](https://onlinefreetools.org/tools/how-to-calculate-gradient) - Calculate gradient/slope from two coordinate points

## Getting Started / 快速开始
- Install Node.js LTS and Wrangler: `npm install -g wrangler`
- Install dependencies: `npm install`
- **Ops guide**: [`ops/README.md`](ops/README.md) — local start/stop, build, deploy
- Local dev (background): `npm run start:dev` — see `ops/dev/`
- Local dev (foreground): `npm run dev` or `wrangler dev`
- Deploy: `npm run deploy`

## Static Site Build / 静态站点构建

### Default language

- Default language (the language served at `/`):
	- `SITE_DEFAULT_LANG=zh` (default)
	- Example: `SITE_DEFAULT_LANG=en SITE_LANGS=zh,en npm run build:site`

### Browser language

- Static pages (home/devlogs) will auto-select language based on browser settings.
	- If the URL has no language prefix, the page uses `navigator.languages` to pick the best supported language.
	- If none matches, it falls back to English (`en`).

### Tracking Injection / 跟踪代码注入

### i18n / 多语言
- Enabled languages: `SITE_LANGS=zh,en npm run build:site`
- Add a language: update `scripts/site/config.mjs` (languages + pathPrefix) and `scripts/site/i18n.mjs` (translations)

## Notes / 备注
- 功能与在线工具会不定期更新，最新状态以线上域名为准。
- 开发问答日志存放于 `dev-logs/`，按日期+摘要命名。