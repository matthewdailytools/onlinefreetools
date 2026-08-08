# 02 — 工具信息定稿

**状态**：`ready`  
**slug**：`unlock-pdf`  
**路径**：`/tools/unlock-pdf`  
**主方向**：A（A.5.2 PDF · 本地优先）  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `briefs-ready`）

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. unlock pdf
  2. remove pdf password
  3. decrypt pdf
  4. open password protected pdf
  5. unlock pdf with password local
- 用户真实任务：自己设过密的文件在本地去掉密码以便合并/打印。
- [x] 竞品：iLovePDF 等上传型同类能力；本站强调浏览器本地
- [x] 缺口：不上传边界；加密/损坏失败；与邻近工具分工；固定 Example；有限能力诚实声明
- [x] 增益：Rules；边界 FAQ；Use cases；References；十语；Example；Related
- [x] 长尾：**合并**进本页模块，不拆近义 URL
- [x] 权威来源：https://pdf-lib.js.org/
- [x] Use cases：办公 / 运营 / 学生或站长（见卡片）
- [x] 边界：加密 PDF；损坏；能力局限（见 FAQ）
- [x] Example：与进页样例一致
- [x] Related：`protect-pdf`, `merge-pdf`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules |
| 2 | 边界/失败 | FAQ + UI |
| 3 | 场景语境 | Use cases ×3 |
| 5 | 权威引用 | References |
| 6 | 本地隐私 | How/FAQ（设备 + 不上服务器） |
| 7 | 多语言 | `03` |
| 8 | 数值示例 | Example |
| 9 | 主题内链 | related |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | A.5.2 · P2 · 清单 #60 · `pdf` |
| 场景与行业 | 办公、运营、学生/站长 |
| 技术 | pdf-lib load({ password }) → 无加密再 save；错密明确错误。 |
| Title (en) | `Unlock PDF — Remove Password You Already Know \| {Brand}` |
| Description 要点 | ≥120；主任务 + 设备本地不上服务器 + 样例 + 边界 |
| Schema | WebApplication + BreadcrumbList |
| FAQ ≥3 | 是否破解（否）；是否上传；错密；与 protect 互链 |
| related | `protect-pdf`, `merge-pdf` |
| 验收 | coverage:gate all；lint:seo；进页样例可下载 |
| 工期粗估 | ~0.5–1d |
| 本地化核查 | `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-08 |
| slug 结论 | 保留 `unlock-pdf`（清单与 A.5.2 一致；不拆近义薄页） |
| 主检索词 → title/H1 | unlock pdf / remove pdf password → H1「Unlock PDF — Remove Password You Already Know」 |
| 次要关键词 → desc / FAQ / Use cases | decrypt pdf with password→desc；not cracking→FAQ 红线；protect-pdf→related |
| 用户搜索习惯判断 | 用户搜 unlock pdf；必须在 H1/FAQ 写清「已知密码」，禁破解承诺。 |
| 优化摘要 | 初稿误含 Crack/Brute；改为 You Already Know；非破解红线写进 FAQ。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 验收：`npm run coverage:gate -- --slug=unlock-pdf --phase=0b`

## 交互规格（给实现用）

- 输入：加密 PDF + 已知密码
- 输出：解密 PDF
- 核心规则：pdf-lib load({ password }) → 无加密再 save；错密明确错误。
- 失败：加密/损坏可读错误；能力局限见 FAQ；~25MB 软警告
- 示例：进页生成加密样例（密码固定展示）→ 自动填密解锁 → unlocked.pdf 可下载
- **进页样例**：`loadSample()` — 进页生成加密样例（密码固定展示）→ 自动填密解锁 → unlocked.pdf 可下载

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
- [ ] Disclaimer（非 YMYL）
- [x] `03-locale-briefs.md` 已填
