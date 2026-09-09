Date: 2026-09-09 22:48
Summary: Workers Git deploys every main push; use npm run git:save (origin/save) vs npm run git:deploy (origin/main).
Visibility: people

[question]
目前每次push到github就会自动发布到cloudflare，有没有办法有某次push发布，某次push只是代码版本控制，不发布到cloudflare

[try to solve]
## Context

This site ships Worker + Static Assets through **Cloudflare Workers Builds** Git integration: a push to the production branch (`main`) makes Cloudflare pull GitHub and run the deploy command (typically `npx wrangler deploy`). Tool HTML on R2 is a separate path (`npm run upload:r2`); a git push still updates Worker code, homepage Assets, vendor, sitemap, and `PAGES_CACHE_VERSION`.

The question is whether some pushes can stay on GitHub only.

## Process

Checked the repo: `wrangler.jsonc` has no skip flag; `.github/workflows/verify.yml` only runs `npm run verify` on `main` (CI, not Cloudflare). Production deploy is the Cloudflare Git app, not that workflow.

Compared official docs:

- [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) — every push to the connected production branch builds and, if the deploy command is `wrangler deploy`, promotes to the live Worker.
- [Build watch paths](https://developers.cloudflare.com/workers/ci-cd/builds/build-watch-paths/) — include/exclude file paths so some file changes skip the build.
- [Branch control](https://developers.cloudflare.com/workers/ci-cd/builds/build-branches/) — only the production branch goes live; other branches can be off, or preview-only (`wrangler versions upload`).
- [Pages skip via commit message](https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/#skipping-a-build-via-a-commit-message) — `[skip ci]` / `[cf-pages-skip]` exists for **Pages**.
- Workers SDK issue [#11061](https://github.com/cloudflare/workers-sdk/issues/11061) — Workers Builds does **not** honor `[skip ci]` the way Pages does.

## Root cause / analysis

Workers Builds is branch- and path-triggered, not commit-message-triggered. There is no per-push skip flag in `wrangler.jsonc`. Putting `[skip ci]` in a `main` commit message is unreliable here.

Two layers of “publish” also matter:

| Layer | What actually goes live | Trigger |
| --- | --- | --- |
| Worker + Assets | Worker code, `public/` assets (homes, vendor, sitemap) | Push to production branch |
| R2 HTML | Tool / taxonomy bodies | `npm run upload:r2` (independent of git) |

Skipping Cloudflare still leaves R2 unchanged. A `main` push without `upload:r2` can still change the live Worker/Assets.

## Solution

Use the repo scripts (do not `git push origin main` unless you intend to ship):

```bash
npm run git:save                 # git push origin HEAD:save — GitHub backup only
npm run git:save -- --stamp      # origin/save/YYYY-MM-DD-HHMM
npm run git:save -- --dry-run
npm run git:deploy               # must be on main: git push origin main — Cloudflare production
npm run git:deploy -- --dry-run
```

`git:save` refuses `--branch=main`. `git:deploy` refuses `--force-with-lease` and refuses to run off `main`. Stay on `main` locally; save updates `origin/save` without moving `origin/main`.

Turn off **Builds for non-production branches** under Worker → Settings → Build → Branch control if a preview build on `origin/save` is unwanted.

## How to open a Cloudflare preview

Preview is **not** `https://onlinefreetools.org`. The custom domain always serves the Active Deployment. Preview lives on `*.workers.dev`.

**Switch that must be on:** Worker → Settings → Build → Branch control → **Builds for non-production branches**. Then a push to `save` (or any non-`main` branch) runs `wrangler versions upload` and uploads a version without promoting production. Also keep **Settings → Domains & Routes → Preview URLs** enabled (default when `workers_dev` is on).

**Where the link is:**

1. **GitHub pull request** (easiest): open a PR from `save` (or another branch) into `main`. Cloudflare posts a comment with two links that stay on `*.workers.dev`:
   - Branch alias (stable while the branch exists): `{branch}-{worker}.{subdomain}.workers.dev` — for `save` this is like `save-onlinefreetools.{subdomain}.workers.dev`
   - Commit/version URL: unique per version, also `*.workers.dev`
2. **Dashboard, no PR needed:** Workers & Pages → Worker `onlinefreetools` → **Deployments** → Version History / build history → open the version → Preview URL next to Version ID.

`npm run git:save` does not open a PR, so there is no GitHub comment unless you create one. The Dashboard still has the version if non-production builds ran.

**What this site actually shows on that URL:** Worker code and Static Assets from that git commit (homes, vendor, sitemap). Tool/taxonomy HTML is still R2. Preview builds bind `preview_bucket_name` (`onlinefreetools-pages-preview`), which `git:save` does not fill. Expect tool bodies to miss or look old unless you also upload that preview bucket. Day-to-day local check remains `npm run start:dev` → `http://127.0.0.1:8788`.

Preview URLs are public unless Cloudflare Access is added. They are not generated for Durable Object Workers; this Worker does not use DOs.

Do not rely on `[skip ci]` while this Worker is still connected through Cloudflare Git.

**Docs-only / log-only commits on `main`:** set **Build watch paths** to exclude directories that never need a Worker deploy, for example exclude `docs/*` and `dev-logs/*`. Cloudflare still deploys if the same push also touches `src/`, `public/`, or `wrangler.jsonc`.

**Pause every auto-deploy for a while:** Worker → Settings → Builds → **Disconnect**. Changing the deploy command to `npx wrangler versions upload` still runs a build and uploads a version; it just does not promote it to the active deployment.

Do not rely on `[skip ci]` while this Worker is still connected through Cloudflare Git.

## Notes / boundaries

- Script: `scripts/git-push-github.mjs`; npm: `git:save` / `git:deploy`.
- Dashboard: [Workers & Pages](https://dash.cloudflare.com/) → Worker `onlinefreetools` → Settings → Builds / Branch control / Build watch paths.
- Emergency live ship without Git remains `npm run deploy:worker-only`.
- GitHub Actions `verify.yml` still runs on every `main` push; that is not a Cloudflare publish.

[actions]
- Added `scripts/git-push-github.mjs` and npm scripts `git:save` / `git:deploy`
- Pointed `scripts/deploy-site.mjs`, `ops/worker-r2-ops.md`, `ops/README.md`, `.cursor/rules/cloudflare-workflow.mdc` at those commands
