Date: 2026-08-21 11:32
Summary: Fix image-crop WxH ? corruption and navbar right overflow.

[question]
http://localhost:8787/en/tools/image-crop , 菜单右边溢出看不到无法点击，页面上Size presets和Output size 的比例 应该是“:”而不是“?”

[try to solve]
1) Size presets / Output size：源文件里宽高乘号 `×` 被编码损坏成 `?`。Aspect（1:1）本就用冒号；像素尺寸应显示为 `512×512`（用 `&times;` 避免再坏）。已改 imageCropPage.ts 全部预设与输出分隔符，并修 MDN 标签与样例画布文案。
2) 顶栏：lg+ 时左侧分类 nav 可横向滚动，右侧主题/语言 `flex-shrink:0` 始终可见可点（site.css）。
3) build + upload:r2:local（10 个 image-crop 语种页）。

[actions]
- src/pages/imageCropPage.ts
- public/styles/site.css
- npm run tool:touch / build-site / merge:tools / upload:r2:local
