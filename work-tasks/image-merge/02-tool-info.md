# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`image-merge`（不拆 layout / IG / FB 独立薄页）  
**路径**：`/tools/image-merge`  
**主方向**：A（A.2 / B13 N→1 · Tier 0 Canvas）  
**catalog 分类**：`image`  
**YMYL**：否  
**Locale briefs**：`03-locale-briefs.md`（`briefs-ready`）

---

## IG 预审

- 主词 / 长尾：merge images；combine photos；image collage；stitch images；拼图/多图拼接；instagram collage 1080（同页预设）
- 用户任务：选多张图 → 选布局 → 调间距/背景 → 下载一张图
- [x] 竞品：横/竖/网格、间距、背景、下载；部分强制上传；布局公式少讲
- [x] 缺口：画布宽高公式；单元格对齐（contain/cover）；平台预设非官方承诺；与 1→N 封面包区别；大图内存
- [x] 增益：① Rules 布局公式 ② 边界 ③ Use cases Before/After 等 ④ 横/竖/网格对照 ⑤ MDN ⑥ 本地隐私 ⑦ 十语 ⑧ Example ⑨ Related
- [x] 长尾：**合并**平台预设到同页；禁止与 `social-share-image-pack` 混 H1
- [x] References：MDN drawImage / toBlob；IG/FB 尺寸仅作常见用法引用（勿冒充官方工具）
- [x] Use cases：Before/After；教程竖拼；电商多角度；九宫格故事板
- [x] Related：`image-crop`, `image-compress`（实现后可加 `image-overlay`）

### §3.1 硬性：①②③④⑥⑦⑧⑨（+⑤）

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | C06 · B13 · P1 |
| 技术 | 多文件 → 布局算画布 → 逐张 drawImage → toBlob；间距/背景/列数；预设 1080²、1200×630 |
| Title (en) | `Merge Images — Combine Photos into One Collage \| {Brand}` |
| FAQ | 是否上传；横竖网格差；预设是否官方；GIF；内存 |
| related | `image-crop`, `image-compress` |
| 验收 | lint:seo；≥2 图可拼；README |

## 交互规格

- 输入：多文件拖放（≥2）；排序（上移/下移）；布局 horizontal | vertical | grid；grid 列数 2–4；间距 px；背景色；单元格 fit contain/cover；对齐；输出格式 JPEG/WebP/PNG；质量；平台预设（none / ig-1080 / fb-1200x630）将输出画布缩放到目标（contain 进画布或 scale 整拼图）
- 输出：预览 + 下载；统计 WxH / MIME / bytes
- 规则：horizontal：高=max(h_i)，宽=Σw_i'+(n-1)*gap（按 cell 统一高度缩放）；vertical 对称；grid：cols×rows，cell 统一，gap
- 失败：<2 张；解码失败；画布过大警告
- 示例：3 张横拼白底 gap 8 → 一张 JPEG
- **进页样例**：合成 3 张 240×180 色块 PNG；进页与 Load sample 均 `loadSample()` → `addFiles` → `merge()`；默认横排、可见预览与可下载 blob（与 H2 Example 对齐）

## 页面模块清单：齐全；`03` 已填
