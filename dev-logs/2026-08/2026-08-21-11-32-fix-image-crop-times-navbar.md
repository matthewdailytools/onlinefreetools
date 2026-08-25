Date: 2026-08-21 11:32
Summary: Fix image-crop WxH ? corruption and navbar right overflow.

[question]
http://localhost:8787/en/tools/image-crop , 菜单右边溢出看不到无法点击，页面上Size presets和Output size 的比例 应该是“:”而不是“?”

[try to solve]
1) Size presets / Output size: the width×height multiply sign `×` in source was corrupted to `?`. Aspect ratios (1:1) already use a colon; pixel sizes should show as `512×512` (use `&times;` to avoid re-corruption). Updated all presets and output separators in imageCropPage.ts, plus MDN label and sample-canvas copy.
2) Top bar: on lg+, left category nav may scroll horizontally; right theme/lang stays `flex-shrink:0` and always clickable (site.css).
3) build + upload:r2:local (10 image-crop locale pages).

[actions]
- src/pages/imageCropPage.ts
- public/styles/site.css
- npm run tool:touch / build-site / merge:tools / upload:r2:local
