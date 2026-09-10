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

## 待办 — CTR 收割（P0，本周）

改前确认线上已部署；改后 `lint:seo` + `build:site`；IndexNow **只提交改过的 URL**。

### 工具页 title / description

- [ ] `es` `how-to-calculate-aspect-ratio`：抽查 Google 真实 snippet；必要时 title 前半加 16:9 或 1920×1080
- [ ] `zh` `how-to-calculate-percentage-change`：title 纳入「计算器」（对照 de 已出点击）
- [ ] `zh` `how-to-calculate-payback-period`：去重 description 里重复的免责套话；保持「回收期计算器」前置
- [ ] `zh` `how-to-calculate-debt-payoff`：同上，去重免责
- [ ] `zh` `how-to-calculate-concrete`：核对 snippet 是否像计算器；不吸收俄语楼板配筋词
- [ ] `id` + `ru` `linkedin-banner-size`：title 补 1584×396（查询 ukuran banner linkedin 已字面命中 H1）
- [ ] `en` `find-and-validate-xml-sitemap`：title 纳入 XML sitemap **checker**（查询排名 1、0 点击；校验 ≠ 生成）
- [ ] `ja` `square-feet`：title 去掉 `⇔`
- [ ] 扫描其他已进前十的 `zh` `how-to-calculate-*` description，去掉同一句免责粘贴两次（acceleration / present-value / IRR 等同源句式）

### 停改 H1、改抽 SERP

- [ ] 人工打开 Google：`限界収入 求め方` — 记录本站 snippet 是否被改写、是否不像计算器。**禁止**再改 ja MR 的 H1
- [ ] 人工打开：`sitemap xml checker`、`ukuran banner linkedin`、中文「混凝土计算器 / 回收期」— 对照改前基线，改后 14 天再比 CTR

### Devlogs（People，可索引）

- [ ] `2026-08-21-23-47-cursor-socks-proxy-settings-json`：HTML title 前置 `cursor.general.disableHttp2` / `http.proxy` / settings.json
- [ ] `2026-08-06-21-21-cursor-ssh-socks-proxy-setup`：同上簇对齐
- [ ] 重建 `build:logs`（或 `build:site`）后 IndexNow 这两条 URL
- [ ] **不要**把这两篇改成 `Visibility: project`

---

## 待办 — 深排名换杠杆（P1，可排在收割之后）

- [ ] `de` `ip-address`：FAQ + Example 补 IPv6（查询 `meine ipv6 adresse`）与 VPN 退出 IP；**不改 H1**
- [ ] `pt` `how-to-calculate-mean`：若下轮仍 ≤20 且 0 点击，再拧 title（média / calculadora）
- [ ] `es` `square-feet`：仅当 28 天窗口排名稳 ≤20 且 CTR=0 时再改 title 前 30 字（08-12 门延期）
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
- [ ] zh 前十计算器是否出现第一次点击
- [ ] id/ru LinkedIn 补像素后 CTR
- [ ] ja MR：仅在 snippet 抽查后决定是否动 FAQ，不把「再改 title」当观察项
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
