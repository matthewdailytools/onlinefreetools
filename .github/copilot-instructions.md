# Copilot Instructions for onlinefreetools

Purpose: Make AI agents productive immediately in this repo. Keep changes minimal, focused, and aligned with current structure.

## Repo Snapshot
- Minimal repo; root serves as project root. Conversation logs live in `dev-logs/`.
- Target platform: Cloudflare (Pages + Workers). Use Wrangler for local/dev/deploy.

## Default Agent Behaviors
- Log each Q&A: create one file per exchange in `dev-logs/YYYY-MM/` named `YYYY-MM-DD-HH-MM-<summary>.md`. Use ISO date + 24h time (local), short hyphenated summary (sanitize: spaces→`-`, remove `/\\:*?"<>|`). Month folder matches `YYYY-MM` from the filename.
- Log in English format (applies to new logs only; do not rewrite past entries):
  - `Date: <YYYY-MM-DD HH:MM>`
  - `Summary: <one sentence>`
  - `[question]` + original text
  - `[try to solve]` + final answer
  - Optionally append `[actions]` with file paths/commands changed.
- Logging scope: do not log the act of creating the log file itself in `[actions]`; only list user-relevant file or config changes.
- Exclusions: do not record the AI's trailing or clarifying prompts (e.g., the last AI question asking for confirmation). Only include the user's original question and the final, consolidated answer。
- Visibility: keep full Q&A content visible in the chat; logging to `public/dev-logs/` is a backend record and should not reduce or hide the conversation shown to the user.
- Keep edits surgical: modify only files directly relevant to the user request. Do not introduce frameworks or unrelated refactors without explicit instruction.
- Do not save sensitive data: use environment variables or other secure methods.

### 工具创建规则（默认）

- **目标**：工具页可交互、多语言、可检索、对用户有用（people-first），且相对 SERP 有 Information Gain。
- **权威序**：Google 官方（`.cursor/rules/seo-google-policy.mdc`）→ `lint:seo` / 代码 → `.cursor/rules/*`（`tool-creation` / `tool-i18n-seo` / `tool-i18n-localization`）→ `docs/*`（须对齐前三者）→ 本文件（从 rules 同步）。立项：`work-tasks/`。
- **支持语言**：以 `src/site/i18n.ts` 的 `supportedLangs` 为准（当前 10 语：en, zh, es, ar, pt, id, fr, ja, ru, de）。新增语言需同步路由、hreflang、sitemap 与首页卡片。
- **多语言链接验证**：
  - 首页增加新工具入口：在 `scripts/site/components/content-home.mjs` 添加卡片（featured 和 all-tools）；运行 `npm run build:site` 刷新静态页。
  - 确保各语言 URL 可访问，例如 `/zh/tools/xxx`、`/tools/xxx`（en 无前缀）。
  - 展示目标语言全文，禁止占位符或错语言 fallback。
  - 每个工具页具备完整 `hreflang` + `x-default`（见 `src/pages/site/layout.ts`）。

- **必须项**（各语言 i18n）：
  - `tool_*_title`：工具名称
  - `tool_*_description`：meta 描述（**≥ 120 字符**），含计算/步骤/公式 + 示例或场景（本地化关键词）
  - `tool_*_article`：详细说明（How、边界、场景等）
  - `tool_*_example`：至少一个输入→输出示例

- **页面内容**（可见正文）：
  - How it works、Use cases、Formula/Rules（如适用）、Example、FAQ（≥3）、Related tools（≥2）、References（≥1；YMYL 建议 ≥2）
  - Information Gain：上线前 §3.1 九维至少 3 项；长尾默认一带多场景，慎拆近义 URL
  - 文件/粘贴类：本地处理 FAQ 或声明

- **多语言本地化**：先填 `work-tasks/{slug}/03-locale-briefs.md`（每语检索词 / title 方向 / 按钮说法），再按 brief **重写**（禁止 `Translate to {lang}`）；对照禁词表；≥3 轮核查。`lint:seo` 通过 ≠ 本地化完成。细则：`tool-i18n-localization.mdc`。

- **首页与导航**：新工具须在首页与工具导航有入口。

- **SEO 验证**：`npm run lint:seo`；发版前 `npm run build:site && npm run lint:seo`。FAQ/富结果展示不作 KPI。


## Cloudflare Workflows
- Prereqs: Node.js LTS, `npm i -g wrangler`.
- Workers (in root or subfolder):
  - Init: `wrangler init .` (or specify a subdir for multiple apps).
  - Dev: `wrangler dev`
  - Deploy: `wrangler deploy`
- Pages:
  - Static: ensure `public/` (or framework output dir) exists; connect repo in Cloudflare Pages UI.
  - Framework (e.g., Next.js): follow framework conventions; set `build command` and `output dir` in Pages settings.
- Configuration: maintain a single `wrangler.toml` at the app root; use environment sections for staging/prod when needed.

## Conventions
- Directory hints:
  - `dev-logs/` — immutable history of conversations. Do not rewrite past entries.
  - `work-tasks/` — new-tool briefs (`00`–`03`); do not put implementation source here.
  - `ops/` — local dev runbook and scripts.
  - App-specific dirs (when created): `apps/worker-*`, `apps/pages` if the monorepo pattern emerges. Until then, root is acceptable.
- Naming:
  - Files/dirs: kebab-case; environment names: `dev`, `staging`, `prod`.
- Commits: concise imperative subject; include affected paths (e.g., `worker: add hello route`).

## SEO Defaults
- HTML head: unique `<title>`, `<meta name="description">` (**120–160 chars**), viewport.
- Social cards: Open Graph/Twitter (`og:title`, `og:description`, `og:url`, `og:image` ≥1200×630, `twitter:card=summary_large_image`).
- URLs: apex domain `https://onlinefreetools.org` for canonical, `og:url`, sitemap; kebab-case slugs; en default has no lang prefix; `x-default` points to en URL.
- Semantics: one `h1` per page; ordered `h2`/`h3`; semantic landmarks.
- Performance: optimized images; lazy-load below-the-fold; defer heavy WASM until user action.
- JSON-LD: `BreadcrumbList` / `WebApplication`; must match visible copy; no fake ratings.
- Indexing: `robots.txt`; `sitemap.xml` via `build:site`; `noindex` for test/gated pages; no `llms.txt`.
- Tools list: unique 1–3 sentence description per tool (what / how / scenario).
- i18n: `<html lang>` + full `hreflang` per locale. Full rules: `docs/SEO_TOOL_RULES.md` and `.cursor/rules/`.

## Examples
- Create a new log for a Q&A about initializing Cloudflare: `dev-logs/2026-01/2026-01-08-初始化cloudflare项目.md` with the sections above.
- Minimal Worker entrypoint example path once created: `src/worker.ts` referenced by `wrangler.toml` (`main = "src/worker.ts"`).
