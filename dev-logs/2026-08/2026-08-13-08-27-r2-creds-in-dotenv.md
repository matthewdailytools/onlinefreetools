Date: 2026-08-13 08:27
Summary: Load R2 S3 credentials from a repo-root .env file (.env.example as template).

[question]
环境变量的参数写在配置文件里面

[try to solve]
R2 S3 credentials now live in a repo-root config file and are loaded automatically:

1. Commitable template `.env.example`
2. Locally `cp .env.example .env` and fill `R2_ACCOUNT_ID` / `R2_ACCESS_KEY_ID` / `R2_SECRET_ACCESS_KEY` (`.env*` is gitignored)
3. `scripts/lib/load-dotenv.mjs` loads `.env` and `.env.local` (does not override already-exported vars)
4. `upload:r2` / `r2-s3-client` read them at startup; ops §3.1 now recommends writing `.env`

[actions]
- Added `.env.example`, `scripts/lib/load-dotenv.mjs`
- Updated `scripts/lib/r2-s3-client.mjs`, `scripts/upload-r2-pages.mjs`
- Updated `ops/worker-r2-ops.md`, `ops/README.md`
