# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`bulk-convert-images-to-webp`  
**路径**：`/tools/bulk-convert-images-to-webp`  
**主方向**：A  
**YMYL**：否  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。

---

## 使用场景（§3.3 H）

| 使用场景 | 用户搜法 | 作业类型 | 本页默认 / 芯片 |
|---|---|---|---|
| 站点资源要有损+透明 | bulk convert images to webp; png to webp | 多图 → WebP ZIP | **默认**：有损 WebP、保 alpha、质量约 0.8 |
| PNG 转 WebP | png to webp | 同意图 | Use case / FAQ |
| 不熟格式只要 JPG | convert to jpg | **另一作业** | 有意不满足；本页不是唯一转换入口 |
| 邮件必须 JPG | convert to jpg email | **另一作业** | FAQ：部分客户端不认 WebP |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：bulk convert images to webp；png to webp；convert to webp；webp converter；images to webp
- 用户真实任务：一次把很多张图变成 WebP，体积更小且可保留透明，下载 ZIP。
- [x] 竞品常见：万能转换器下拉 WebP；少写客户端不认。
- [x] 缺口：① 有损+透明与 JPG/PNG 差异；② 邮件/CMS 不认；③ 相对 PNG 体积差；④ 失败是否改成 JPEG 偷换。
- [x] 本页增益：固定 WebP 输出；不支持则失败该行不偷换；FAQ 不认场景；体积列。
- [x] 长尾：png to webp 并进。不做格式切换器。
- [x] 权威来源 URL：https://developers.google.com/speed/webp ；https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob
- [x] Use case：站点 hero/缩略图；要透明的 WebP 贴纸。
- [x] 边界：浏览器不能 encode WebP 则整行失败；动画取首帧。
- [x] Example：PNG 透明样例 → WebP ZIP。
- [x] Related：`image-format-converter`、`image-compress`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 有损质量 + 可保 alpha；`toBlob('image/webp')` |
| 2 | 边界/失败 | 不支持 WebP 则 skip；不回退 JPEG；上限 20 |
| 3 | 场景语境 | 站点资源 |
| 4 | 对照表 | vs JPG 垫底、vs PNG 无损（FAQ） |
| 5 | 权威引用 | Google WebP |
| 6 | 本地隐私 | 设备内、不上服务器 |
| 7 | 多语言 | 03 |
| 8 | 数值示例 | 质量 0.8、两张样例 |
| 9 | 主题内链 | image-format-converter、image-compress |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | images / P0 转换 WebP 行 |
| 场景与行业 | 批量转成 WebP 站点资源 |
| 技术 | Canvas WebP toBlob；fflate；Tier 0；`localProcessing: true` |
| Catalog `page.style` | **opts** |
| Title (en) | **Bulk convert images to WebP** |
| Description 要点 | Add many images, convert them to lossy WebP in this tab, keep transparency when present, skip files that fail, download a ZIP. Some mail apps and CMS do not accept WebP—use JPG for those. Files stay on the device; they are not uploaded to a server. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | png 怎么转 webp？透明还在吗？邮箱能用吗？会上传吗？浏览器不支持怎么办？ |
| Disclaimer / References | 非 YMYL；Google WebP |
| related | `image-format-converter`, `image-compress` |
| 验收 | `coverage:gate` 0b→2→4；`verify:tool` |
| 工期粗估 | 本 slug 一完整实现会话 |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-03 |
| slug 结论 | 保留 `bulk-convert-images-to-webp`（输出 WebP 场景句；不当唯一转换 URL） |
| 主检索词 → title/H1 | 英文 H1 原句 **Bulk convert images to WebP**；zh 用「批量转换成 WebP」当地句，不把 bulk 硬塞进中文 H1 |
| 次要关键词 → desc / FAQ / Use cases | png to webp → FAQ / Use case；convert to webp → desc；webp converter → desc；images to webp → How |
| 用户搜索习惯判断 | 少数用户会先搜 webp；多数要 JPG 的人不应进本页当默认转换器 |
| 优化摘要 | 相对万能 converter：固定 WebP、无格式芯片；FAQ 写清不认 WebP 的场景；不偷换成 JPEG |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=bulk-convert-images-to-webp --phase=0b`

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
| 总判 | 满足：进页样例即转成 WebP 并给出 ZIP；有损质量+可透明；不把 JPG/PNG 输出抢首屏 |
| 主词搜索者任务 | 一次把很多张图变成 WebP 带走，透明尽量在 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | How 先写选图、调质量、转全部、下 ZIP；不支持则失败行 |
| 超出 / 应划边界 | 无格式下拉；desc 不自称「唯一转换工具」；邮件场景 FAQ 划走 JPG 页 |
| 缺口与已做优化 | FAQ 补客户端不认与 png to webp；质量默认 0.8 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：`input multiple`；上限 **20**。共享：质量（默认 0.8）。无输出格式切换。
- 输出：汇总表；成功 **ZIP** `.webp`。
- 核心规则：串行解码 → WebP toBlob（不铺 JPEG 垫底）。`toBlob` 非 webp 则该行失败。GIF 首帧。ZIP 重名 `stem (2).webp`。
- 失败：skip；0 成功禁用 ZIP。
- 示例：透明 PNG 样例 → WebP，alpha 仍在。
- **进页样例**：`loadSample()` 两张图入队并转换。
- **实现防呆**：`opts`；`\\w`；`lint:tool-page -- --slug=bulk-convert-images-to-webp`

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
