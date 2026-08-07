# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`image-format-converter`（不新建 `png-to-webp` / `jpg-to-png` / `avif-to-jpg` 等近义薄页）  
**路径**：`/tools/image-format-converter`  
**主方向**：A（A.2 图片处理 · Tier 0 Canvas）  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `i18n-done`）

> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 权威序：Google（`seo-google-policy.mdc`）→ lint/代码 → rules → docs。  
> 本地化：`tool-i18n-localization.mdc`（brief + ≥3 轮；`lint:seo` ≠ 本地化完成）。  
> 对齐：方向 A.2；可行性文档 `docs/2026-06-23-10-15-js-media-conversion-feasibility.md`；集群 C06 文档媒体。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. convert png to webp / png to jpg / image format converter  
  2. jpeg to png / webp to jpg / avif to jpg（兼容旧软件）  
  3. png to avif / webp converter online  
  4. convert image without uploading / local image converter（隐私意图 → FAQ，不拆页）  
  5. transparent png to jpeg（透明铺底 → Rules/FAQ/选项，不拆页）
- 用户真实任务：把已有图片改成目标 MIME（上站用 WebP/AVIF、兼容用 JPEG、无损/带透明用 PNG），并搞清质量、透明通道、浏览器编码能力差异。
- [x] 竞品 SERP 前 5–10 都提供了什么？  
  拖放/批量、目标格式下拉、质量滑条、「浏览器本地/隐私」口号、Download；部分用 Canvas，部分用 WASM（jSquash/Squoosh）；少数有格式对照表（透明/动画/体积）；极少写「校验 `blob.type`」或 JPEG 透明铺底色可选。
- [x] 它们没讲清什么？（≥3 条缺口）  
  1. **编码能力矩阵**：解码支持 ≠ 编码支持——AVIF 编码主要 Chromium；Safari 可能对不支持的 MIME **静默回退成 PNG**  
  2. **透明通道策略**：PNG/WebP/AVIF 可保 alpha；JPEG 无 alpha——竞品常不给可选底色（黑/白/自定义），结果因浏览器而异  
  3. **质量语义**：PNG 忽略 quality；WebP `quality=1.0` 可能走无损；AVIF/JPEG 质量与体积权衡缺可验证说明  
  4. **结果诚实性**：输出前后尺寸/MIME 对照；失败时是否仍「看起来成功」  
  5. **多语言检索向正文**：多数英文或机翻；本站十语 brief + 独立重写是可验证增量（§3.1 ⑦）
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）  
  - **①** Rules：解码→Canvas→`toBlob(mime, quality)` 步骤；质量对 PNG/JPEG/WebP/AVIF 的含义  
  - **②** 边界：不支持的编码、静默回退检测、超大图内存、动画帧只取首帧、HEIC 等未解码格式  
  - **③** Use cases：上站 WebP/AVIF；透明 PNG→JPEG 铺白底；AVIF→JPEG 给旧软件  
  - **④** 对照表：四格式 × 有损/无损 × 透明 × 典型浏览器编码支持  
  - **⑤** References：MDN `toBlob`、WebP / AVIF / PNG 规范或权威说明  
  - **⑥** 本地隐私：文件不上传；FAQ 可写「Network 面板无图片 POST」  
  - **⑦** 十语 locale brief + 检索向重写 + ≥3 轮（见 `03`）  
  - **⑧** 固定 Example（如：透明 PNG→JPEG 铺白底后无 alpha；PNG→WebP 体积变小的量级描述）  
  - **⑨** Related ≥2 → 页底内链
- [x] 长尾：合并进本页模块，还是满足 §3.3 后拆页？理由：  
  **合并进本页**。同一上传→选目标格式→下载流程；仅源/目标 MIME 或场景文案不同。单独 `png-to-webp` / `jpg-to-avif` 等易成 doorway。用「目标格式」选择器 + Use cases + FAQ 覆盖。
- [x] 权威来源 URL：  
  - https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob  
  - https://developers.google.com/speed/webp  
  - https://aomediacodec.github.io/av1-avif/  
  - https://www.w3.org/TR/png-3/ （或现行 PNG 规范入口）
- [x] 行业/场景 Use case 文案草稿：  
  1. 前端/站长：PNG 截图或照片 → WebP/AVIF 减小传输体积  
  2. 设计协作：带透明的 UI 图标 → JPEG 交稿（选白/自定义底色）  
  3. 兼容：手机导出的 AVIF/WebP → JPEG，给不支持新格式的打印/办公软件
- [x] 边界/失败案例草稿：空文件；浏览器无法解码（如部分 HEIC）；目标 MIME 编码不支持或 `blob.type` ≠ 请求类型；JPEG 透明被填黑/白；动画 GIF/WebP/AVIF 仅首帧；超大分辨率 OOM；质量滑条对 PNG 无效
- [x] 结果区信息如何落到可索引 Example / FAQ：固定 Example（透明→JPEG、PNG→WebP）；FAQ（隐私、AVIF 浏览器、质量、透明、回退检测）；结果区展示「输出 MIME / 原字节→新字节」并在 FAQ/Example 复述量级
- [x] Related / 主题内链计划（≥2）：目标 `image-compress`、`image-to-base64`（均未上线时实现期可用现有开发者工具占位，如 `markdown-to-html` + `yaml-json`，并在 catalog 注释待替换）；未来可加 `amazon-image-resizer`（格式转完再出平台尺寸）

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：`drawImage` → `toBlob(type, quality)`；质量语义 |
| 2 | 边界/失败 | FAQ + UI：编码不支持、`blob.type` 校验、动画首帧、大图 |
| 3 | 场景语境 | Use cases ×3（上站 / 透明交稿 / 兼容旧软件） |
| 4 | 对照表 | Rules：四格式 × 透明 × 有损 × 编码支持 |
| 5 | 权威引用 | References → MDN / WebP / AVIF / PNG |
| 6 | 本地隐私 | How/FAQ：文件不上传 |
| 7 | 多语言 | 十语 brief + 检索向重写 + ≥3 轮（`03`） |
| 8 | 数值示例 | Example：固定前后格式/透明/体积量级描述 |
| 9 | 主题内链 | related ≥ 2 |

**硬性勾选（计划落地）**：① ② ③ ④ ⑥ ⑦ ⑧ ⑨（+⑤ References）

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C06 文档媒体 · 方向 A.2 · **catalog 分类 `image`（图片处理工具）** · P0 |
| 场景与行业 | 站长/前端/设计协作：通用格式互转（非平台规格包） |
| 技术（包、Tier、本地处理） | Tier 0：`Image`/`createImageBitmap` + Canvas + `toBlob`；**纯客户端、不上传**；v1 **不**引入 Squoosh；编码前探测支持并校验输出 `blob.type` |
| Title (en) | `Image Format Converter — PNG, JPEG, WebP, AVIF Local \| {Brand}` |
| Description 要点 | ≥120；步骤（选图→选目标格式→调质量/底色→下载）+ 透明与浏览器编码差异 + 本地处理；十语检索向覆盖 png to webp 等 |
| Schema | WebApplication + BreadcrumbList（与可见文案一致） |
| FAQ 要点（≥3） | 文件是否上传；AVIF/WebP 编码浏览器差异；JPEG 透明怎么办；PNG 质量滑条是否生效；动画会怎样；如何确认真的转成目标格式 |
| Disclaimer / References | 非 YMYL；MDN toBlob、WebP、AVIF、PNG |
| related | 目标：`image-compress`, `image-to-base64`；未上线前实现占位：`markdown-to-html`, `yaml-json`（上线后替换） |
| 验收 | `lint:seo`；`03` ≥3 轮；四目标格式可交互；JPEG 底色选项；`blob.type` 与请求不一致时明确提示；无独立近义薄页；README 清单登记 |
| 工期粗估 | ~1–1.5d（交互 + 对照表/IG 文案 + 十语检索向；Worker 批处理可后置） |
| 本地化核查 | 见 `03-locale-briefs.md`（每语 brief + 禁词表 + ≥3 轮） |

## 交互规格（给实现用）

- 输入：
  - 文件选择 / 拖放：接受浏览器能解码的常见位图（至少 PNG、JPEG、WebP；AVIF 视浏览器解码能力；GIF/BMP 可接受但 FAQ 说明动画仅首帧）
  - **目标格式**：PNG | JPEG | WebP | AVIF | BMP | GIF | ICO | SVG（单选；默认 **WebP**；后四项为同页本地额外编码器，不拆 URL）
  - **质量**滑条（0.5–1.0，默认 0.85）：仅对 JPEG / WebP / AVIF 生效；PNG / BMP / GIF / ICO / SVG 禁用或标注忽略质量
  - **JPEG 底色**（仅目标为 JPEG 且源可能含透明时显示）：白 / 黑 / 自定义色；先铺底再 `drawImage`
  - 操作：Convert（可选自动在选文件后转换）/ Download / Clear；可选「再转一批」多文件队列（v1 至少单文件；多文件为同页增强，不另开 URL）
- 输出：
  - 成功：预览缩略图 + **原 MIME/尺寸/字节 → 新 MIME/尺寸/字节** + Download（扩展名与 MIME 一致）
  - 失败/降级：若 `blob.type` 与请求 MIME 不符 → 明确错误/警告（勿静默当成功）；编码不支持 → 提示换浏览器或改目标格式
- 核心规则 / 算法：
  1. 解码：`createImageBitmap(file)` 或 `Image` + object URL  
  2. 若目标 JPEG：用所选底色填满 canvas，再绘制（处理透明）  
  3. `canvas.toBlob(cb, mime, quality)`；PNG 不传有意义的 quality 依赖  
  4. **校验** `blob.type === mime`（或可接受的别名如 `image/jpg` vs `image/jpeg`）；失败则提示  
  5. WebP：`quality === 1` 可能接近无损——Rules/FAQ 写明，UI 可在 1.0 旁注「可能无损」
- 失败与边界行为：
  - 无法解码 → 可读错误  
  - AVIF 编码不可用 → 禁用 AVIF 选项或转换时失败提示（实现择一，须与 Rules 一致；**禁止**假装成功）  
  - 软上限建议：单边长 ≤ 8192 或文件 ≤ 25MB（警告仍可试）；过大提示可能卡顿/内存不足  
  - 动画：只转换当前可见/首帧，FAQ 说明不做动图保帧
- 示例 Input → Output（写入 Example 稳定文案）：
  - 透明 PNG 图标 → JPEG + 白底：输出无 alpha，白底可见  
  - 照片 JPEG → WebP quality 0.85：同尺寸像素，体积通常明显更小（文案给「常见可小约 XX%」量级，避免绝对承诺）  
  - AVIF → JPEG：便于旧软件打开（若源浏览器可解码 AVIF）

## 页面模块清单（与 tool-creation 对齐）

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区
- [x] How it works
- [x] Formula / Rules（四格式对照 + 质量/透明/回退）
- [x] Example（固定文案）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1
- [x] Disclaimer — 非 YMYL；隐私在 How/FAQ
- [x] `03-locale-briefs.md` 已填（实现十语前）
- [x] README 工具清单登记（实现时）
- [x] **不**注册独立 `png-to-webp` / `jpg-to-png` / `avif-to-jpg` 等 slug
