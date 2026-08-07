Date: 2026-08-07 16:50
Summary: Fix image-optimizer.svg illegal XML comment chars; add icon lint

[question]
http://localhost:8787/icons/tools/image-optimizer.svg 有错，分析原因，避免后续相同错误

[try to solve]
根因与此前 image-exif/image-compress 相同：SVG 注释里混入 XML 非法 C0 控制符（本文件为 0x18/0x16/0x1f），浏览器报 xmlParseComment: invalid xmlChar。常见诱因是中文注释经写入管道损坏。

已用 ASCII 注释重写 `image-optimizer.svg`；新增 `scripts/validate-tool-icons.mjs` 并并入 `lint:seo`；在 `tool-creation.mdc` 约定图标注释优先 ASCII。

[actions]
- 修复 `public/icons/tools/image-optimizer.svg`
- 新增 `scripts/validate-tool-icons.mjs`；更新 `scripts/validate-tool-seo.mjs`、`.cursor/rules/tool-creation.mdc`
