# Online Free Tools / 在线工具学习项目

## Overview / 项目简介
- Learning project for building and iterating on online utilities; updates are irregular by design.
- Live domain: https://onlinefreetools.org
- Runs on Cloudflare (Pages + Workers) with Wrangler for local dev and deploy.

## 工具清单 / Tools List
以下是我们提供的在线工具及其链接（中文版）：

- [获取网站响应 Header](https://onlinefreetools.org/zh/tools/website-headers) - 通过服务器端请求获取网址的 HTTP 响应 Header
- [Markdown 转 HTML](https://onlinefreetools.org/zh/tools/markdown-to-html) - 将 Markdown 转换为已净化的 HTML 并预览
- [如何计算BMI](https://onlinefreetools.org/zh/tools/how-to-calculate-bmi) - 计算您的BMI（身体质量指数），评估体重是否健康
- [如何计算边际收益](https://onlinefreetools.org/zh/tools/how-to-calculate-marginal-revenue) - 计算边际收益，用于定价与盈利分析
- [平方英尺计算器](https://onlinefreetools.org/zh/tools/square-feet) - 根据长度和宽度计算面积（平方英尺）
- [我的 IP 地址是什么？](https://onlinefreetools.org/zh/tools/ip-address) - 查询您对外显示的公网 IP 地址及基础元信息

Below are our available online tools with their links (English version):

- [Fetch Website Response Headers](https://onlinefreetools.org/en/tools/website-headers) - Fetch a URL's HTTP response headers server-side
- [Markdown → HTML](https://onlinefreetools.org/en/tools/markdown-to-html) - Convert Markdown into sanitized HTML with preview
- [How to Calculate BMI](https://onlinefreetools.org/en/tools/how-to-calculate-bmi) - Calculate your BMI (Body Mass Index) to assess if your weight is healthy
- [How to Calculate Marginal Revenue](https://onlinefreetools.org/en/tools/how-to-calculate-marginal-revenue) - Calculate marginal revenue for pricing and profitability analysis
- [Square Feet Calculator](https://onlinefreetools.org/en/tools/square-feet) - Calculate area in square feet from length and width
- [What Is My IP Address?](https://onlinefreetools.org/en/tools/ip-address) - Find your public IP address as seen by the internet with basic metadata

## Getting Started / 快速开始
- Install Node.js LTS and Wrangler: `npm install -g wrangler`
- Install dependencies: `npm install`
- Local dev (Workers): `wrangler dev`
- Deploy: `wrangler deploy`

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