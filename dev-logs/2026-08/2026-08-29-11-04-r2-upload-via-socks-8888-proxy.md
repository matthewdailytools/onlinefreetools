Date: 2026-08-29 11:04
Summary: Documented SOCKS 8888 usage for upload:r2 and wired R2 S3 client to R2_HTTPS_PROXY / ALL_PROXY.

[question]
怎么使用本地8888隧道端口代理跑脚本

[try to solve]
- Port 8888 on this machine is `ssh -D` SOCKS (HTTP CONNECT via `http://127.0.0.1:8888` fails; `socks5h://` works).
- AWS SDK S3 did not honor proxy env vars; added `socks-proxy-agent` / `https-proxy-agent` + `NodeHttpHandler` in `scripts/lib/r2-s3-client.mjs`, reading `R2_HTTPS_PROXY` first, then `HTTPS_PROXY` / `HTTP_PROXY` / `ALL_PROXY`.
- Verified: `R2_HTTPS_PROXY=socks5h://127.0.0.1:8888` can GetObject `_meta/pages-build.json` (~1.2s).
- Run: `R2_HTTPS_PROXY=socks5h://127.0.0.1:8888 npm run upload:r2` (or write the same into `.env`). Prefer incremental over `:full`.

[actions]
- Updated `scripts/lib/r2-s3-client.mjs`, `.env.example`, `ops/worker-r2-ops.md`; added `socks-proxy-agent`, `https-proxy-agent`, `@smithy/node-http-handler` as devDependencies
