# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`file-hash`  
**路径**：`/tools/file-hash`  
**主方向**：A（A.6 · Web Crypto + lazy crypto-js MD5）  
**YMYL**：否  
**Locale briefs**：见 `03-locale-briefs.md`（`briefs-ready`）

> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. file hash calculator / 文件哈希  
  2. md5 hash file / text md5  
  3. sha256 hash file / sha256 generator  
  4. checksum calculator / file checksum online  
  5. sha512 hash text（边界 → FAQ）
- 用户真实任务：对安装包/配置/日志**文件**或粘贴**文本**算 MD5/SHA 十六进制摘要，用于发布校验、对比是否被改动。
- [x] 竞品 SERP 前 5–10 都提供了什么？  
  上传或粘贴、算法下拉、hex 输出、Copy；部分支持 drag-drop；多数喊本地/隐私。
- [x] 它们没讲清什么？（≥3 条缺口）  
  1. **MD5 vs SHA 选型**：何时仍用 MD5（legacy checksum）vs 应用 SHA-256  
  2. **大文件**：是否分块、进度、内存上限——SERP 很少说明  
  3. **文本 vs 文件**：UTF-8 文本字节 vs 原始文件字节差异  
  4. **Web Crypto 与 MD5**：浏览器原生无 MD5，须 lazy 库——诚实说明 CDN  
  5. **输出格式**：hex 大小写、是否带 `0x`  
  6. **多语言正文**缺口（§3.1 ⑦）
- [x] 我们补哪 ≥3 条增益？  
  - **①** Rules：算法对照 + 文本/文件读取步骤  
  - **②** 边界：空输入、超大文件、MD5 库加载失败  
  - **③** Use cases：发布包 checksum、配置 diff 前指纹、日志抽样  
  - **④** 对照表：MD5/SHA-1/256/512 长度与用途  
  - **⑤** References：Web Crypto、RFC 6234、MD5 遗留说明  
  - **⑥** 本地隐私 + CDN FAQ（crypto-js）  
  - **⑦** 十语 brief  
  - **⑧** Example：固定短文本 + 已知 SHA-256  
  - **⑨** Related：`base64`, `text-diff`
- [x] 长尾：**合并本页**（算法 Tab/下拉 + FAQ）；不拆 md5/sha256 薄页
- [x] 权威来源：  
  - https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest  
  - https://www.rfc-editor.org/rfc/rfc6234
- [x] Use cases：发布校验；API 响应 body 指纹；与旧文档 MD5 对照
- [x] 边界：空文件；>100MB 警告；MD5 lazy fail；hex 大小写一致
- [x] Example/FAQ：固定样例 `hello` 的 SHA-256；FAQ 算法选择、隐私、大文件
- [x] Related：`base64`, `text-diff`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | digest 步骤 + 算法表 |
| 2 | 边界/失败 | 大文件、空输入、库加载 |
| 3 | 场景语境 | Use cases ×3 |
| 4 | 对照表 | MD5/SHA 长度用途 |
| 5 | 权威引用 | MDN Web Crypto |
| 6 | 本地隐私 | 不上传 + CDN FAQ |
| 7 | 多语言 | `03` |
| 8 | 数值示例 | hello → 已知 hash |
| 9 | 主题内链 | related ≥2 |

**硬性勾选**：① ② ③ ④ ⑥ ⑦ ⑧ ⑨（+⑤）

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C05 · A.6 · P1（序号 19） |
| 场景与行业 | 开发者 / 发布 / 运维：checksum 与完整性 |
| 技术 | SHA-*：`crypto.subtle.digest`；MD5：lazy `crypto-js`；文本 UTF-8 或文件 `ArrayBuffer` 分块；**不上传** |
| Title (en) | `File Hash Checker — Verify Digests in Your Browser \| {Brand}` |
| Description 要点 | ≥120；步骤（选算法→粘贴或选文件→得 hex）+ MD5/SHA 对照 + 发布校验示例 |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点 | MD5 是否安全；大文件如何处理；文本与文件差别；是否上传；hex 格式 |
| Disclaimer / References | 非 YMYL；MD5 遗留用途说明 |
| related | `base64`, `text-diff` |
| 验收 | loadSample 自动算 hash；大文件进度；lint:seo |
| 工期粗估 | ~0.5–1d |
| 本地化核查 | `03` |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-08 |
| slug 结论 | 保留 `file-hash`（覆盖 file hash + text hash；非单一 md5 薄页） |
| 主检索词 → title/H1 | file hash / 文件哈希 → H1「File Hash Checker — Verify Digests in Your Browser」 |
| 次要关键词 → desc / FAQ / Use cases | md5 file→desc/FAQ；sha256 generator→desc；checksum→Use cases |
| 用户搜索习惯判断 | 用户搜「verify hash」「file checksum」要结果向 H1；不枚举「MD5、SHA-256、SHA-512 下拉」目录腔 |
| 优化摘要 | 2026-08-08：H1 由「MD5, SHA-256 & More」参数枚举改为「Verify Digests in Your Browser」；slug 保留 file-hash |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## 交互规格

- 输入：Tab **Text** | **File**；算法 MD5 / SHA-1 / SHA-256 / SHA-512；文本 textarea 或 file input；Hash / Copy / Clear / Load sample
- 输出：小写 hex（或可选 uppercase，Rules 写死一种）；文件显示字节数；大文件进度条
- 算法：SHA → `subtle.digest`；MD5 → lazy import crypto-js；文本 → `TextEncoder`
- 边界：空输入提示；文件 >100MB 警告仍尝试分块
- 示例：Text `hello` → SHA-256 `2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b0184`
- **进页样例**：`loadSample()` 填入 `hello`、选 SHA-256、**自动 Hash**；与 Example 一致

## 页面模块清单

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] How it works
- [x] Formula / Rules
- [x] Example（hello + SHA-256）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1
- [x] Disclaimer — 非 YMYL
- [x] `03-locale-briefs.md` 已填
- [x] README / catalog（实现时）
- [x] 不拆 md5/sha256 薄页 slug
