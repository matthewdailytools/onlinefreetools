Date: 2026-08-09 14:11
Summary: Fixed sitemap ops UI overwrite-main target path (dry-run + live hint).

[question]
覆盖主文件选项不起作用

[try to solve]
已修复。根因是预览（dry-run）时 API 把 `outFile` 固定返回 `null`，结果里又用 `mode=filtered` 表示「内容筛选」，容易误以为仍写入 filtered 文件；「全量」预设还会把覆盖勾选粘成 true。

改动：
- 服务端 `resolveOutFile`：预览/实写都返回解析后的目标路径与 `overwriteMain`
- 操作页显示「当前目标」实时路径；结果区分「内容=筛选/全量」与「目标=…」
- 「全量」预设不再勾选覆盖主文件（全量本身写主文件）

请重启 `npm run sitemap:ui` 后验证：筛选 + 勾选覆盖 → 目标应为 `public/sitemap.xml`。

[actions]
- Updated `ops/seo/sitemap-ui.mjs`, `ops/seo/sitemap-ui.html`
