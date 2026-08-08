# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`timezone-converter`  
**路径**：`/tools/timezone-converter`  
**主方向**：A（A.8 · Intl · Tier 0）  
**YMYL**：否  
**Locale briefs**：见 `03-locale-briefs.md`（`briefs-ready`）

> **边界**：本页 = 单时间点 **Intl 多时区对照**；**非** `meeting-timezone-pack`（团队列表导出 1→N 包另立项）。

---

## IG 预审

- 目标主词：timezone converter；time zone converter；convert time to another timezone；world clock converter
- 用户真实任务：已知某时区的一个时刻，查看纽约/伦敦/东京等对应本地时间；远程会议/运维读日志。
- [x] 竞品：源时区+时间+多目标列表；DST 提示；部分 world clock
- [x] 缺口：IANA 名称 vs 缩写；DST 跳转日；无效本地时间（跳过小时）；与 unix-timestamp 分工；**非**会议导出
- [x] 增益：Rules IANA；多目标对照表；DST FAQ；Example 固定；Related
- [x] 长尾：合并本页（多目标 chips，不拆 city 薄页）
- [x] 权威：IANA tz database；MDN Intl
- [x] Related：`unix-timestamp`, `ip-address`

**硬性勾选**：① ② ③ ④ ⑥ ⑦ ⑧ ⑨（+⑤）

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C05 · A.8 · P1（序号 24） |
| 技术 | `Intl.DateTimeFormat` + `timeZone`；源 datetime-local + IANA 源区；目标区列表（默认 UTC、America/New_York、Europe/London、Asia/Tokyo 等，可增删）；**不上传** |
| Title (en) | `Time Zone Converter — Compare One Moment Worldwide \| {Brand}` |
| Description 要点 | ≥120；选时刻与源区→看多区对照；DST 说明 |
| FAQ | IANA 与缩写；DST；与 unix timestamp 区别；非会议导出包 |
| related | `unix-timestamp`, `ip-address` |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-08 |
| slug 结论 | 保留 `timezone-converter`（非 meeting-timezone-pack） |
| 主检索词 → title/H1 | timezone converter / 时区转换 → H1「Time Zone Converter — Compare One Moment Worldwide」 |
| 次要关键词 → desc / FAQ / Use cases | world clock→Use cases；city time→FAQ 不拆页 |
| 用户搜索习惯判断 | 用户要「同一时刻多地对照」场景向 H1；不写 IANA 城市列表目录腔 |
| 优化摘要 | 2026-08-08：H1 由「Compare Times Across Zones, Local」改为「Compare One Moment Worldwide」；slug 保留 timezone-converter |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## 交互规格

- 源：datetime-local + 源 IANA 时区（searchable select）
- 目标：多选时区列表 → 表格列：时区名 | 本地日期时间 | UTC offset
- Convert / Now / Clear / Load sample
- **进页样例**：loadSample → `2026-06-15T14:30` 源 `America/Los_Angeles` → **自动 Convert** → 展示 NY/London/Tokyo/UTC 行（Example 固定）
- 边界：不存在的时间（DST gap）→ 错误提示

## 页面模块清单

- [x] H1 + 摘要
- [x] 首屏（进页自动样例）
- [x] How it works
- [x] Rules（IANA/DST）
- [x] Example（2026-06-15 样例）
- [x] Use cases ×3
- [x] FAQ ≥3（含非 meeting-pack 边界）
- [x] Related ≥2
- [x] References
- [x] Disclaimer
- [x] `03` 已填
- [x] README/catalog 实现时
- [x] 非 meeting-timezone-pack

## 与相邻工具边界

| 工具 | 本页不做 | 本页可做 |
|---|---|---|
| `unix-timestamp` | 纯 epoch 数字互转 | 命名时区多列对照 |
| `meeting-timezone-pack` | 团队列表导出/分享包 | 即时多区表格 |
| `ip-address` | IP 地理定位 | Related 上下文 |
