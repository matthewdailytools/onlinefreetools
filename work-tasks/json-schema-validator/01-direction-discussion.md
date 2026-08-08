# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：用 JSON Schema（draft-07）校验一段 JSON，列出 JSON Pointer 路径与人话错误。
- 谁在什么任务里用：开发者 / AI 工程：粘贴 Schema + 模型或 API 输出，快速看契约是否通过。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 次要 | Tier 1：Ajv 浏览器构建；技术零件，但立项动机是场景桥 |
| **B** 场景桥接 | **主** | 输入 Schema+JSON → 通过/路径错误；B1 Agent 调试、B4 feed、B5 数据交换（卡片 A1） |
| **C** 行业专属 | 否 | 通用开发契约，非单一垂直岗位专属页 |

**选定主方向**：B  
**次要互链参考**：技术归开发者品类；Related → 已上线 `yaml-json`、`csv-json`（`ai-token-counter` 未上线不写死）

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL

## 方向专属检查

### 若选 B

- 场景链（从哪到哪）：模型/API/feed JSON → Schema 契约检查 → 修路径后再下游
- 上游 / 下游工具：上游 `yaml-json` / `csv-json`（转出 JSON）；下游代码、CI、再校验

## 结论

- 继续立项：是
- 建议 slug：`json-schema-validator`
- 与已上线工具关系：新建；Related 互指 yaml-json / csv-json
- 进入 `02-tool-info.md` 前仍缺的信息：无（对齐 per-tool A1）
