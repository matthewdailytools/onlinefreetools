# P0 场景句 — 长尾选词（Bing SERP + 用户也搜）

- date: **2026-08-31**
- Bing: `en-US` / `ensearch=1`（CN 主机国际索引）
- 原始批次：[`2026-08-31-p0-scene-seeds-serp.md`](./2026-08-31-p0-scene-seeds-serp.md) · [`2026-08-31-p0-scene-longtail-serp.md`](./2026-08-31-p0-scene-longtail-serp.md) · [`2026-08-31-p0-scene-quoted-serp.md`](./2026-08-31-p0-scene-quoted-serp.md)
- 脚本草稿 `competition_tier`：**默认作废**（见 §0）；本文件为人工复核后的选词权威
- 未建 `work-tasks/`；未当周 `build`

## 0. 采集边界（必读）

CN Bing 国际版对本批 **品牌词打头 / 短动词** 大量实体劫持：Amazon/Apple/iPhone 首页、Minecraft **Create** 模组、俚语 **OG**、农商银行/135 编辑器等。策略 §3.3 D：SERP 严重污染 → **不**把脚本 `long_gap` 当立项。

Bing **Related searches** 本批几乎为空（仅错误意图页解析出 `open ai images` 等，已丢弃）。「用户也搜」来源改为：

1. **有效 Bing 有机标题**里反复出现的任务句（仅下列查询可信）
2. **Google 侧**同意图文章/工具 H1 与导航（ezyZip 站内、Seller 指南、App Store 规格文、favicon 生成器）
3. 产品场景表已有、且与 1–2 同簇的芯片词

**Bing 有机可信（本批）**

| 查询 | 前排类型 | 人工 tier |
|---|---|---|
| `open graph image size` | 尺寸指南站为主，少量生成器 | `mid_covered`（知识页满；交互裁切仍可做 IG） |
| `apple-touch-icon` | Apple 文档 + 教程 | `mid_covered` |
| `apple-touch-icon generator` | 生成器约 10/10 | **`head`** |
| `favicon apple-touch-icon` | favicon.io / RealFaviconGenerator 等 | **`head`** |
| `compress files to zip` | PDF/图压缩工具，**错意图** | 丢弃（不当 ZIP 证据） |
| `zip files online` | 7-Zip / WinRAR **桌面下载**，不是在线打包 | 不代表 Google；Google 侧见 ezyZip |

其余种子（含 `create zip file`、`amazon …`、`iphone screenshot size 6.7`、`og image 1200x630`）= 劫持，**不入竞争判断**。

## 1. 用户也搜（按 P0 slug 聚类；同簇不拆 URL）

### `create-zip-file`

| 用户也搜 / 长尾 | 角色 | 选词动作 |
|---|---|---|
| zip files online | 头词（Google：ezyZip 等在线打包） | **禁止**作唯一 H1 硬刚 |
| create zip file | 场景句；Bing 被 Create 模组劫持 | 可作 H1 候选，须 Google 再验 |
| zip folder online / convert folder to zip | 文件夹→ZIP | 芯片 / 次模式 |
| zip files with password / create encrypted zip | 加密打包 | 芯片；ezyZip 已有专页 → 默认 `mid_covered` |
| unzip / extract zip | 已上线 `unzip-file` | **absorb 已有页**，不进本 P0 |
| gzip file | 单文件 Gzip | 次模式（清单 §0 已写） |

**建议 H1**：`Create zip file` 或更具体的 `Zip folder online`（若 Google title 已被 “Zip Files Online” 占满，走 §3.3 G）。**不要**用 `compress files to zip`（SERP 会进 PDF 压缩）。

漏斗：本周 **不** `build` 进攻 `zip files online`。

### `amazon-main-image-size`

| 用户也搜 / 长尾 | 角色 | 选词动作 |
|---|---|---|
| amazon product image size | 主搜法（指南文密集） | 可作 H1 之一；知识意图 `mid_covered` |
| amazon main image size | 与 slug 对齐的场景句 | **优先 H1**（主图 vs 辅图） |
| amazon main image 2000×2000 / 1600 px | 像素任务句 | **长尾主战场**；title_gap 候选 |
| amazon zoom not working / 1000 px zoom | 错误场景 | FAQ / 校验提示，不拆 URL |
| amazon white background / 85% of frame | 主图规则 | 校验芯片，非独立 slug |
| seller central image requirements | 后台用语 | Use case；Bing 本批污染 |

Google 前排以 **Seller 指南/速查** 为主，少见「上传一张图 → 输出合规主图」的本地工具。交互（最长边、白底、体积）相对文章可写 ≥3 IG → 产品可做；**不是**头词生成器硬刚。

**建议 H1**：`Amazon main image size`；副标题/芯片带 `2000×2000`、`zoom 1000px`。

### `iphone-app-store-screenshot`

| 用户也搜 / 长尾 | 角色 | 选词动作 |
|---|---|---|
| app store screenshot specifications | 官方文档意图 | FAQ + References；H1 勿只写 specifications |
| iphone app store screenshot size | 泛场景 | 可作副标题 |
| **iphone 6.9 screenshot size** | **2026 当期必传档** | **优先长尾 H1** |
| 1320×2868 / 1290×2796 / 1260×2736 | 精确像素 | 默认画布 + 芯片；可进 title |
| 6.5-inch 1284×2778 | 仅当无 6.9 套时的后备 | 芯片，勿当主 H1 |
| **6.7-inch** | 旧档残留搜法 | FAQ「已并入 6.9」；**禁止当 H1** |
| screenshot wrong dimensions | 上传失败 | 错误场景 IG |

Google：规格博客 + 截图设计 SaaS。本站增量是 **精确像素导出 ZIP**，不是再写一篇尺寸表。

**建议 H1**：`iPhone 6.9 screenshot size`（或 `1320×2868 App Store screenshot`）。slug 可保持 `iphone-app-store-screenshot`。

### `apple-touch-icon`

| 用户也搜 / 长尾 | 角色 | 选词动作 |
|---|---|---|
| apple-touch-icon | HTML `rel` 任务句 | **建议 H1**（Bing 文档向，非纯生成器） |
| apple-touch-icon 180×180 | 现行主尺寸 | 默认画布；可进 title |
| apple-touch-icon generator | **生成器头词** | `head` → **不进攻**；同 URL 交互即可 |
| favicon generator / realfavicongenerator | 整包 favicon 头词 | 芯片 absorb，H1 不用 generator |
| apple-touch-icon.png / precomposed | 文件名 / 旧属性 | FAQ |
| 167 / 152 / 120 | 旧 iPad | 可选 ZIP 子集，默认折叠 |

**建议 H1**：`Apple-touch-icon` 或 `Apple-touch-icon 180×180`。禁止 `Favicon generator`。

### `open-graph-image-size`

| 用户也搜 / 长尾 | 角色 | 选词动作 |
|---|---|---|
| open graph image size | **本批 Bing 最干净的种子** | **建议 H1** |
| 1200×630 / 1.91:1 | 事实标准尺寸 | 默认画布；勿单独搜 `og image`（俚语劫持） |
| og:image size / recommended og image size | 标签+尺寸 | 芯片；与已上线 `open-graph-preview` 分工：那边验标签，这边出图 |
| facebook open graph image size | 平台说法 | 芯片（仍是链接卡作业类型） |
| linkedin 1200×627 | 近 1.91:1 | 芯片，不拆 URL |
| og image not showing | 调试 | 内链 preview 页，不改 H1 |

**建议 H1**：`Open Graph image size`。`og image 1200x630` 只作页内用语，不作短查询 H1。

## 2. 选词结论（硬条件自检）

**Title / H1 跟紧长尾（强制）**：`tool_*_title` 与可见 H1 = 下表「选用长尾」**原句**（当地语写该语检索等价句）。动作/隐私/示例进 `description`，**不要**写成 `长尾 — 营销后缀`。

| 产品 slug | 选用长尾（H1 / title 原句） | `competition_tier` | 周 `build` |
|---|---|---|---|
| `create-zip-file` | Create zip file / Zip folder online | `head` 邻接（在线 ZIP） | **否**（defer 进攻） |
| `amazon-main-image-size` | Amazon main image size + 2000×2000 | 知识 `mid_covered`；交互可 `long_gap` | 仅用户点名后；非头词硬刚 |
| `iphone-app-store-screenshot` | **iPhone 6.9 screenshot size** | 规格文/SaaS `mid_covered` | 同上；H1 必须 6.9 而非 6.7 |
| `apple-touch-icon` | apple-touch-icon 180×180 | generator **`head`** | **否**进攻 generator；可 title_gap 收割 |
| `open-graph-image-size` | Open Graph image size | 指南 `mid_covered` | 交互裁切作 IG；不抢「什么是 OG」 |

缺口类未占满 6/10：本批可信 Bing 少，**不以污染 SERP 凑 long_gap**。

## 3. 下一步

1. 立项前对 **选用 H1** 再跑一侧 **Google** 前 10（本仓 Bing 污染时以任务是否一致为准）。
2. 之后 Bing 批次用 `bing_serp` v0.3+ 默认（用户搜法 + 独立 context / 剥 `pq`，策略 §3.3 I），不要再用加引号 / 品牌倒置词表。
3. Keyword Planner 量级只分桶，不排序。
4. 开 `work-tasks/` 须用户点名其中一个 slug。
