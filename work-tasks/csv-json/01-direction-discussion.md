# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：在浏览器内把 CSV（含 TSV / 分号分隔）与 JSON 双向互转；同页切换方向、即时预览、复制/下载、可读错误提示，并把「类型推断 / 分隔符 / 引号转义 / 表头 / 嵌套扁平化」这些坑讲清楚。
- 谁在什么任务里用：开发者 / 电商运营 / 数据分析把 Excel 导出的产品表（SKU/title/price）转成 API 要的 JSON 数组，或把接口/工具返回的 JSON 转回 CSV 给表格软件与商品 feed 使用。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 强（技术零件） | 方向文档 A 候选明确 `papaparse` + `csv-stringify`、Tier 1、"类型推断需说明"；是实现底座，非叙事主轴 |
| **B** 场景桥接 | **是（主）** | 方向文档 B「表数据互通」`csv-json`（场景 B2/B4）；表格数据 ↔ 程序/API JSON 的 1→1 桥，上下游清晰（Excel/feed ↔ API/脚本） |
| **C** 行业专属 | 否 | 非单一垂直行话工具；电商 feed 作为**主打场景**写入 Use cases，而非拆成行业专页 |

**选定主方向**：B  
**次要互链参考**（可选，非立项条件）：技术归 A 文本/数据品类；Related 用已上线 `yaml-json`、`text-diff`（未来 `json-schema-validator` 上线后加入，卡片目标 related → yaml-json / schema）

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（真实双向交互 + 类型推断/分隔符/引号/嵌套扁平化对照与边界说明）
- [x] 不是无增量机翻铺量（十语走 locale brief + ≥3 轮）
- [x] 不依赖偏离定位的重后端（纯客户端；`papaparse` Tier 1 动态 import；导出可用 `papaparse.unparse` 或 `csv-stringify`）
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL（**拒绝** `/tools/json-to-csv`、`/tools/excel-to-json`、`/tools/tsv-to-json` 空壳页；用 Tab + Use cases + FAQ 覆盖）

## 方向专属检查

### 若选 A

- （技术备注，非主方向）成熟度 ✅✅✅；包 `papaparse`（解析 + `unparse` 反向），可选 `csv-stringify`；Tier 1；超大粘贴/上传软上限 + 可切「手动 Convert」；库按首次交互懒加载（CWV）

### 若选 B

- 场景链（从哪到哪）：**表格数据（Excel/CSV/TSV）** ↔ **程序/API 消费的 JSON**（含：产品 feed CSV → JSON 数组给 API；接口/导出 JSON → CSV 回表格 / Merchant feed）
- 上游 / 下游工具：上游为电子表格导出、数据库导出、API 响应；下游进代码 / 校验器 / 表格软件。Related：`yaml-json`（配置/数据格式互通链）、`text-diff`（转换前后逐行对照）；上线后补 `json-schema-validator`（校验转出的商品 JSON 字段）

### 若选 C

- （不适用）

## 结论

- 继续立项：是
- 建议 slug：`csv-json`（路径 `/tools/csv-json`；双向同页，不拆反向 URL）
- 与已上线工具关系：**新建**；Related 挂数据/开发者链（`yaml-json`、`text-diff`）
- 进入 `02-tool-info.md` 前仍缺的信息：无（包选型 `papaparse`、slug、主方向 B、合并策略、示例列 SKU/title/price 已由方向文档卡片 B2 明确）
