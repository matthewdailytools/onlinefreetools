Date: 2026-08-07 13:58
Summary: Auto-load the sample and compress so both preview panes show on open.

[question]
示例的两张图片直接加载显示

[try to solve]
On enter, the image-compress page auto-loads the sample and compresses immediately so the left pane shows the original and the right pane shows the result. Clicking “Load sample” also auto-compresses. `loadFile` / `compress` / `loadSample` are Promise-chainable.

[actions]
- Updated `src/pages/imageCompressPage.ts` sample auto-run on probeAll
