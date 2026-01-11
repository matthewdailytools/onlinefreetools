# Copilot Instructions for onlinefreetools

Purpose: Make AI agents productive immediately in this repo. Keep changes minimal, focused, and aligned with current structure.

## Repo Snapshot
- Minimal repo; root serves as project root. Conversation logs live in `dev-logs/`.
- Target platform: Cloudflare (Pages + Workers). Use Wrangler for local/dev/deploy.

## Default Agent Behaviors
- Log each Q&A: create one file per exchange in `dev-logs/` named `YYYY-MM-DD-HH-MM-<summary>.md`. Use ISO date + 24h time (local), short hyphenated summary (sanitize: spaces→`-`, remove `/\\:*?"<>|`).
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
