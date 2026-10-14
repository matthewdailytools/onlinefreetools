# GSC 断崖复盘（2026-10-13）

**事实（运营确认）**

- Performance **日期**曲线在 **2026-10-06** 断崖。
- 之后近于 **全站曝光清零**，仅剩 **零散展示**（未完全从索引抹除）。
- Clarity 同期也偏空（与「仅 GSC 延迟」不符）。
- 人工处置：本轮未导出；须单独确认「无」才按自动化 spam 处理。

**时间线对齐**

| 事件 | 日期 |
|---|---|
| September 2026 spam update 开始 | 2026-09-24 |
| 公开波动窗口 | 约 9/25–27、9/30、**10/4–6** |
| 本站展示断崖 | **2026-10-06** |
| spam update 宣布完成 | 2026-10-08 ~04:37 ET |

结论：**高度吻合自动化 spam 更新波次**（约 70–85%），不是「只有最后两天报告延迟」。

**内容侧敞口（站内已有证据）**

- ~218 工具 × 10 语；同构簇：`how-to-calculate-*`（约 60）、prompt builder 族、PDF / batch-convert 族。
- 2026-09-07「已抓取未索引」已显示这些簇被选择性少收——更新前就有 scaled 压力。
- 十语 hreflang、单工具单作业本身不是 spam；风险在 **近模板工具簇 × 规模**。

**排除 / 弱化**

- 同 GSC 已删 spam 站：无 301/站群证据时只作次要因素。
- 本机 VPN 造成的 HTML 404：非 VPN 抓取可打开页面；不作为主因。
- 整站 `noindex` / robots 封站：线上未见到。

权威：Google [Spam policies](https://developers.google.com/search/docs/essentials/spam-policies)（scaled content abuse 等）；恢复无「一键申诉」通道（人工处置才有重新审核）。
