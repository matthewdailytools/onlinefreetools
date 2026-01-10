# Online Free Tools / 在线工具学习项目

## Overview / 项目简介
- Learning project for building and iterating on online utilities; updates are irregular by design.
- Live domain: https://www.onlinefreetools.org
- Runs on Cloudflare (Pages + Workers) with Wrangler for local dev and deploy.

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
