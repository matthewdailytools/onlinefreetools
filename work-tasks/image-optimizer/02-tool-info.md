# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`image-optimizer`（不新建 `optimize-webp` / `mozjpeg-compress` / `avif-optimizer` / `advanced-image-codec` 等近义薄页）  
**路径**：`/tools/image-optimizer`  
**主方向**：A（A.2 图片处理 · Tier 2 WASM 编解码）  
**catalog 分类**：`image`（图片处理工具）  
**YMYL**：否  
**Locale briefs**：`03-locale-briefs.md` 已填（状态 `briefs-ready`；实现页后 ≥3 轮）  
**定稿确认**：2026-08-07（见文末「已确认」）  
**实现**：2026-08-07 — `imageOptimizerPage.ts` + `/tools/image-optimizer/engine.mjs` + `@jsquash` vendor 复制脚本

> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 权威序：Google（`seo-google-policy.mdc`）→ lint/代码 → rules → docs。  
> 本地化：`tool-i18n-localization.mdc`。  
> 对齐：方向 A.2「高级编解码」；包调研 `docs/2026-07-09-js-tool-packages-survey.md`；可行性 `docs/2026-06-23-10-15-js-media-conversion-feasibility.md`；集群 C06。  
> **对外命名**：检索主词用「图片优化 / Image Optimizer」，不用「高级编解码」（见 `01` SEO 命名）。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. image optimizer / optimize image / 图片优化  
  2. optimize images for web / 网页图片优化 / reduce image size for website  
  3. compress to webp / compress to avif（优化场景下的输出格式；**不拆**独立 URL）  
  4. mozjpeg online / oxipng online（编码器长尾 → 控件 + FAQ）  
  5. optimize image without uploading / local image optimizer（隐私 → FAQ，不拆页）
- 用户真实任务：在下载前看到「体积变小多少、画质是否可接受」，并用专业编码器（而非浏览器默认 `toBlob`）导出 WebP / AVIF / JPEG / PNG，用于上站、CDN、媒体库。
- [x] 竞品 SERP 前 5–10 都提供了什么？  
  Squoosh.app：拖放、左右对照滑条、多编码器、格式参数、本地 WASM；TinyPNG 等：上传云端一键压；多数「image compressor」只有质量滑条；少有讲清「Canvas 编码 vs MozJPEG/libavif」差异与加载成本。
- [x] 它们没讲清什么？（≥3 条缺口）  
  1. **与轻量压缩器的分工**：何时用 Canvas 快压，何时值得加载 WASM  
  2. **编码器对照表**：MozJPEG vs 浏览器 JPEG、OxiPNG vs 普通 PNG、WebP/AVIF 质量语义与耗时  
  3. **失败/边界**：超大图 OOM、AVIF 编码很慢、某编码器 WASM 加载失败、动画仅首帧、EXIF 通常被剥  
  4. **多语言检索向**：Squoosh 以英文为主；本站十语 brief 为可验证增量（§3.1 ⑦）
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）  
  - **①** Rules：选编码器 →（可选缩放）→ WASM encode → 下载；各编码器关键旋钮含义  
  - **②** 边界：引擎未加载、编码超时/失败、大图内存、动画首帧、与 `image-compress` 何时互链  
  - **③** Use cases：上站 CWV；媒体库批量前试一张；兼容 JPEG（MozJPEG）仍要更小体积  
  - **④** 对照表：编码器 × 有损/无损 × 透明 × 典型体积/速度权衡  
  - **⑤** References：MozJPEG / libwebp / AVIF / jSquash（或 Squoosh 同源说明）  
  - **⑥** 本地隐私：不上传；WASM 本机；FAQ  
  - **⑦** 十语 brief + 检索向重写  
  - **⑧** Example：固定「同图 Canvas JPEG vs MozJPEG / WebP / AVIF」量级叙述（避免绝对承诺）  
  - **⑨** Related ≥2 → `image-compress`、`image-format-converter`（+ `image-exif`）
- [x] 长尾：合并进本页模块，还是满足 §3.3 后拆页？理由：  
  **合并**。同一「加载引擎 → 选编码器/格式 → 调参 → 对照 → 下载」流水线；仅输出格式或编码器不同。独立 `avif-optimizer` / `mozjpeg-online` 易成 doorway。用编码器选择器 + Use cases + FAQ 覆盖。
- [x] 权威来源 URL：  
  - https://github.com/GoogleChromeLabs/squoosh （能力参照 / 同源编解码器）  
  - https://github.com/jamsinclair/jSquash （推荐实现包）  
  - https://github.com/mozilla/mozjpeg  
  - https://developers.google.com/speed/webp  
  - https://aomediacodec.github.io/av1-avif/  
  - https://developer.mozilla.org/en-US/docs/WebAssembly（可选，解释本地 WASM）
- [x] 行业/场景 Use case 文案草稿：  
  1. 站长/前端：上站前把英雄图优化到 WebP/AVIF，对照观感后再定质量  
  2. 内容运营：仍需 JPEG 兼容时用 MozJPEG，而不是浏览器默认 JPEG  
  3. 设计协作：透明 UI 图用 OxiPNG/WebP 无损或近无损，看体积再交稿
- [x] 边界/失败案例草稿：未点「加载引擎」；WASM 加载失败/离线缓存；AVIF 编码耗时长（进度/可取消）；超大分辨率内存不足；GIF/动画仅首帧；输出后无 EXIF（链 exif）；用户其实只想「快速压到 100KB」→ 引导 `image-compress`
- [x] 结果区信息如何落到可索引 Example / FAQ：结果区展示原/新字节、尺寸、编码器名、耗时；Example/FAQ 复述量级与「慢/失败」行为；FAQ 写与 compress 页差异
- [x] Related / 主题内链计划（≥2）：`image-compress`、`image-format-converter`；建议再加 `image-exif`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：编码器流水线 + 旋钮语义 |
| 2 | 边界/失败 | FAQ + UI：加载失败、超时、大图、动画 |
| 3 | 场景语境 | Use cases ×3 |
| 4 | 对照表 | 编码器 × 透明 × 速度 × 体积 |
| 5 | 权威引用 | References → MozJPEG / WebP / AVIF / jSquash |
| 6 | 本地隐私 | How/FAQ |
| 7 | 多语言 | `03` brief + ≥3 轮 |
| 8 | 数值示例 | Example：前后体积/编码器对照量级 |
| 9 | 主题内链 | related ≥ 2 |

**硬性勾选（计划落地）**：① ② ③ ④ ⑥ ⑦ ⑧ ⑨（+⑤）

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C06 文档媒体 · 方向 A.2 · **catalog `image`** · P1（Tier 2，排在 compress/format 之后） |
| 场景与行业 | 站长/前端/内容：上站图片优化（非平台规格包） |
| 技术（包、Tier、本地处理） | Tier **2**：`@jsquash/*` 按需动态 import（MozJPEG / WebP / AVIF / PNG·OxiPNG）；**禁止**依赖已停更的 `@squoosh/lib` 作为唯一路径；**纯客户端**；首屏无 WASM；按钮「加载优化引擎」后再拉；Worker 编码 |
| Title (en) | `Image Optimizer — WebP, AVIF & MozJPEG Locally \| {Brand}`（结果/场景向；勿堆参数目录） |
| Title (zh 方向) | `图片优化 — 更小体积，可调编码器，本地完成`（主词「图片优化」；「高级编解码」不进 H1） |
| Description 要点 | ≥120；步骤（选图→加载引擎→选格式/编码器→对照→下载）+ 与普通压缩差异 + 本地/WASM；覆盖 optimize for web、webp/avif |
| Schema | WebApplication + BreadcrumbList（与可见文案一致） |
| FAQ 要点（≥3） | 和「图片压缩」有何不同；文件是否上传；为何要先加载引擎；AVIF 为何慢；动画/EXIF 会怎样；何时改用 format-converter |
| Disclaimer / References | 非 YMYL；jSquash / MozJPEG / WebP / AVIF；可选注明编码器源自 Squoosh 生态、非 Google 官方产品页 |
| related | `image-compress`, `image-format-converter`, `image-exif` |
| 验收 | `lint:seo`；`03` ≥3 轮；引擎点击后加载；v1 四编码器可导出；滑动对照 + 体积可见；AVIF 有进行中/可取消；无近义薄页；与 compress 文案互指清晰 |
| 工期粗估 | ~2–3d（WASM 分包 + Worker + 对照 UI + IG 文案 + 十语）；含短 POC 更稳 |
| 本地化核查 | 见 `03-locale-briefs.md`（每语 brief + 禁词表 + ≥3 轮） |

## 交互规格（给实现用）

- 输入：
  - 文件选择 / 拖放（常见位图；动画仅首帧须提示）
  - **加载优化引擎**（首屏必备；未加载时禁用编码）
  - **输出格式 / 编码器（v1 定稿）**：MozJPEG（JPEG）、WebP、**AVIF**、OxiPNG（PNG）；按 `@jsquash/*` 分片懒加载；缺包时实现期用等价 PNG 包并在 Rules 注明
  - 质量 / 速度类旋钮（随编码器显示；避免 H1 枚举参数名）
  - 可选：最长边缩放（预处理）
  - **对照 UI（v1 定稿）**：**左右滑动对比**（原图 | 结果）；结果区另展示字节/尺寸/编码器/耗时
- 输出：下载 Blob；展示原/新字节、尺寸、编码器、耗时；失败明确错误态
- 核心规则 / 算法：解码为 ImageData（浏览器或对应 decode WASM）→ 可选缩放 → 选定 encoder WASM → 编码选项 → Blob
- 失败与边界行为：未加载引擎提示；WASM 失败可重试；**AVIF 必须**显示进行中/可取消（诚实写慢）；超限分辨率警告；引导「只要快速压体积 → image-compress」
- 示例 Input → Output：同一张 JPEG 照片 → MozJPEG / WebP / AVIF 三档体积量级描述（文案固定，数值用「约」）

## 页面模块清单（与 tool-creation 对齐）

- [ ] H1 + 一句话摘要（主词：Image Optimizer / 图片优化）
- [ ] 首屏工具交互区（含「加载引擎」）
- [ ] How it works
- [ ] Formula / Rules（编码器对照 + 旋钮语义）
- [ ] Example（固定文案）
- [ ] Use cases（2–3）
- [ ] FAQ ≥3（含 vs `image-compress`）
- [ ] Related tools ≥2
- [ ] References ≥1
- [ ] Disclaimer（非 YMYL 可省略长免责；隐私一句即可）
- [x] `03-locale-briefs.md` 已填（状态 `briefs-ready`；页面实现后 ≥3 轮）

## 已确认（2026-08-07）

| # | 议题 | 定稿 |
|---|---|---|
| 1 | 对外主词 | **Image Optimizer / 图片优化**（「高级编解码」不进 H1/slug） |
| 2 | v1 编码器 | **MozJPEG + WebP + AVIF + OxiPNG**（含 AVIF；UI/FAQ 诚实写慢与可取消） |
| 3 | 对照 UI | **左右滑动对比**（对齐 Squoosh 心智；另附体积数字） |

下一步：填 `03-locale-briefs.md` → 用户明确要求实现后按 `tool-creation.mdc` 开工。
