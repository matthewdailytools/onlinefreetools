# SEO Todo（2026-09-10）

> 复盘：[`01-analysis-review.md`](./01-analysis-review.md)  
> 策略：[`02-next-strategy.md`](./02-next-strategy.md)  
> 上轮未闭环：[`../2026-08-12/03-todo.md`](../2026-08-12/03-todo.md)（28 天导出仍欠；Coverage/软 404 等索引项本夹无法关闭）

---

## 已完成

- [x] 导入 GSC 效果 CSV 至 `docs/seo/reviews/2026-09-10/`（Performance，过去 7 天）
- [x] 撰写分析复盘 / 策略 / todo 三文档
- [x] 与 08-08 / 08-12 效果基线对照（注明 7 日 vs 24h/4 日不可直接同比点击）
- [x] 核对 P0 页现行 title（i18n 分片）与查询字面差
- [x] 漏斗结论回写 [`../../keyword-to-tool-tracker.md`](../../keyword-to-tool-tracker.md) 决策日志

---

## 待办 — 过门禁才改文案（P0）

改 title 须同时：排名 ≤15、现行 title **缺**查询扫描词、该 URL 尚未做过前置该主词。改后 `lint:seo` + `build:site`；IndexNow **只提交改过的 URL**。

### 允许改 title（缺词，一轮）

- [ ] `en` `find-and-validate-xml-sitemap`：title 纳入 XML sitemap **checker**
- [ ] `zh` `how-to-calculate-percentage-change`：title 纳入「计算器」（仅此一轮）
- [ ] `ja` `square-feet`：去掉 title 里的 `⇔`（修显示，不堆词）

### 允许改 description（质量债，不是再前置主词）

- [ ] `zh` `how-to-calculate-payback-period`：去重重复免责
- [ ] `zh` `how-to-calculate-debt-payoff`：同上
- [ ] 扫描其他已进前十的 `zh` `how-to-calculate-*` description，去掉同一句免责粘贴两次

### 禁止再改 H1（与 08 月失败同类）

- [ ] **不要**改 `es` `how-to-calculate-aspect-ratio` title（已含 relación de aspecto）
- [ ] **不要**改 `zh` `how-to-calculate-concrete` H1（已含混凝土计算器）
- [ ] **不要**改 `id`/`ru` `linkedin-banner-size` title（H1 已是查询原句）
- [ ] **不要**改 `ja` `how-to-calculate-marginal-revenue` H1

### 只抽 SERP，不改字

- [ ] 人工打开：`限界収入 求め方`、西语 relación de aspecto、中文混凝土计算器、`ukuran banner linkedin` — 记录 snippet 是否被改写、是否不像工具。**不**用抽查结果当再改 title 的许可，除非发现 title 被 Google 整段换成无关文案

### Devlogs（People，可索引；title 缺查询键 = 过门禁）

- [ ] `2026-08-21-23-47-cursor-socks-proxy-settings-json`：HTML title 前置 `cursor.general.disableHttp2` / `http.proxy` / settings.json
- [ ] `2026-08-06-21-21-cursor-ssh-socks-proxy-setup`：同上簇对齐
- [ ] 重建 `build:logs`（或 `build:site`）后 IndexNow 这两条 URL
- [ ] **不要**把这两篇改成 `Visibility: project`

---

## 待办 — 深排名换杠杆（P1，可排在收割之后）

- [ ] `de` `ip-address`：FAQ + Example 补 IPv6（查询 `meine ipv6 adresse`）与 VPN 退出 IP；**不改 H1**
- [ ] `pt` `how-to-calculate-mean`：只观察。title 已含 calculadora/média 则 **不**再拧 title
- [ ] `es` `square-feet`：**取消**「≤20 再改 title」。已含 calculadora，继续观察
- [ ] `compare-two-text-files-online`：近义查询进 FAQ；禁止新 URL

---

## 待办 — 数据与索引（P0 节奏，但不阻塞 CTR 改文案）

- [ ] **重新导出效果：过去 28 天**（覆盖本轮 title 改动后至少 14 天更好）
- [ ] **同时导出 Coverage**；若有「已抓取未索引」drilldown 一并放入新日期夹
- [ ] 08-12 仍开放：软 404 / 4xx / 规范冲突具体 URL（本夹无 Coverage，无法关闭）
- [ ] 信息页尾斜杠 301（08-12 待办，本轮无新证据）

---

## 待办 — 观察（P1，建议 2–4 周 + 28 天窗口）

- [ ] 剔 devlogs 后的工具页 CTR 是否 ≥1%
- [ ] zh 前十计算器是否出现第一次点击（title 已含「计算器」的页不作为再改 H1 的候选）
- [ ] id/ru LinkedIn、es 宽高比：0 点击则观察，**不**补像素/不拧 title
- [ ] sitemap checker / zh 百分比变化：若已改 title，看 14 天 CTR；仍 0 则停用「缺词补词」
- [ ] ja MR：snippet 抽查后只允许 FAQ，禁止再改 title
- [ ] de IP：看 IPv6 子查询排名，不看是否进前 20
- [ ] 关键词漏斗：本 GSC 批 **0** 条新 `build`；楼板配筋 **drop/defer**

---

## 待办 — backlog（P2）

- [ ] fr/es ROI、es CAGR：locale brief 第二轮（Example/FAQ），排在 P0 收割之后
- [ ] ar 展示仍薄：无稳定数据前不全量 IndexNow
- [ ] 下轮三文档必须带 28 天 + Coverage，避免第三次用短窗口决策

---

## 负责人 / 日期

| 项 | 目标日 |
|---|---|
| P0 工具 title/description + 两篇 Cursor 日志 + build:site + 增量 IndexNow | 2026-09-10～14 |
| ja MR / sitemap / LinkedIn / 中文计算器 SERP 抽查记录 | 改文案当天 |
| de IP IPv6 FAQ | 2026-09-14～21 |
| 重新导出 28 天效果 + Coverage + 下一轮三文档 | 2026-09-24～10-08 |
