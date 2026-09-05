# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`json-diff-checker-online`  
**路径**：`/tools/json-diff-checker-online`  
**主方向**：A  
**YMYL**：否  

---

## IG 预审

- 目标主词：JSON diff checker online；json diff checker（头词不进 H1）；yaml/xml 有意不满足
- 用户真实任务：两份 JSON 看路径级语义差，默忽略键序。
- [x] 竞品：JSON Diff 站多把键序当差；前排已写 json diff checker。
- [x] 缺口：键序 vs 语义；数组按下标 vs 忽略顺序且保留重复项；非法 JSON。
- [x] 增益：默认忽略键序；路径列表；数组模式开关；FAQ 非法 JSON；Related schema/yaml。
- [x] 权威：https://www.json.org/json-en.html ；https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
- [x] Use cases：接口样例、配置快照、模型 JSON。
- [x] Example：`{"b":1,"a":2}` vs `{"a":2,"b":1}` 在默认模式下无差。
- [x] Related：json-schema-validator、yaml-json、text-diff

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 规则 | 规范化键序后路径 diff |
| 2 | 边界 | 非法 JSON、过大 |
| 4 | 对照 | 数组按下标 vs 忽略顺序（重复项仍计数） |
| 5 | 权威 | json.org、MDN JSON.parse |
| 6 | 隐私 | 粘贴留在设备 |
| 7 | 多语言 | 03 |
| 8 | 示例 | 进页样例 |
| 9 | 内链 | related ≥2 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Catalog `page.style` | opts |
| Title (en) / H1 | **JSON diff checker online** |
| Description 要点 | Paste two JSON values, compare by path, ignore key order by default. Process + example. Paste stays on the device and is not uploaded. Not YAML/XML. |
| FAQ | 键序？非法 JSON？数组忽略顺序的下标/重复项边界？YAML？ |
| related | json-schema-validator, yaml-json, text-diff |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-01 |
| slug 结论 | `json-diff-checker-online` 对齐选用长尾 |
| 主检索词 → title/H1 | **JSON diff checker online**（禁短头词 JSON Diff Checker） |
| 次要关键词 → desc / FAQ / Use cases | json compare / json diff checker → desc/FAQ 别称；yaml/xml → Related/FAQ 有意不满足 |
| 用户搜索习惯判断 | 要比对象值不是要比键的书写顺序 |
| 优化摘要 | H1 用带 online 的长尾；头词不进攻；默认忽略键序写入 Rules |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 已引用分析路径：`docs/seo/keywords/text-compare/2026-09-01-text-compare-topic.md`

| 长尾词（Planner） | 归属 | 文案落点 | 功能覆盖 | 不覆盖理由（若有） |
|---|---|---|---|---|
| json diff checker online | build 主词 | H1 | 两 JSON → 路径差 | |
| json compare diff / json diff checker | absorb | desc/FAQ | 同上 | 头词不进 H1 |
| yaml diff / xml diff | 有意不满足 | FAQ / Related | 不解析 | P2 另页 |

- [x] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-01 |
| 总判 | 满足：进页两份 JSON 已跑出路径差；键序默认忽略；有意不满足 YAML |
| 主词搜索者任务 | 看两份 JSON 语义差 |
| Ads/Planner 长尾任务 | 主词能办成 |
| 满足之处 | loadSample 同时展示“键序不同不报差”和“price 改值报告 `/price`” |
| 超出 / 应划边界 | 不做 YAML/XML 解析 |
| 缺口与已做优化 | How 先写贴两份 JSON |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：双栏 JSON textarea；开关「忽略键序」（默认开）；「忽略数组顺序（重复项仍计数）」默认关
- 输出：路径列表 added/removed/changed；关闭忽略键序后，同键不同顺序以合成路径 `/@key-order` 报告
- 核心：JSON.parse；无原型对象规范化后递归，避免 `__proto__` 等合法 JSON 键被继承属性吞掉；数组忽略顺序时排序但不去重、不按 `id` 配对
- 失败：非法 JSON 指出左右；过大软上限
- **进页样例**：自动 parse+diff
- **实现防呆**：opts；`\\w`

## 页面模块清单（与 tool-creation 对齐）

- [ ] 实现阶段再勾落地项
- [ ] `03-locale-briefs.md` 已填
