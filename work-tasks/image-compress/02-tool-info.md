# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`image-compress`（不新建 `compress-jpg` / `reduce-image-size` / `image-optimizer` / `compress-png` 等近义薄页）  
**路径**：`/tools/image-compress`  
**主方向**：A（A.2 图片处理 · Tier 0 Canvas；目标体积可选 Tier 1）  
**catalog 分类**：`image`（图片处理工具）  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `i18n-done`）

> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 权威序：Google（`seo-google-policy.mdc`）→ lint/代码 → rules → docs。  
> 本地化：`tool-i18n-localization.mdc`。  
> 对齐：方向 A.2；包调研 `docs/2026-07-09-js-tool-packages-survey.md`；可行性 `docs/2026-06-23-10-15-js-media-conversion-feasibility.md`；集群 C06。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. compress image / image compressor / 图片压缩  
  2. reduce image size / compress jpeg / compress photo online  
  3. compress image to 100kb / 压缩到指定大小  
  4. compress image without uploading / local image compressor（隐私 → FAQ，不拆页）  
  5. resize and compress / 缩小分辨率再压缩（同页选项，不拆独立 resize 薄页）
- 用户真实任务：在保持可接受观感的前提下减小文件体积（和/或最长边），以便上传、发帖、邮件附件或加快网页加载；需要看清前后体积与是否因 Canvas 重编码丢掉 EXIF。
- [x] 竞品 SERP 前 5–10 都提供了什么？  
  拖放、质量滑条、目标 KB、改最长边、输出 JPEG/WebP、「本地/隐私」口号、Download；部分强制上传到服务器；少数批量 ZIP；极少写清「Canvas 重编码会剥 EXIF」或「达不到目标体积时怎么办」。
- [x] 它们没讲清什么？（≥3 条缺口）  
  1. **压缩机制**：多数是解码→可选缩放→有损 `toBlob`；不是「无损魔法」；PNG 作为输出往往体积不降反升  
  2. **目标体积可行性**：已很糊的 JPEG 无法再压到任意小；应说明迭代策略与失败/「最接近」结果  
  3. **与格式转换分工**：压缩主目标是体积；换 MIME 是手段；透明 PNG→JPEG 需底色（可复用 format-converter 经验或链过去）  
  4. **EXIF**：Canvas 导出通常无 EXIF——应明示并链 `image-exif`  
  5. **多语言检索向**：多数英文或机翻；本站十语 brief 为可验证增量（§3.1 ⑦）
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）  
  - **①** Rules：缩放（最长边）→ 铺底（若 JPEG）→ `toBlob(mime, quality)`；可选质量二分逼近目标字节  
  - **②** 边界：达不到目标体积、PNG 输出难变小、动画首帧、超大图内存、编码不支持  
  - **③** Use cases：上站减体积；附件/表单大小限制；社交发帖前缩小  
  - **④** 对照表：质量 / 最长边 / 目标体积 三旋钮各自影响什么  
  - **⑤** References：MDN `toBlob`；可选 browser-image-compression README  
  - **⑥** 本地隐私：不上传；FAQ  
  - **⑦** 十语 brief + 检索向重写  
  - **⑧** Example：固定「约 X MB → 约 Y KB / 最长边 Z」量级叙述（避免绝对承诺）  
  - **⑨** Related ≥2 → format-converter、exif
- [x] 长尾：合并进本页模块，还是满足 §3.3 后拆页？理由：  
  **合并**。同一流水线（缩放 + 质量/目标体积 + 下载）；仅「压 JPEG」「压到 100KB」「缩小宽度」文案不同。独立 `compress-jpg` / `reduce-image-size` 易成 doorway。用控件 + Use cases + FAQ 覆盖。
- [x] 权威来源 URL：  
  - https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob  
  - https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL  
  - https://github.com/Donaldcwl/browser-image-compression （若实现采用或 References 提及）  
  - https://developers.google.com/speed/webp （WebP 有损体积场景）
- [x] 行业/场景 Use case 文案草稿：  
  1. 站长/前端：大图压到更合适的 WebP/JPEG 再上 CDN  
  2. 表单/邮件：附件有 MB 上限时压到目标体积附近  
  3. 社交：发帖前缩小最长边 + 降低质量，减少失败上传
- [x] 边界/失败案例草稿：空文件；无法解码；目标体积低于理论下限（给出最接近结果 + 警告）；输出选 PNG 体积几乎不降；动画仅首帧；超大分辨率 OOM；WebP/AVIF 编码浏览器差异（v1 可先 JPEG/WebP/PNG，AVIF 可选）
- [x] 结果区信息如何落到可索引 Example / FAQ：结果区展示原/新字节、尺寸、MIME、压缩比；Example/FAQ 复述量级与「达不到目标」行为；FAQ 写 EXIF 被剥
- [x] Related / 主题内链计划（≥2）：`image-format-converter`、`image-exif`（实现时更新二者 catalog related 互链）

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：缩放 + toBlob + 目标体积迭代 |
| 2 | 边界/失败 | FAQ + UI：达不到目标、PNG、大图、动画 |
| 3 | 场景语境 | Use cases ×3 |
| 4 | 对照表 | 三旋钮影响对照 |
| 5 | 权威引用 | References → MDN / WebP / 可选库 |
| 6 | 本地隐私 | How/FAQ |
| 7 | 多语言 | `03` brief + ≥3 轮 |
| 8 | 数值示例 | Example：前后体积/边长量级 |
| 9 | 主题内链 | related ≥ 2 |

**硬性勾选（计划落地）**：① ② ③ ④ ⑥ ⑦ ⑧ ⑨（+⑤）

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C06 · 方向 A.2 · catalog **`image`** · P0（图片类第三工具） |
| 场景与行业 | 上站减体积 / 附件上限 / 社交发帖（通用压缩，非平台合规包） |
| 技术（包、Tier、本地处理） | **首选 Tier 0**：`createImageBitmap`/`Image` + Canvas + `toBlob`；最长边缩放；质量滑条；可选**质量二分**逼近目标字节。若迭代体验不足，可动态 import `browser-image-compression`（Tier 1，~10KB）。**不上传**；v1 **不**引入 Squoosh。默认输出 **JPEG 或 WebP**（实现默认建议 WebP，不支持则回退 JPEG 并校验 `blob.type`） |
| Title (en) | `Image Compressor — Resize, Quality & Target Size Local \| {Brand}` |
| Description 要点 | ≥120；步骤（选图→设最长边/质量/目标体积→下载）+ 前后对照 + 本地；示例场景 |
| Schema | WebApplication + BreadcrumbList；`#cat-image`；`MultimediaApplication` |
| FAQ 要点（≥3） | 是否上传；能否压到任意 KB；PNG 为何难压小；会否丢掉 EXIF；与格式转换工具区别；动画怎么办 |
| Disclaimer / References | 非 YMYL；MDN toBlob；WebP；可选 compression 库 |
| related | `image-format-converter`, `image-exif` |
| 验收 | `lint:seo`；`03` ≥3 轮；可交互压缩并显示前后体积；目标体积有明确成功/最接近/失败文案；无近义薄页；README；catalog `image`；更新 format-converter / exif 的 related |
| 工期粗估 | ~1–1.5d（交互 + 迭代逻辑 + IG 文案 + 十语） |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 交互规格（给实现用）

- 输入：
  - 文件选择 / 拖放（浏览器可解码的位图；至少 JPEG/PNG/WebP）
  - **最长边**（px，可选关闭「不缩放」）：默认如 1920 或「保持」；等比缩放，不放大超过原图（除非明确提供 upscale，v1 **不放大**）
  - **质量**（0.5–1.0，默认 0.8）：对 JPEG/WebP 生效；输出 PNG 时禁用或标注忽略
  - **目标体积**（可选）：如 max KB/MB；启用后在质量下限之上二分/逐步降低 quality（及必要时略降边长——若做须在 Rules 写清；v1 可仅调 quality）
  - **输出格式**：JPEG | WebP | PNG（默认 WebP，探测不支持则禁用并默认 JPEG）
  - **JPEG 底色**（输出 JPEG 且源可能透明时）：白 / 黑 / 自定义（与 format-converter 一致）
  - 操作：Compress / Download / Clear；v1 至少单文件，多文件为同页增强不另开 URL
- 输出：
  - 成功：预览 + **原尺寸/字节 → 新尺寸/字节 + 压缩比%** + MIME + Download
  - 目标体积：达到则标记成功；达不到则下载「最接近」并警告（禁止假装已达目标）
  - `blob.type` 与请求不符 → 明确错误/警告
- 核心规则 / 算法：
  1. 解码 → 按最长边等比缩放（仅缩小）→ 画到 canvas（JPEG 先铺底）  
  2. `toBlob(mime, quality)`；若设目标体积且超限 → 降低 quality 重试至下限（如 0.5）  
  3. 校验 `blob.type`；展示前后对照  
  4. Rules/FAQ：重编码通常**移除 EXIF**；链到 `image-exif` 若需先查看
- 失败与边界行为：
  - 无法解码 → 可读错误  
  - 目标过小 → 警告 + 最接近结果  
  - 输出 PNG 且体积未降 → 提示改用 JPEG/WebP  
  - 软上限：单边 ≤ 8192 或文件 ≤ 25MB（警告仍可试）  
  - 动画：仅首帧
- 示例 Input → Output（写入 Example 稳定文案）：
  - 约 4MB 手机 JPEG → 最长边 1920 + WebP q≈0.8：体积常降到数百 KB 量级（文案给范围，勿绝对承诺）  
  - 透明 PNG → JPEG 白底 + 目标 200KB：无 alpha，体积受目标约束或警告  
  - 已很小的 JPEG 再压到 20KB：说明可能达不到

## 页面模块清单（与 tool-creation 对齐）

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区
- [x] How it works
- [x] Formula / Rules（三旋钮 + 迭代 + EXIF）
- [x] Example（固定文案）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1
- [x] Disclaimer — 非 YMYL；隐私在 How/FAQ
- [x] `03-locale-briefs.md` 已填（实现十语前）
- [x] README 工具清单登记（实现时）
- [x] **不**注册独立 `compress-jpg` / `reduce-image-size` / `image-optimizer` 等 slug

## 与相邻工具边界

| 工具 | 本页不做 | 本页可做 |
|---|---|---|
| `image-format-converter` | 以「换 MIME」为主任务、格式对照深度 | 为减小体积而选 JPEG/WebP 作为输出手段 |
| `image-exif` | 字段级读/清 UI | 说明压缩会剥 EXIF并内链 |
| 方向 B 平台图包 | 具名平台规格表 + ZIP 多尺寸 | 通用最长边/体积；Related 未来可链 |
