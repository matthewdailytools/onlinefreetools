# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`unix-timestamp`  
**路径**：`/tools/unix-timestamp`  
**主方向**：A（A.8 · Tier 0 Date/Intl）  
**YMYL**：否  
**Locale briefs**：见 `03-locale-briefs.md`（`briefs-ready`）

---

## IG 预审

- 目标主词：unix timestamp converter；epoch converter；timestamp to date；date to unix timestamp；milliseconds timestamp
- 用户真实任务：日志/API 里的数字时间戳转成可读日期，或反向；区分**秒 vs 毫秒**；看 **UTC 与本地**。
- [x] 竞品：双向转换、Now 按钮、秒/毫秒切换、时区显示
- [x] 缺口：秒/毫秒自动识别规则；UTC vs local 对照；无效时间戳；2038/范围；与 JWT claims 链接
- [x] 增益：Rules 对照；自动检测秒/毫秒；UTC+local 并排；Example `1516239022`；Related
- [x] 长尾：合并本页
- [x] 权威：MDN Date；POSIX time
- [x] Related：`timezone-converter`, `jwt-decoder`

**硬性勾选**：① ② ③ ④ ⑥ ⑦ ⑧ ⑨（+⑤）

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C05 · A.8 · P1（序号 23） |
| 技术 | 原生 `Date`；`Intl.DateTimeFormat`；秒/毫秒模式；**不上传** |
| Title (en) | `Unix Timestamp Converter — Epoch ↔ Readable Time \| {Brand}` |
| Description 要点 | ≥120；粘贴 timestamp 或日期→得 UTC+本地；秒/毫秒说明 |
| FAQ | 秒还是毫秒；UTC 与本地；Now 按钮；范围限制 |
| related | `timezone-converter`, `jwt-decoder` |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-08 |
| slug 结论 | 保留 `unix-timestamp` |
| 主检索词 → title/H1 | unix timestamp converter / Unix 时间戳转换 → H1「Unix Timestamp Converter — Epoch ↔ Readable Time」 |
| 次要关键词 → desc / FAQ / Use cases | epoch→desc；milliseconds→Rules |
| 用户搜索习惯判断 | 用户要「timestamp 转日期」互转结果；H1 不写「Seconds, ms, UTC & Local」参数目录 |
| 优化摘要 | 2026-08-08：H1 由秒/毫秒/UTC 枚举改为「Epoch ↔ Readable Time」；slug 保留 unix-timestamp |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## 交互规格

- Tab **Timestamp → Date** | **Date → Timestamp**；单位 秒/毫秒（自动检测可选）；Now；Convert / Copy / Clear / Load sample
- 进页 loadSample：`1516239022`（秒）→ **自动 Convert** → UTC `2018-01-18T01:30:22.000Z` + 本地等价
- Date→Timestamp：datetime-local 输入 → 秒/毫秒输出

## 页面模块清单

- [x] H1 + 摘要
- [x] 首屏（进页自动样例）
- [x] How it works
- [x] Rules
- [x] Example（1516239022）
- [x] Use cases ×3
- [x] FAQ ≥3
- [x] Related ≥2
- [x] References
- [x] Disclaimer
- [x] `03` 已填
- [x] README/catalog 实现时
- [x] 不拆 epoch-converter 薄页
