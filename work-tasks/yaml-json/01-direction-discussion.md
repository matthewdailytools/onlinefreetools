# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：在浏览器内把 YAML 与 JSON 双向互转（即时预览、复制/下载、可读错误行号）；同页切换方向。
- 谁在什么任务里用：开发者/运维把 K8s·Compose·CI 的 YAML 配成给程序/API 用的 JSON，或把 JSON 响应写回可读 YAML 配置；数据/AI 流水线里做格式桥接。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 强（技术零件） | A.1 明确 `js-yaml`、Tier 1、成熟度 ✅✅✅；是实现底座，不是本工具叙事主轴 |
| **B** 场景桥接 | **是（主）** | 方向文档 B「配置互通」1→1 桥；卡片 A4 主方向标 **B**（场景 B2/B5）；输入 YAML/JSON → 输出对侧格式，上下游清晰 |
| **C** 行业专属 | 否 | 非单一垂直行话工具；避免做成「又一个 converter」换皮超市 |

**选定主方向**：B  
**次要互链参考**（可选，非立项条件）：技术归 A.1 文本品类；Related 暂用已上线 `markdown-to-html`、`text-diff`（卡片目标链含未来 `json-schema-validator` / `csv-json`）

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（真实双向交互 + 类型规则/多文档/往返损失说明）
- [x] 不是无增量机翻铺量（十语走 locale brief + ≥3 轮）
- [x] 不依赖偏离定位的重后端（纯客户端；`js-yaml` Tier 1 动态 import）
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL（**拒绝**单独 `/tools/json-to-yaml` 或「kubernetes yaml to json」空壳页）

## 方向专属检查

### 若选 A

- （技术备注，非主方向）成熟度 ✅✅✅；包 `js-yaml`；Tier 1；超大粘贴软上限 + FAQ；库按首次交互懒加载

### 若选 B

- 场景链（从哪到哪）：**人工可读配置 YAML** ↔ **程序/API 消费的 JSON**（含：K8s/Compose/CI 清单 → JSON；API/LLM 输出 JSON → 可编辑 YAML）
- 上游 / 下游工具：上游粘贴配置或 API JSON；下游复制进代码/CI/校验器；Related：`markdown-to-html`（文档格式链）、`text-diff`（转换前后对照）；上线后补 `json-schema-validator`、`csv-json`

### 若选 C

- （不适用）

## 结论

- 继续立项：是
- 建议 slug：`yaml-json`（路径 `/tools/yaml-json`；双向同页，不拆反向 URL）
- 与已上线工具关系：**新建**；Related 挂开发者/文本链（`markdown-to-html`、`text-diff`）
- 进入 `02-tool-info.md` 前仍缺的信息：无（包选型、slug、主方向 B、合并策略已在方向文档与卡片 A4 明确）
