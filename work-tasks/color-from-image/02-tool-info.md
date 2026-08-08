# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`color-from-image`（不新建 `dominant-color` / `extract-palette` / `image-color-picker` 近义薄页）  
**路径**：`/tools/color-from-image`  
**主方向**：A（A.2 主色提取 · Tier 0 Canvas 量化）  
**catalog 分类**：`image`  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `briefs-ready`）

> IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 对齐：方向 A.2 / D.1；与未来 `brand-color-token-pack` intent 分离（本页 = 从图取色，非 1 色→色阶包）。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. extract colors from image / color palette from photo
  2. dominant color from image / 主色提取
  3. image color picker / get hex from image
  4. palette generator from photo（同页色数滑条，不拆 URL）
  5. extract colors without upload / 本地取色（FAQ）
- 用户真实任务：上传或拖入一张图，得到若干主色并可复制 HEX/RGB/HSL，用于配色或 CSS。
- [x] 竞品 SERP 前 5–10 都提供了什么？  
  上传取色、色板色块、HEX 复制、部分「本地」口号；少数调色数；很少讲清缩略采样、透明像素、色数上限与失败空态。
- [x] 它们没讲清什么？（≥3 条缺口）  
  1. **采样规则**：全分辨率 vs 缩略图量化；大图为何先缩小  
  2. **透明/近透明**：alpha 阈值是否计入直方图  
  3. **色数含义**：请求 N 色 vs 实际不足 N（纯色图）  
  4. **非「精确滴管」**：主色板 ≠ 点击单点取色（可 FAQ 对照）  
  5. **多语言检索向**
- [x] 我们补哪 ≥3 条增益？  
  - **①** Rules：缩放 → 忽略低 alpha → 量化 → 按占比排序  
  - **②** 边界：未选图、解码失败、全透明、色数钳制  
  - **③** Use cases：品牌主色、UI 截图、渐变灵感  
  - **④** 对照：主色板 vs 单点滴管  
  - **⑤** References：MDN getImageData  
  - **⑥** 本地隐私 FAQ  
  - **⑦** 十语  
  - **⑧** Example 固定叙述  
  - **⑨** Related ≥2
- [x] 长尾：**合并**。色数/格式复制为同页控件；勿拆 `dominant-color-only`。
- [x] 权威来源 URL：  
  - https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData  
  - https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement  
- [x] Use cases 草稿：品牌色取样；落地页截图配色；配 CSS 渐变前取色（链 gradient）  
- [x] 边界草稿：未选图；无法解码；全透明；色数 2–12；GIF 首帧；超大图先缩放提示  
- [x] Example/FAQ：固定「样图 → N 色 → HEX 列表」；FAQ 上传/算法/与滴管区别  
- [x] Related：`how-to-calculate-gradient`, `image-crop`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：缩放+量化+排序 |
| 2 | 边界/失败 | FAQ + UI 空态 |
| 3 | 场景语境 | Use cases ×3 |
| 4 | 对照表 | 主色板 vs 滴管 |
| 5 | 权威引用 | References |
| 6 | 本地隐私 | How/FAQ |
| 7 | 多语言 | `03` |
| 8 | 数值示例 | Example |
| 9 | 主题内链 | related |

**硬性勾选**：① ② ③ ④ ⑥ ⑦ ⑧ ⑨（+⑤）

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C06 · A.2 / D.1 · `image` · P1 |
| 场景与行业 | 设计取色 / 站长配色 |
| 技术 | Tier 0：缩略 Canvas + 中位切或桶量化；色数 2–12；复制 HEX/RGB/HSL；**不上传** |
| Title (en) | `Extract Colors from Image — Palette & Click Pick \| {Brand}` |
| Description 要点 | ≥120；选图→调色数→复制色值；本地；示例 |
| Schema | WebApplication + BreadcrumbList；`#cat-image` |
| FAQ ≥3 | 是否上传；如何算主色；色数不够；与滴管区别；动画/透明 |
| related | `how-to-calculate-gradient`, `image-crop` |
| 验收 | lint:seo；可提取可复制；无近义薄页；README |
| 工期粗估 | ~1d |
| 本地化核查 | `03-locale-briefs.md` |

## 交互规格（给实现用）

- 输入：文件/拖放（JPEG/PNG/WebP）；色数滑条默认 6（2–12）；Extract（选图后自动）；Clear；Load sample
- 输出：色块列表（占比%）；每色 HEX / RGB / HSL + Copy；预览原图缩略；**点击预览**可在源图像素上对 ~7×7 区域取平均色（与色板列表分开显示，可复制 HEX/RGB/HSL）
- 核心规则：色板——最长边缩至 ≤256 采样；alpha < 128 忽略；量化得最多 N 色，按像素占比降序；不足 N 则如实显示。点击取色——映射回源坐标，对点击附近约 7×7 不透明像素取平均
- 失败：未选图；解码失败；有效像素为 0
- 示例：样图 → 6 色 → 列出主导 HEX
- **进页样例**：合成四色块+红圆 PNG（360×240）；进页与 Load sample 均 `loadSample()` → `loadFile` → `extract()`；默认色数 6；色板区须可见 swatch（与 H2 Example 对齐）

## 页面模块清单

- [x] H1 + 摘要 · 首屏交互 · How · Rules · Example · Use cases · FAQ≥3 · Related≥2 · References≥1  
- [x] `03-locale-briefs.md` 已填
