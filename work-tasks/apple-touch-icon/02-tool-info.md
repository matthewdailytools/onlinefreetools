# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`apple-touch-icon`  
**路径**：`/tools/apple-touch-icon`  
**主方向**：A  
**YMYL**：否  

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：Apple-touch-icon 180×180；apple-touch-icon；favicon（芯片，H1 不用 generator）；PWA 192/512；precomposed FAQ
- 用户真实任务：把 logo 导出为 180×180 apple-touch-icon PNG，可选 favicon/PWA 尺寸。
- [x] 竞品：Apple 文档、favicon 生成器头词站。
- [x] 缺口：H1 不进攻 generator；默认不透明 180；旧尺寸折叠。
- [x] 增益：Rules 180 不透明；边界非 RealFaviconGenerator；Use cases 加到主屏；对照 favicon 32；References Apple；本地隐私；十语；Example 180×180；Related image-compress。
- [x] 长尾：favicon/PWA 并入芯片，不拆 generator URL。
- [x] 权威：https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html ；https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link
- [x] Use cases：网页加到主屏、PWA 图标包、补 favicon 32。
- [x] 边界：不承诺整包 favicon 生成器；旧 iPad 167/152 可选。
- [x] Example：样例 logo → 180×180 不透明 PNG。
- [x] Related：`image-compress`、`image-crop`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 180 不透明 PNG；contain 居中 |
| 2 | 边界/失败 | 非 favicon generator 头词；空图 |
| 3 | 场景语境 | 加到主屏 |
| 4 | 对照表 | 180 vs 32 vs 192/512 |
| 5 | 权威引用 | Apple Safari web content；MDN link |
| 6 | 本地隐私 | 留在设备、不上服务器 |
| 7 | 多语言 | 03 十语 |
| 8 | 数值示例 | 180×180 样例 |
| 9 | 主题内链 | image-compress、image-crop |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 清单 §0 P0；images |
| 场景与行业 | 网页 apple-touch-icon |
| 技术 | Canvas → PNG；可选 ZIP 多尺寸；localProcessing true |
| Catalog `page.style` | opts |
| Title (en) / H1 | **Apple-touch-icon 180×180**（禁止 Favicon generator） |
| Description 要点 | Export 180×180 opaque PNG; optional 32 / 192 / 512 ZIP. Stays on device, not uploaded. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点 | 上传？为何不是 generator？透明？precomposed？PWA？ |
| Disclaimer / References | Apple Safari web content |
| related | image-compress, image-crop |
| 验收 | coverage 0b；verify:tool |
| 工期粗估 | 1 会话 |
| 本地化核查 | 03 |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-01 |
| slug 结论 | 保留 `apple-touch-icon` |
| 主检索词 → title/H1 | 原句 **Apple-touch-icon 180×180** |
| 次要关键词 → desc / FAQ / Use cases | apple-touch-icon → 同 H1；generator → FAQ 不进攻；favicon 32 / PWA → 芯片；precomposed → FAQ |
| 用户搜索习惯判断 | 搜 apple-touch-icon 尺寸；勿用 generator 当 H1 |
| 优化摘要 | 2026-09-01：H1 锁定 Apple-touch-icon 180×180；generator 不进 H1 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [ ] 不适用
- [x] 已引用分析路径：`docs/seo/keywords/p0-scene/2026-08-31-p0-scene-longtail-selection.md`

| 长尾词（Planner） | 归属 | 文案落点 | 功能覆盖 | 不覆盖理由（若有） |
|---|---|---|---|---|
| apple-touch-icon 180×180 | build 主词 | H1 | 默认 180 PNG | |
| apple-touch-icon | absorb | desc | 同一导出 | |
| apple-touch-icon generator | drop 作 H1 | FAQ | 同交互 | generator SERP 为 head |
| favicon generator | drop 作 H1 | 芯片 32 | 可选 32 PNG | 不进攻头词 |
| precomposed | absorb | FAQ | 不透明默认 | |
| 167 / 152 / 120 | absorb | 可选 ZIP | 折叠 | 不默认 |

- [x] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-01 |
| 总判 | 满足：首屏出 180×180；generator 不抢 H1 |
| 主词搜索者任务 | 得到 apple-touch-icon 180 图 |
| Ads/Planner 长尾任务 | 180 能导出；favicon/PWA 芯片 |
| 满足之处 | loadSample 自动出 180 PNG |
| 超出 / 应划边界 | 不做 RealFaviconGenerator 整包 |
| 缺口与已做优化 | How 先写「导出 180 图标」 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：一张 logo；默认 180；芯片 32 / 192 / 512
- 输出：不透明 PNG 预览+下载；可选多尺寸 ZIP
- 核心规则：contain 居中到正方形，底色不透明（默认白，可改）
- 失败：未选图、解码失败
- 示例：样例 logo → 180×180
- **进页样例**：合成 logo 色块 → 180 PNG；`loadSample()` 自动跑
- **实现防呆**：opts；B 后 lint:tool-page

## 页面模块清单（与 tool-creation 对齐）

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] How it works
- [x] Formula / Rules
- [x] Example
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1
- [ ] Disclaimer（YMYL 必备）
- [x] `03-locale-briefs.md` 已填（实现十语前）
