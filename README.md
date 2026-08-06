# Online Free Tools / 在线工具学习项目

## Overview / 项目简介
- Learning project for building and iterating on online utilities; updates are irregular by design.
- Live domain: https://onlinefreetools.org
- Runs on Cloudflare (Pages + Workers) with Wrangler for local dev and deploy.

## 工具清单 / Tools List
以下是我们提供的在线工具及其链接（中文版）：

- [在线查看 HTTP 响应头](https://onlinefreetools.org/zh/tools/website-headers) - 从边缘检查公开网址的 HTTP 响应头（缓存/CORS/安全头）
- [我的 IP 地址是什么？](https://onlinefreetools.org/zh/tools/ip-address) - 查看边缘节点看到的公网 IP，并说明代理/VPN 局限
- [Markdown ↔ HTML](https://onlinefreetools.org/zh/tools/markdown-to-html) - 浏览器内 Markdown 与 HTML 双向转换：预览、安全清理与导出
- [在线文本对比](https://onlinefreetools.org/zh/tools/text-diff) - 并排对比两段文本，高亮增删改差异
- [BMI 计算器](https://onlinefreetools.org/zh/tools/how-to-calculate-bmi) - 按成人筛查公式计算身体质量指数（教育用途，非诊断）
- [ROI 计算器](https://onlinefreetools.org/zh/tools/how-to-calculate-roi) - 计算投资回报率，含假设说明与非投资建议免责
- [边际收益计算器](https://onlinefreetools.org/zh/tools/how-to-calculate-marginal-revenue) - 用 ΔTR/ΔQ 计算边际收益（教学用途）
- [平方英尺计算器](https://onlinefreetools.org/zh/tools/square-feet) - 按长宽与单位估算面积（房产/装修场景）
- [百分比变化计算器](https://onlinefreetools.org/zh/tools/how-to-calculate-percentage-change) - 计算两个数值之间的涨跌幅（含百分点对照）
- [梯度计算器](https://onlinefreetools.org/zh/tools/how-to-calculate-gradient) - 计算多元标量函数的梯度 ∇f（偏导向量）

Below are our available online tools with their links (English version):

- [Check HTTP Response Headers](https://onlinefreetools.org/tools/website-headers) - Inspect response headers from the edge (caching, CORS, security)
- [What Is My IP Address?](https://onlinefreetools.org/tools/ip-address) - See the public IP our edge observes, with proxy/VPN limits explained
- [Markdown ↔ HTML](https://onlinefreetools.org/tools/markdown-to-html) - Convert Markdown ↔ HTML with sanitize, preview, and export
- [Text Diff Checker](https://onlinefreetools.org/tools/text-diff) - Compare two texts side by side and highlight differences
- [BMI Calculator](https://onlinefreetools.org/tools/how-to-calculate-bmi) - Adult BMI screening from weight and height (educational, not a diagnosis)
- [ROI Calculator](https://onlinefreetools.org/tools/how-to-calculate-roi) - Calculate return on investment with assumptions and a non-advice disclaimer
- [Marginal Revenue Calculator](https://onlinefreetools.org/tools/how-to-calculate-marginal-revenue) - Compute MR = ΔTR / ΔQ for learning microeconomics
- [Square Feet Calculator](https://onlinefreetools.org/tools/square-feet) - Estimate area from length × width for flooring and real estate
- [Percentage Change Calculator](https://onlinefreetools.org/tools/how-to-calculate-percentage-change) - Calculate percent increase/decrease between two values
- [Gradient Calculator](https://onlinefreetools.org/tools/how-to-calculate-gradient) - Compute the multivariable gradient ∇f (vector of partial derivatives)

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