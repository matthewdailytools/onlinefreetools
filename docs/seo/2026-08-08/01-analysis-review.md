# GSC 分析复盘（2026-08-08）

**原始数据**：同目录下 GSC CSV  
**效果区间**：2026-08-02～2026-08-05  
**索引快照**：2026-08-05  

---

## 1. 总览

| 指标 | 数值 |
|---|---|
| 展示（4 日合计） | ~283 |
| 点击 | 1（仅 `/zh/` 首页） |
| 整体 CTR | ~0.35% |
| 平均排名 | ~51–65 |
| 已编入索引（8/5） | 150 |
| 未编入索引（8/5） | 80 |

**复盘结论**：站点处于极早期索引阶段。已有一定展示但 **CTR 几乎为零**。主要矛盾不是语种过多，而是 **SERP 标题/摘要与检索词不对齐**、**索引管道仍在爬坡**，以及 **devlogs 误获展示**。

---

## 2. 效果：高价值查询（有排名、低/无点击）

| 查询 | 展示 | 排名 | 对应页 |
|---|---|---|---|
| 限界収入 求め方 | 10 | 9.2 | `/ja/tools/how-to-calculate-marginal-revenue` |
| calcular roi | 10 | 77.9 | `/es/tools/how-to-calculate-roi` |
| wie ist meine ipv4 | 10 | 88.4 | `/de/tools/ip-address` |
| como calcular el roi | 4 | 81.5 | `/es/tools/how-to-calculate-roi` |
| was ist meine ip adresse | 4 | 86.25 | `/de/tools/ip-address` |
| sqft | 4 | 20.0 | `/es/tools/square-feet` 等 |
| how to calculate marginal revenue | 3 | 77.33 | `/tools/how-to-calculate-marginal-revenue` |
| pies cuadrados | 2 | 81.5 | `/es/tools/square-feet` |

**模式**：检索词多为「如何计算 / 是什么 / 计算器」类意图；排名进入前 10 的日语限界収入页仍 0 点击，说明 **snippet 与 query 匹配度** 是首要杠杆。

---

## 3. 效果：高展示页面

| URL | 展示 | 排名 |
|---|---|---|
| `/es/tools/square-feet` | 42 | 24.1 |
| `/de/tools/ip-address` | 39 | 89.3 |
| `/es/tools/how-to-calculate-roi` | 27 | 86.0 |
| `/tools/how-to-calculate-marginal-revenue` | 18 | 65.1 |
| `/pt/tools/how-to-calculate-roi` | 20 | 87.7 |
| `/ja/tools/how-to-calculate-marginal-revenue` | 15 | **8.8** |
| `/fr/tools/how-to-calculate-roi` | 15 | 85.4 |
| `/es/tools/how-to-calculate-bmi` | 14 | 35.8 |

**模式**：西语面积、德语 IP、西/葡 ROI 占展示大头；日语 MR 排名最好但无点击，属 **高优先级 CTR 异常**。

---

## 4. 设备与国家

### 设备

| 设备 | 展示 | 点击 | 排名 |
|---|---|---|---|
| 桌面 | 214 | 1 | 66.5 |
| 移动 | 68 | 0 | 27.4 |
| 平板 | 1 | 0 | 8.0 |

移动平均排名明显优于桌面，但均无点击 → title 前几词须在移动端即命中意图。

### 主要展示国家（Top 8）

| 国家/地区 | 展示 | 排名 |
|---|---|---|
| 美国 | 41 | 56.0 |
| 德国 | 40 | 75.5 |
| 西班牙 | 28 | 59.9 |
| 法国 | 23 | 69.0 |
| 瑞士 | 23 | 90.5 |
| 墨西哥 | 22 | 37.8 |
| 巴西 | 21 | 79.7 |
| 日本 | 19 | 25.0 |

与十语布局一致；**无数据支持「缩语种」**。

---

## 5. 索引（Coverage）

| 问题 | 数量 | 解读 |
|---|---|---|
| 备用网页（有适当的规范标记） | 43 | hreflang 语言变体，canonical 互指正常 |
| 网页会自动重定向 | 7 | 多为 `/en/` → 无前缀等预期行为 |
| 已发现 - 尚未编入索引 | 21 | 新站常见；需内链 + 时间 |
| 已抓取 - 尚未编入索引 | 6 | 抽查 IG 与 thin 信号 |
| devlogs 出现在效果报告 | 多篇 | robots Disallow 已有；需 noindex 部署生效 |

---

## 6. 本轮已执行改动（摘要）

> 细节见 [`03-todo.md`](./03-todo.md) 已勾选项；策略依据见 [`02-next-strategy.md`](./02-next-strategy.md)。

- 按 Top 查询优化 `en/ja/es/de/pt` 五语 **title + description**（边际收益、平方英尺、ROI、IP）
- 同步 `scripts/site/i18n.mjs` 首页卡片 title
- devlogs 生成 HTML 增加 `noindex`（待部署）

---

## 7. 待下轮对比的基准线

| 指标 | 本轮值 | 下轮目标（参考） |
|---|---|---|
| 总点击 | 1 | ≥5（28 天窗口） |
| 整体 CTR | 0.35% | ≥2% |
| ja MR 页 CTR | 0%（排名 8.8） | >0% |
| 未编入索引 | 80 | 下降或稳定后转「已编入」 |
| devlogs 展示 | >0 | 0 |
