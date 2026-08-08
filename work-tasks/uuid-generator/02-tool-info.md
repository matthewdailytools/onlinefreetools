# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`uuid-generator`  
**路径**：`/tools/uuid-generator`  
**主方向**：A（A.6 · UUID v4 + ULID · Tier 0/1）  
**YMYL**：否  
**Locale briefs**：见 `03-locale-briefs.md`（`briefs-ready`）

---

## IG 预审

- 目标主词：uuid generator；uuid v4；ulid generator；generate uuid online；bulk uuid
- 用户真实任务：快速生成一个或多个 UUID v4 或 ULID，复制到代码/数据库/测试数据。
- [x] 竞品：一键生成、Copy、批量数量、v4 为主；部分含 ULID
- [x] 缺口：UUID v4 vs ULID 排序/长度对照；批量上限；CSPRNG 说明；ULID 时间前缀解读；格式（带/不带 hyphen）
- [x] 增益：Rules 对照；批量 Copy All；Example 固定；Use cases；Related
- [x] 长尾：合并本页（类型 Tab UUID|ULID + 数量）
- [x] 权威：RFC 4122；ULID spec https://github.com/ulid/spec
- [x] Related：`password-generator`, `file-hash`

**硬性勾选**：① ② ③ ④ ⑥ ⑦ ⑧ ⑨（+⑤）

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C05 · A.6 · P2（序号 21） |
| 技术 | UUID v4：`crypto.getRandomValues`；ULID：Tier 0 自实现或 tiny lazy；批量 1–100；**不上传** |
| Title (en) | `UUID & ULID Generator — Create IDs in Your Browser \| {Brand}` |
| Description 要点 | ≥120；选 UUID v4 或 ULID→设数量→复制；对照表 |
| FAQ | v4 vs ULID；是否可预测；批量上限；是否上传 |
| related | `password-generator`, `file-hash` |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-08 |
| slug | 保留 `uuid-generator`（覆盖 uuid+ulid；非 ulid-generator 薄页） |
| 主检索词 → title/H1 | uuid generator / UUID 生成 → H1「UUID & ULID Generator — Create IDs in Your Browser」 |
| 次要关键词 → desc / FAQ / Use cases | ulid generator→desc；bulk uuid→FAQ |
| 用户搜索习惯判断 | 用户要「生成 uuid/ulid」场景向 H1；不写「Batch、v4、Crockford」控件目录 |
| 优化摘要 | 2026-08-08：H1 由「Batch IDs Locally」改为「Create IDs in Your Browser」；slug 保留 uuid-generator |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## 交互规格

- 类型 UUID v4 | ULID；数量 1–100；Generate / Copy all / Copy one / Clear
- UUID 格式：小写 hyphenated `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`
- ULID：26 字符 Crockford Base32
- **进页样例**：loadSample → 类型 UUID v4、数量 3、**自动 Generate**，展示 3 条固定种子或首次随机（实现时 Example 写死 3 条样例 UUID 便于对照文档）
- Example 文档写死 3 个 v4 样例（由固定 seed 或展示格式说明）+ 1 ULID 格式样例

## 页面模块清单

- [x] H1 + 摘要
- [x] 首屏（进页自动样例）
- [x] How it works
- [x] Rules（v4 vs ULID 对照）
- [x] Example
- [x] Use cases ×3
- [x] FAQ ≥3
- [x] Related ≥2
- [x] References
- [x] Disclaimer
- [x] `03` 已填
- [x] README/catalog 实现时
- [x] 不拆 uuid-v4 / ulid 薄页
