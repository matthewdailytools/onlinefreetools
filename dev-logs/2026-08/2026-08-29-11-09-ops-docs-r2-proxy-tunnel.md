Date: 2026-08-29 11:09
Summary: Updated ops docs for R2 upload via local SOCKS/HTTP proxy (section 3.1.5 / 9.2 and README).

[question]
更新运维文档

[try to solve]
- Expanded `ops/worker-r2-ops.md` with dedicated **§3.1.5** (proxy env order, SOCKS vs HTTP, ssh -D 8888 steps, misuse notes) and **§9.2** (ETIMEDOUT triage); renumbered “少量工具改动” to §3.1.6; checklist item for proxy.
- Updated `ops/README.md` §2 / §5 / §7 with the same `R2_HTTPS_PROXY=socks5h://127.0.0.1:8888` workflow and links.
- Pointed `.cursor/rules/cloudflare-workflow.mdc` at §3.1.5 for agents.

[actions]
- Edited `ops/worker-r2-ops.md`, `ops/README.md`, `.cursor/rules/cloudflare-workflow.mdc`
