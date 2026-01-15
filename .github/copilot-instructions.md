# Copilot Instructions for onlinefreetools

Purpose: Make AI agents productive immediately in this repo. Keep changes minimal, focused, and aligned with current structure.

## Repo Snapshot
- Minimal repo; root serves as project root. Conversation logs live in `dev-logs/`.
- Target platform: Cloudflare (Pages + Workers). Use Wrangler for local/dev/deploy.

## Default Agent Behaviors
- Log each Q&A: create one file per exchange in `dev-logs/YYYY-MM-DD/` named `YYYY-MM-DD-HH-MM-<summary>.md`. Use ISO date + 24h time (local), short hyphenated summary (sanitize: spaces→`-`, remove `/\\:*?"<>|`).
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

- **目标**：为仓库中创建的“工具页面/工具条目”设定默认规则，确保工具支持多语言、易被检索且对用户友好。
- **必须项**：每个工具页面在本地化 (`i18n`) 文件中应包含以下字段（按语言提供）：
  - `tool_*_title`：工具名称
  - `tool_*_description`：简短 SEO 描述（建议 >= 80 字符），应显式包含“计算/步骤/公式/示例”类关键词（按语言本地化）
  - `tool_*_article`：详细说明（可包含多个示例、边界条件、实现细节）
  - `tool_*_example`：至少一个简短的输入→输出示例（逻辑案例）
  需要确保页面正常展示，而不是展示占位符或缺失文本。
- **页面内容要求**：工具页面应至少包含以下结构化内容：
  - **使用方法**：清晰的操作步骤或输入说明
  - **使用场景**：典型场景或何时使用该工具
  - **计算 / 处理步骤 / 公式**：展示用于计算或处理的步骤与公式（如适用，可使用数学表达式或伪代码）
  - **示例**：至少一个短示例，展示输入、处理、输出（含必要说明）

- **多语言支持**：展示为目标语言提供翻译；自动支持仓库中常见的 Top-N 语言（在 `i18n` 目录声明），并直接生成目标翻译语言。翻译作者需保证 `tool_*_description` 包含本地化关键词以通过启发式校验。

- **首页与导航**：工具应在站点首页或工具索引中有入口（例如工具卡片或导航菜单），每个入口应链接到工具页面并展示简短描述与图标/配色提示，便于快速访问。侧边栏或顶部导航中也应包含工具链接。

- **排版与配色建议**：工具页面应采用层次化排版（标题、子标题、步骤列表、示例块），配色需保证可读性与可访问性（对比度参考 WCAG），并参考常见设计模式（卡片布局、单列响应式或左右栏布局）。

- **SEO 细化规则**：遵循仓库中 `SEO_TOOL_RULES.md` 的细化要求；`tool_*_description` 建议 >= 80 字并包含计算过程与示例关键词。构建前可运行 `npm run lint:seo`，并使用 `scripts/validate-tool-seo.mjs` 对 `src/site/i18n/*.ts` 中的描述进行启发式校验。

- **验证与 CI 建议**：建议在 Pull Request 模板或 CI 中添加检查，确认每个工具页面含以上必需字段（多语言），并通过 `scripts/validate-tool-seo.mjs` 的检测；若校验失败，应由文案或翻译作者补充说明后再合并。


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
  - App-specific dirs (when created): `apps/worker-*`, `apps/pages` if the monorepo pattern emerges. Until then, root is acceptable.
- Naming:
  - Files/dirs: kebab-case; environment names: `dev`, `staging`, `prod`.
- Commits: concise imperative subject; include affected paths (e.g., `worker: add hello route`).

## SEO Defaults
- HTML head: include unique `<title>`, `<meta name="description">` (120–160 chars), `<meta name="viewport" content="width=device-width,initial-scale=1">`.
- Social cards: set Open Graph/Twitter tags (`og:title`, `og:description`, `og:url`, `og:image` minimal 1200x630, `twitter:card=summary_large_image`).
- URLs: use the apex (non-www) domain for all canonical URLs, `og:url`, and sitemap entries; prefer kebab-case, stable slugs; avoid query-string only content; add canonical link if duplicates possible.
- Semantics: use proper heading levels (h1 per page, ordered h2/h3), semantic tags (`header`, `main`, `nav`, `section`, `article`, `footer`), and descriptive link text.
- Performance: ship optimized images (WebP/AVIF fallbacks), lazy-load non-critical media, set `loading="lazy"` on below-the-fold images.
 - Indexing: provide `robots.txt` allowing normal crawl; add `sitemap.xml` when pages list stabilizes; noindex gated/test pages via `meta robots="noindex"`.
 - Tools: for pages that list or document tools, include a short `description` field placed directly below each tool entry explaining:
   - what the tool is,
   - how to use it (brief usage notes), and
   - the typical scenarios or use-cases where the tool applies.
  This description should be concise (1–3 sentences), unique per tool, and include relevant keywords to help SEO and user clarity. Keep descriptions suitable for summary display (aim ~160 characters when used as a teaser).
 - Internationalization: if multiple languages emerge, add `lang` on `<html>` and `hreflang` links per locale.

### Dev Logs SEO
- Source Markdown lives in `dev-logs/`.
- Generated HTML lives in `public/devlogs/`. The index (`public/devlogs/index.html`) must include: unique `<title>`/`<meta description>`, `canonical` to `/devlogs/`, Open Graph/Twitter tags, and JSON-LD (`CollectionPage` + `BreadcrumbList`).
- Per-log HTML pages should include unique `<title>`/`<meta description>`（从摘要派生）、`canonical`、OG/Twitter tags。
- Maintain `public/robots.txt` with sitemap reference and keep `public/sitemap.xml` updated（至少包含 `/` 与 `/devlogs/`，可扩展各日志 HTML）。

## When Uncertain
- Prefer adding small, reversible scaffolding with clear paths to expand (e.g., create `wrangler.toml` and a minimal Worker).
- Document assumptions in `dev-logs` for traceability.

## Examples
- Create a new log for a Q&A about initializing Cloudflare: `dev-logs/2026-01-08-初始化cloudflare项目.md` with the sections above.
- Minimal Worker entrypoint example path once created: `src/worker.ts` referenced by `wrangler.toml` (`main = "src/worker.ts"`).
