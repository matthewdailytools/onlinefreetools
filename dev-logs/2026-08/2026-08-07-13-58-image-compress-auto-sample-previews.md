Date: 2026-08-07 13:58
Summary: Auto-load sample and compress so both preview panes show on open.

[question]
示例的两张图片直接加载显示

[try to solve]
图片压缩页进入后自动加载示例并立即压缩：左侧原图、右侧压缩结果同时显示；点击「加载示例」同样会自动压缩。`loadFile` / `compress` / `loadSample` 改为可链式 Promise。

[actions]
- Updated `src/pages/imageCompressPage.ts` sample auto-run on probeAll
