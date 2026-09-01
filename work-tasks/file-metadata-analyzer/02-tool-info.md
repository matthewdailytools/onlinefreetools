# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`file-metadata-analyzer`  
**路径**：`/tools/file-metadata-analyzer`  
**主方向**：A（本地 File API + 可选 magic-byte / 媒体解码）  
**YMYL**：否  
**Locale briefs**：见 `03-locale-briefs.md`（`i18n-done`）

---

## 使用场景

| 场景 | 进页默认 | 说明 |
|---|---|---|
| **看本地文件基础元数据** | **是** | H1 File metadata analyzer |
| 图片宽×高 | 自动（createImageBitmap / Image） | 与 MIME 或 magic 一致时 |
| 音视频时长（+ 视频尺寸） | media 元素 | 解码失败仍显示基础字段 |
| 深度 EXIF 编辑/剥离 | — | **有意不满足** → related `image-exif` |
| 文件哈希/完整性 | — | related `file-hash` |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. file metadata analyzer / 文件元数据
  2. check image resolution / image dimensions online
  3. video duration checker / audio file length
  4. file type checker / MIME type from file
  5. what is my file size（边界 → FAQ）
- 用户真实任务：拖入或选择一个本地文件，快速看到名称、大小、类型、修改时间，以及图片分辨率或音视频时长，无需上传。
- [x] 竞品 SERP：Aconvert Analyze、在线 EXIF 查看器、MediaInfo 桌面版、简单 file info 页
- [x] 缺口（≥3）：
  1. 隐私：多数竞品上传或含糊「online」
  2. 解码失败时仍应列出 File 基础字段
  3. magic-byte 与 MIME 不一致时的说明
  4. 与 EXIF 深度工具的边界
  5. 十语正文
- [x] 增益（≥3）：
  - **①** Rules：字段来源 + magic-byte 对照
  - **②** 边界：空选择、媒体解码失败、无 MIME 扩展名
  - **③** Use cases：发稿前查分辨率、核对导出时长、怀疑扩展名造假
  - **④** Example：16×16 样例 PNG 首屏
  - **⑤** References：MDN File / HTMLMediaElement
  - **⑥** 本地隐私 FAQ
  - **⑦** 十语 brief
  - **⑧** Related：`image-exif`, `file-hash`
- [x] 长尾：resolution/duration/MIME 并入 desc/FAQ/Use cases，不拆 URL
- [x] 权威：MDN File API、HTMLMediaElement
- [x] Use cases ×3；边界与 Example 见交互规格
- [x] Related：`image-exif`, `file-hash`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 字段来源 + magic-byte 表 |
| 2 | 边界/失败 | 空文件、解码失败、无 type |
| 3 | 场景语境 | Use cases ×3 |
| 4 | 对照表 | 本页 vs image-exif 深度 EXIF |
| 5 | 权威引用 | MDN |
| 6 | 本地隐私 | 不上传 FAQ |
| 7 | 多语言 | `03` |
| 8 | 数值示例 | 样例 PNG 16×16 |
| 9 | 主题内链 | related ≥2 |

**硬性勾选**：① ② ③ ④ ⑥ ⑦ ⑧ ⑨

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 清单 §0 P1（末条）→ 已上线 |
| 场景与行业 | 开发者 / 运营 / 创作者：本地文件检视 |
| 技术 | File API；magic-byte 前 12B；createImageBitmap/Image；video/audio 元素；**不上传** |
| Catalog `page.style` | opts |
| Title (en) / H1 | **File metadata analyzer** |
| Description 要点 | Drop/choose file → table of name, size, MIME, modified; images → dimensions; A/V → duration; magic hints; stays on device, not uploaded. Example: sample PNG 16×16 on first paint. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点 | 上传？与 image-exif 差别？无 MIME？解码失败？magic-byte 是什么？ |
| related | `image-exif`, `file-hash` |
| 验收 | loadSample 首屏；coverage 0b/2/4；verify:tool |
| 本地化核查 | `03` |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-01 |
| slug 结论 | 保留 `file-metadata-analyzer`（场景：看本地文件容器/基础字段） |
| 主检索词 → title/H1 | file metadata analyzer / 文件元数据分析器 → 各语 H1 |
| 次要关键词 → desc / FAQ / Use cases | image resolution → usecase/FAQ；video duration → usecase/FAQ；file type MIME → desc/rules；file size → desc |
| 用户搜索习惯判断 | 搜「metadata analyzer」「file info」要结果向 H1；不枚举「name、size、MIME 表格」目录腔 |
| 优化摘要 | 2026-09-01：H1=File metadata analyzer；次词落 desc/FAQ/usecase；边界指向 image-exif |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner / Ads 长尾分析）

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-01 |
| 总判 | **满足**：拖/选文件 → 元数据表；图/音视频加深字段 |
| 主词搜索者任务 | 快速查看本地文件大小、类型、分辨率或时长 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | 首屏样例；基础字段始终显示；magic-byte 可选提示 |
| 超出 / 应划边界 | 不做 EXIF 编辑；不做 mediainfo 全容器深度 |
| 缺口与已做优化 | How 先写「选文件看字段」，FAQ 指向 image-exif / file-hash |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格

- 输入：拖放区 + `<input type="file">`（任意类型）
- 输出：结果表（name, size bytes + human, MIME/type, lastModified, dimensions?, duration?, magic hint?, decode note?）
- 算法：File 属性；`file.slice(0,12)` magic；图片 `createImageBitmap` 回退 `Image`；音视频 `<video>`/`<audio>` + `loadedmetadata`
- 边界：空选择提示；媒体解码失败仍显示基础行；无 `file.type` 时用 magic 提示
- 示例：内存生成 16×16 PNG `sample-icon.png`，首屏自动分析
- **进页样例**：`loadSample()` → 合成 File → `analyzeFile()`；与 Example 一致
- **实现防呆**：opts；DOM 前缀 `fma`；模板正则 `\\w` / `\\d`

## 页面模块清单

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] How it works
- [x] Formula / Rules
- [x] Example
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1
- [ ] Disclaimer（非 YMYL）
- [x] `03-locale-briefs.md` 已填
