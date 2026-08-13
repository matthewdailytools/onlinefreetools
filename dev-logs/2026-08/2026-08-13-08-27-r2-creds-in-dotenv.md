Date: 2026-08-13 08:27
Summary: Load R2 S3 credentials from repo-root .env config file (.env.example template).

[question]
环境变量的参数写在配置文件里面

[try to solve]
R2 S3 凭据改为写入仓库根配置文件，脚本自动加载：

1. 模板 `.env.example`（可提交）
2. 本机 `cp .env.example .env` 填写 `R2_ACCOUNT_ID` / `R2_ACCESS_KEY_ID` / `R2_SECRET_ACCESS_KEY`（`.env*` 已 gitignore）
3. `scripts/lib/load-dotenv.mjs` 加载 `.env`、`.env.local`（不覆盖已 export 的变量）
4. `upload:r2` / `r2-s3-client` 启动时自动读入；文档 §3.1 已改为推荐写 `.env`

[actions]
- Added `.env.example`, `scripts/lib/load-dotenv.mjs`
- Updated `scripts/lib/r2-s3-client.mjs`, `scripts/upload-r2-pages.mjs`
- Updated `ops/worker-r2-ops.md`, `ops/README.md`
