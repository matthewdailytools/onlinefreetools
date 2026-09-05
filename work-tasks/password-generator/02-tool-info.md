# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`password-generator`  
**路径**：`/tools/password-generator`  
**主方向**：A（A.6 · Tier 0 CSPRNG）  
**YMYL**：否（须**轻量安全 Disclaimer**：非密码管理器、非强度保证、用户自行负责）  
**Locale briefs**：见 `03-locale-briefs.md`（`briefs-ready`）

---

## IG 预审

- 目标主词：password generator；random password；strong password generator；secure password online
- 用户真实任务：按长度与字符集生成随机密码，复制用于注册/轮换；需要诚实了解**浏览器生成≠绝对安全**。
- [x] 竞品：长度滑条、字符集勾选、Generate、Copy、强度条
- [x] 缺口：CSPRNG vs 伪随机；字符集冲突（全选符号但排除 ambiguous）；**不存储**说明；非破解工具边界；强度条误导
- [x] 增益：Disclaimer；Rules 字符集；可选排除 ambiguous `0OIl1`；Example；Use cases
- [x] 长尾：合并本页
- [x] 权威：MDN `getRandomValues`
- [x] Related：`uuid-generator`, `file-hash`

**硬性勾选**：① ② ③ ④ ⑥ ⑦ ⑧ ⑨（+⑤ + Disclaimer）

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C05 · A.6 · P2（序号 22） |
| 技术 | `crypto.getRandomValues`；长度 8–128；charset 勾选；排除 ambiguous 可选；**不上传、不存储** |
| Title (en) | `Random Password Generator — Create Passwords Locally \| {Brand}` |
| Description 要点 | ≥120；设长度与字符集→生成→复制 + **非密码管理器**免责 |
| FAQ | 是否存储；强度如何保证（诚实：随机性来源）；能否破解他人密码（否，本工具只生成） |
| Disclaimer | **可见**：演示/便利用途；重要账号请用密码管理器；本页不联网存储 |
| related | `uuid-generator`, `file-hash` |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-08 |
| slug 结论 | 保留 `password-generator` |
| 主检索词 → title/H1 | password generator / 随机密码生成 → H1「Random Password Generator — Create Passwords Locally」 |
| 次要关键词 → desc / FAQ / Use cases | strong password→desc；secure→FAQ 诚实说明 |
| 用户搜索习惯判断 | 用户要「生成密码」结果向 H1；不写「Charset Options、Length 滑条」目录腔 |
| 优化摘要 | 2026-08-08：H1 由「Charset Options, Local」改为「Create Passwords Locally」；slug 保留 password-generator |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## 交互规格

- 长度；勾选 uppercase/lowercase/digits/symbols；排除 ambiguous；Generate / Copy / Clear / Load sample
- Load sample：长度 16、全字符集开、**自动 Generate** 一次（Example 写死格式说明，不泄露固定密码到 SEO 若需可写「示例长度与字符类」）
- Example：描述 16 位含大小写数字符号的一类结果格式（或固定 demo 密码 `Xk9#mP2$vL4@nQ8!` 仅用于 Example 区块）
- 强度：可选信息性提示（长度/字符类），**禁止**承诺「不可破解」

## 页面模块清单

- [x] H1 + 摘要
- [x] 首屏（进页自动样例）
- [x] How it works
- [x] Rules
- [x] Example
- [x] Use cases ×3
- [x] FAQ ≥3
- [x] Related ≥2
- [x] References
- [x] Disclaimer（轻量安全）
- [x] `03` 已填
- [x] README/catalog 实现时
- [x] 不拆 strong-password 薄页

## 复审修正（2026-09-05）

- `onePassword()` 改用拒绝采样：直接 `byte % poolLen` 在池长不整除 256 时让前若干字符概率偏高；现在丢弃越界字节重取。
- `rules_item_2` 十语补充等概率这一可验证增量。
