Date: 2026-08-07 14:34
Summary: Added conventional default aspect and pixel presets to the image-crop brief.

[question]
提供常规常用默认需求尺寸

[try to solve]
Documented v1 default presets in `work-tasks/image-crop/02-tool-info.md` (same-page shortcuts; no extra URLs; not tied to platform compliance packs):

**Aspect ratios**: free, 1:1, 4:3, 3:4, 3:2, 2:3, 16:9, 9:16, 21:9, custom.

**Common output pixels (by scene)**:
- Avatar / square: 512, 400, 256, 128, 800×800, 1000×1000
- Thumbnail: 150, 300
- Banner / cover: 1920×1080, 1280×720, 1600×900, 1200×675, 1200×630, 1920×600
- Portrait: 1080×1920, 1080×1350
- Web: max edge 1200, width 800 proportional

**Default sample output**: 1:1 → 512×512 JPEG. Added “Common sizes / Presets” button wording in `03` en/zh.

[actions]
- Updated `work-tasks/image-crop/02-tool-info.md` (preset tables)
- Updated `work-tasks/image-crop/03-locale-briefs.md` (en/zh button labels)
