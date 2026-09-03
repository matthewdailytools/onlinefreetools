# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`bulk-convert-images-to-jpg`  
**路径**：`/tools/bulk-convert-images-to-jpg`  
**主方向**：A  
**YMYL**：否  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。

---

## 使用场景（§3.3 H）

| 使用场景 | 用户搜法 | 作业类型 | 本页默认 / 芯片 |
|---|---|---|---|
| 表单/邮件/打印只要 JPG | bulk convert images to jpg; convert to jpg | 多图 → JPEG ZIP | **默认**：输出 `.jpg`、质量约 0.85、透明垫白 |
| PNG 转 JPG | png to jpg | 同意图 | 芯片/FAQ；不拆 `png-to-jpg` URL |
| HEIC 转 JPG | heic to jpg | 同意图 | 能解码则转；不能则该行失败 |
| 搜 jpeg 写法 | jpeg converter bulk | 同意图 | FAQ：扩展名统一 `.jpg` |
| 要透明 PNG | convert to png | **另一作业** | 有意不满足 |
| 只要压体积仍是照片 | compress jpg bulk | **另一作业** | 有意不满足 → 商品图压缩页 |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：bulk convert images to jpg；png to jpg；heic to jpg；convert to jpeg；images to jpg
- 用户真实任务：一次把很多张图变成 `.jpg`，透明有统一垫底，下载 ZIP。
- [x] 竞品常见：云端转换、格式下拉、打 ZIP；垫底规则常藏在「选 JPEG」里。
- [x] 缺口：① 透明无垫底会变黑块却不说明；② jpg vs jpeg 两套产品；③ HEIC 失败是否中止整批；④ 质量档与邮件附件体积。
- [x] 本页增益：整批同一垫底否则拒绝透明项；统一 `.jpg`；失败跳过；质量芯片。
- [x] 长尾：png/heic→jpg 并进本页。改 PNG/WebP 有意不满足。
- [x] 权威来源 URL：https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob ；https://jpeg.org/
- [x] Use case 草稿：报名表只收 JPG；客服打包 JPG 附件；打印店要 JPEG。
- [x] 边界草稿：透明未选垫底则失败行；HEIC 浏览器解不出 skip；GIF 取首帧。
- [x] Example / FAQ：两张样例（一张不透明、一张透明垫白）→ ZIP 内 `.jpg`。
- [x] Related：`image-format-converter`、`image-compress`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | JPEG 必须不透明；整批同一垫底色；质量滑条 |
| 2 | 边界/失败 | 无垫底的透明输入拒绝该行；HEIC 解码失败 skip；上限 20 |
| 3 | 场景语境 | 表单/邮件必须 JPG |
| 4 | 对照表 | 转换 vs 压缩体积（FAQ） |
| 5 | 权威引用 | toBlob JPEG |
| 6 | 本地隐私 | 设备内、不上服务器 |
| 7 | 多语言 | 03 |
| 8 | 数值示例 | 质量 0.85、两张样例 |
| 9 | 主题内链 | image-format-converter、image-compress |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | images / P0 转换簇默认页 |
| 场景与行业 | 批量转成 JPG 附件 |
| 技术 | Canvas JPEG toBlob；fflate；Tier 0；`localProcessing: true` |
| Catalog `page.style` | **opts** |
| Title (en) | **Bulk convert images to JPG** |
| Description 要点 | Add many images, convert them to `.jpg` in this tab with one matte color for transparency, skip files that fail, download a ZIP. Example: a photo and a logo on white become two `.jpg` files. Files stay on the device; they are not uploaded to a server. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | png 怎么转 jpg？heic 转不了怎么办？jpg 和 jpeg 要两个工具吗？会上传吗？透明怎么处理？ |
| Disclaimer / References | 非 YMYL；MDN toBlob |
| related | `image-format-converter`, `image-compress` |
| 验收 | `coverage:gate` 0b→2→4；`verify:tool` |
| 工期粗估 | 本 slug 一完整实现会话 |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-03 |
| slug 结论 | 保留 `bulk-convert-images-to-jpg`（输出 JPG 场景句；不拆 png-to-jpg / heic-to-jpg） |
| 主检索词 → title/H1 | 英文 H1 原句 **Bulk convert images to JPG**；zh 用「批量转换成 JPG」当地句，不把 bulk 硬塞进中文 H1 |
| 次要关键词 → desc / FAQ / Use cases | png to jpg → FAQ / Use case；heic to jpg → FAQ + 失败行；convert to jpeg → FAQ 扩展名 `.jpg`；images to jpg → desc |
| 用户搜索习惯判断 | 用户按目标后缀搜，不先打开万能转换器；中文搜「转成 jpg / png 转 jpg」 |
| 优化摘要 | 相对万能 converter 下拉初稿：进页即 JPG、无格式切换；png/heic 吸收进本页；jpeg 只进 FAQ |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=bulk-convert-images-to-jpg --phase=0b`

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 不适用（本 slug 无 Planner / Ads 长尾分析）
- [ ] 已引用分析路径：`docs/seo/keywords/…`

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| — | — | 无 Ads CSV | — | 不适用 |

- [ ] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-03 |
| 总判 | 满足：进页样例即转成 JPG 并给出 ZIP；默认垫白处理透明；不把 PNG/WebP 输出抢首屏 |
| 主词搜索者任务 | 一次把很多张图变成 jpg 文件带走，透明不能花掉 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | How 先写选一批图、垫底、转全部、下 ZIP；默认 `.jpg`；结果表区分成功/跳过 |
| 超出 / 应划边界 | 无输出格式芯片改 PNG/WebP；desc 无 SEO 元叙述；不压「目标 KB」当主路径（那是压缩页） |
| 缺口与已做优化 | FAQ 补 png/heic/jpeg；垫底为必选共享色；HEIC 失败不中止整批 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：`input multiple`，JPEG/PNG/WebP/GIF/BMP/HEIC（accept 含浏览器能给的类型）；上限 **20**。共享：质量（默认 0.85）；垫底白（默认）/黑/自定义。
- 输出：汇总表；成功 **ZIP** 内一律 `.jpg`。
- 核心规则：串行解码 → 有 alpha 则先铺垫底再 JPEG `toBlob`；无垫底且检测到透明 → 该行失败。GIF 首帧。ZIP 重名 `stem (2).jpg`。
- 失败：解码/编码失败 skip；0 成功禁用 ZIP。
- 示例：不透明色块 + 透明 logo 垫白 → 两个 `.jpg`。
- **进页样例**：`loadSample()` 两张 Canvas 图入队并 `convertAll()`，ZIP 可用。
- **实现防呆**：`opts`；`\\w`；`lint:tool-page -- --slug=bulk-convert-images-to-jpg`

## 页面模块清单（与 tool-creation 对齐）

> 勾选前须完成「清单前检索覆盖优化」与「用户意图审查」。

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] How it works
- [x] Formula / Rules（计算与转换类）
- [x] Example（固定文案，与默认样例一致）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1（YMYL 建议 ≥2）
- [ ] Disclaimer（YMYL 必备）
- [x] `03-locale-briefs.md` 已填（实现十语前）
