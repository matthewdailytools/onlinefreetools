# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`image-overlay`（不做文字水印页；不拆 blend 模式薄页）  
**路径**：`/tools/image-overlay`  
**主方向**：A（A.2 / B13 · Tier 0 Canvas）  
**catalog 分类**：`image`  
**YMYL**：否  
**Locale briefs**：`03-locale-briefs.md`（`briefs-ready`）

---

## IG 预审

- 主词：overlay images；put image on image；logo watermark image；图层叠加；图片叠加透明度
- 任务：底图 + 叠图 → 调 alpha/位置/缩放/混合 → 下载
- [x] 竞品：拖拽、透明度、混合、旋转；少讲坐标系与 composite 对照
- [x] 缺口：叠层坐标相对底图像素；混合模式可见对照；与多图拼接/文字水印分工；JPEG 透明铺底
- [x] 增益：① Rules 绘制顺序 ② 边界 ③ Use cases Logo/角标 ④ 混合模式表 ⑤ MDN composite ⑥ 隐私 ⑦ 十语 ⑧ Example ⑨ Related
- [x] 长尾：合并；不拆 `overlay-multiply` 等
- [x] References：MDN globalCompositeOperation / globalAlpha / drawImage
- [x] Related：`image-merge`, `image-crop`

### §3.1：①②③④⑥⑦⑧⑨（+⑤）

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | C06 · P2 |
| 技术 | 底图铺满画布；叠图按 x,y,scale,opacity,composite 绘制；导出 PNG/JPEG/WebP |
| Title (en) | `Overlay Images — Put a Logo on a Photo \| {Brand}` |
| FAQ | 上传？与拼接区别？混合模式？JPEG 透明？ |
| related | `image-merge`, `image-crop` |

## 交互规格

- 输入：底图文件 + 叠图文件；opacity 0–100%；scale %；x/y（px 或滑条）；九宫格快捷定位；blend：source-over, multiply, screen, overlay, darken, lighten；输出格式；JPEG 底色
- 输出：预览（可拖拽叠层）；Download
- 规则：画布尺寸 = 底图像素；叠图中心或左上锚点写清；拖拽映射回源坐标
- 失败：缺任一层；解码失败
- 示例：照片 + 半透明 Logo 右下角 → PNG
- **进页样例**：合成渐变底图 640×480 + LOGO 叠层 PNG；进页与 Load sample 均 `loadSample()` → 双层 `loadLayer` → 右下角 / 透明度 75% → `applyOverlay()`；预览与 Download 可用（与 H2 Example 对齐）

## 页面模块清单：齐全；`03` 已填
