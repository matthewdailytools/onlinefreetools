Date: 2026-08-07 11:54
Summary: Implement image-exif viewer/stripper with ten-locale copy

[question]
按工作任务实现

[try to solve]
已按 `work-tasks/image-exif/` 落地 `/tools/image-exif`。

- 读：CDN `exifr`；GPS/相机/时间/其他分组；隐私字段高亮  
- 清：Orientation 摆正 → Canvas `toBlob` → 下载；复读校验 GPS  
- catalog `image`；Related 与 `image-format-converter` 互链  
- 十语 + README；`lint:seo` / `build:site` 通过  
- `02` → `implemented`；`03` → `i18n-done`

本地访问：`/tools/image-exif`（或 `/zh/tools/image-exif`）。

[actions]
- Added src/pages/imageExifPage.ts, public/icons/tools/image-exif.svg
- Updated tool-catalog.json, index.ts, README.md, i18n (10 langs + home)
- Updated work-tasks/image-exif/02 + 03
- Ran npm run lint:seo && npm run build:site
