Date: 2026-08-08 18:21
Summary: Added IndexNow incremental submit via local state file and optional --since-git mapping.

[question]
indexnow增加实现增量推送功能

[try to solve]
在 `ops/seo/submit-indexnow.mjs` 增加增量能力：

1. **状态文件** `.run/indexnow-state.json`（gitignore）：记录已成功提交的 URL。
2. **`--incremental`**：候选 URL 减去状态中已有项后再 POST；成功写回状态。
3. **`--baseline`**：把当前收集的 URL 写入状态、不 POST（冷启动后避免全量重推）。
4. **`--since-git <ref>`**：按 `git diff ref...HEAD` 映射工具/页面变更 → 多语言 URL；单独使用时不拉全量 sitemap。
5. **`--reset-state` / `--state-file` / `--no-save-state`**。
6. npm：`indexnow:incremental`、`indexnow:baseline`、`indexnow:since-git`；文档同步 `ops/README.md`、`docs/SEO_PUBLISH_CHECKLIST.md`。

验证：`--baseline --remote-sitemap` 写入 420；随后 `--incremental` pending=0；`--since-git HEAD~3 --dry-run` 能展开变更工具 URL。

[actions]
- ops/seo/submit-indexnow.mjs
- ops/seo/submit-indexnow.sh
- package.json
- ops/README.md
- docs/SEO_PUBLISH_CHECKLIST.md
