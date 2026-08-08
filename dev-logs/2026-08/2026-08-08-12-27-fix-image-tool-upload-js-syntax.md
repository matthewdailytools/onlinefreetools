Date: 2026-08-08 12:27
Summary: Fixed image tool upload by restoring broken em-dash string literals that crashed client scripts.

[question]
图片工具的图片上传有问题，例如http://localhost:8788/zh/tools/image-exif

[try to solve]
根因：`819ac16` 编码损坏把占位符 `—` 弄成未闭合字符串（如 `return '??;`），客户端 `<script>` 整段解析失败，文件选择/拖放监听器从未绑定，所以上传看起来无效。

已修复四处：
- `src/pages/imageExifPage.ts`：`return '—';`
- `src/pages/imageCompressPage.ts` / `imageCropPage.ts`：`mime || '—'`
- `src/pages/imageOptimizerPage.ts`：`codec || '—'`

本地 `image-exif` 页面脚本现已通过 `node --check`；刷新后上传应恢复。format-converter / merge / overlay / color-from-image 脚本本身语法本就正常。

[actions]
- Fixed: `src/pages/imageExifPage.ts`, `imageCompressPage.ts`, `imageCropPage.ts`, `imageOptimizerPage.ts`
