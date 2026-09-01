# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`ios-app-icon-size`  
**路径**：`/tools/ios-app-icon-size`  
**主方向**：B  
**YMYL**：否  

---

## 使用场景

| 场景（情境+动作+结果） | 进页默认 | 说明 |
|---|---|---|
| 把 Logo 导出为 **iOS app icon size** 1024×1024（App Store） | **是** | H1 场景；不透明 PNG |
| iPhone 主屏 60pt@3x = 180×180 | 芯片 | 同页 absorb |
| iPad Pro 83.5pt@2x = 167×167 | 芯片 | 同页 absorb |
| Google Play 高清图标 512×512 | 芯片 | 勿先拆独立 URL |
| Settings / Spotlight / Notification 小尺寸 | ZIP 内 | 不占 H1 |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：iOS app icon size；1024×1024 App Store icon；iPhone app icon 180；iPad app icon 167；Play icon 512（芯片）
- 用户真实任务：得到可提交的 1024×1024 不透明 iOS 应用图标，可选一套倍率 ZIP。
- [x] 竞品：Apple HIG 文档、AppIcon 生成器站、Play 素材包站。
- [x] 缺口：H1 不是「icon generator pack」；默认就是 1024 App Store 档；写明禁止透明通道；Play 只作芯片。
- [x] 增益：Rules 1024 不透明；边界相对网站 apple-touch-icon；Use cases 提交 Connect / 主屏预览 / Play 512；对照 1024 vs 180 vs 167 vs 512；References Apple HIG；本地隐私；十语；Example 1024；Related 截图页。
- [x] 长尾：Play / iPad 并入芯片，不拆 `google-play-asset-pack`。
- [x] 权威：https://developer.apple.com/design/human-interface-guidelines/app-icons ；https://developer.apple.com/help/app-store-connect/reference/app-information/
- [x] Use cases：提交 App Store 1024；Xcode 主屏 180；Play 512 芯片。
- [x] 边界：不做 Adaptive Icon XML、不做圆角蒙版（系统会套）、不做整包 Assets.xcassets 工程。
- [x] Example：样例 Logo → 1024×1024 不透明 PNG。
- [x] Related：`iphone-app-store-screenshot`、`apple-touch-icon`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 默认 1024 不透明 PNG；contain 居中；无 alpha |
| 2 | 边界/失败 | 非网站 apple-touch；非 Play Adaptive；空图 |
| 3 | 场景语境 | App Store Connect 提交 |
| 4 | 对照表 | 1024 vs 180 vs 167 vs 512 |
| 5 | 权威引用 | Apple HIG App Icons |
| 6 | 本地隐私 | 留在设备、不上服务器 |
| 7 | 多语言 | 03 十语 |
| 8 | 数值示例 | 1024×1024 样例 |
| 9 | 主题内链 | 截图页、apple-touch-icon |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 清单 §0 P1；images；B6 |
| 场景与行业 | iOS 应用商店图标 |
| 技术 | Canvas → PNG；可选 ZIP；localProcessing true |
| Catalog `page.style` | opts |
| Title (en) / H1 | **iOS app icon size**（禁止 App icon generator pack） |
| Description 要点 | Export 1024×1024 opaque PNG for the App Store; optional 180 / 167 / Play 512 ZIP. Stays on device, not uploaded. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点 | 上传？为何必须 1024？透明？圆角？Play 512？ |
| Disclaimer / References | Apple HIG App Icons |
| related | iphone-app-store-screenshot, apple-touch-icon |
| 验收 | coverage 0b；verify:tool |
| 工期粗估 | 1 会话 |
| 本地化核查 | 03 |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-01 |
| slug 结论 | 保留 `ios-app-icon-size`（场景句 = 用户搜的任务） |
| 主检索词 → title/H1 | 原句 **iOS app icon size** |
| 次要关键词 → desc / FAQ / Use cases | 1024×1024 App Store → desc + Rules；iPhone 180 → 芯片 + usecase；iPad 167 → 芯片；Play 512 → FAQ + 芯片；generator pack → FAQ 不进攻 |
| 用户搜索习惯判断 | 搜 iOS app icon size / 1024 icon；H1 不用 generator；尺寸数字进 desc |
| 优化摘要 | 2026-09-01：H1 锁定 iOS app icon size；默认 1024；Play 不拆 URL |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 不适用（本 slug 无 Planner / Ads 长尾分析）
- [ ] 已引用分析路径：

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| — | — | — | — | 无 Planner 批 |

- [x] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-01 |
| 总判 | 满足：首屏默认 1024×1024 iOS app icon；Play/iPad 不抢 H1 |
| 主词搜索者任务 | 得到符合 iOS app icon size 的 1024 不透明 PNG |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | loadSample 自动出 1024 PNG；ZIP 含倍率与 Play 512 |
| 超出 / 应划边界 | 不做 xcassets 工程、不做 Adaptive Icon、不套圆角 |
| 缺口与已做优化 | How 先写「导出 App Store 1024 图标」，再写芯片 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：一张 Logo；默认档 1024；芯片 180 / 167 / 512
- 输出：不透明 PNG 预览+下载；ZIP 含 1024、180、167、152、120、87、80、58、40、Play 512
- 核心规则：contain 居中到正方形，底色不透明（默认白）；不画圆角；App Store 档无透明
- 失败：未选图、解码失败
- 示例：样例 Logo → 1024×1024
- **进页样例**：合成 Logo 色块 → 1024 PNG；`loadSample()` 自动跑
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
