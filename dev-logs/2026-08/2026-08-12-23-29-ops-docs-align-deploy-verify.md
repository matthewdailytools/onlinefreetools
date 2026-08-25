Date: 2026-08-12 23:29
Summary: Align ops docs with deploy+verify:r2 flow (README, worker-r2-ops, keyword-to-tool, SEO checklist, Ops UI handbook).

[question]
ops对应修改

[try to solve]
Synced ops docs with the current `npm run deploy` flow (upload → verify → deploy → live):

- `ops/README.md`: command table, minimum release requirements, troubleshooting for tool 404 / verify failure / deploy failure
- `ops/worker-r2-ops.md`: CI wording, spot-checks including `/api/ops/pages-build`, local verify, new-tool/rollback checklist
- `ops/seo/keyword-to-tool-ops.md`: after build sign-off, ship via deploy
- `docs/SEO_PUBLISH_CHECKLIST.md`: add R2 / version-alignment items
- `ops/seo/sitemap-ui.mjs`: Ops UI handbook whitelist includes worker-r2-ops

[actions]
- ops/README.md, ops/worker-r2-ops.md, ops/seo/keyword-to-tool-ops.md, ops/seo/sitemap-ui.mjs
- docs/SEO_PUBLISH_CHECKLIST.md
