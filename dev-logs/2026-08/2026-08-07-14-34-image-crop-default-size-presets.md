Date: 2026-08-07 14:34
Summary: Added conventional default aspect and pixel presets to image-crop brief.

[question]
提供常规常用默认需求尺寸

[try to solve]
已在 `work-tasks/image-crop/02-tool-info.md` 写入 v1 默认预设（同页快捷，不拆 URL、不绑平台合规包）：

**比例**：自由、1:1、4:3、3:4、3:2、2:3、16:9、9:16、21:9、自定义。

**常用输出像素（场景分组）**：
- 头像/方图：512、400、256、128、800×800、1000×1000
- 缩略：150、300
- 横幅/封面：1920×1080、1280×720、1600×900、1200×675、1200×630、1920×600
- 竖屏：1080×1920、1080×1350
- Web：最长边 1200、宽 800 等比

**默认示例输出**：1:1 → 512×512 JPEG。`03` en/zh 按钮词补了「常用尺寸 / Presets」。

[actions]
- Updated `work-tasks/image-crop/02-tool-info.md` (preset tables)
- Updated `work-tasks/image-crop/03-locale-briefs.md` (en/zh button labels)
