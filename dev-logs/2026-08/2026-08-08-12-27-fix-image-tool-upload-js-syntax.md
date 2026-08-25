Date: 2026-08-08 12:27
Summary: Fixed image tool upload by restoring broken em-dash string literals that crashed client scripts.

[question]
图片工具的图片上传有问题，例如http://localhost:8788/zh/tools/image-exif

[try to solve]
Root cause: encoding corruption in `819ac16` turned placeholder `—` into unclosed strings (e.g. `return '??;`), so the whole client `<script>` failed to parse and file-select/drop listeners never bound — uploads looked broken.

Fixed four places:
- `src/pages/imageExifPage.ts`: `return '—';`
- `src/pages/imageCompressPage.ts` / `imageCropPage.ts`: `mime || '—'`
- `src/pages/imageOptimizerPage.ts`: `codec || '—'`

Local `image-exif` page script now passes `node --check`; refresh should restore upload. format-converter / merge / overlay / color-from-image scripts were already syntactically fine.

[actions]
- Fixed: `src/pages/imageExifPage.ts`, `imageCompressPage.ts`, `imageCropPage.ts`, `imageOptimizerPage.ts`
