# 01 — 工具方向讨论

## 候选一句话

- 工具做什么：把自由 Prompt 文本（和/或 Role / Task / Constraints / Output 字段）整理成可复用的结构化 Prompt 模板；输出 Markdown 或 JSON。
- 谁在什么任务里用：AI 应用开发者、Prompt 工程师——固化角色/任务/约束，文本不出设备；不调用任何模型 API。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** | 技术 | 纯客户端规则拆分与格式化 |
| **B** | **是** | B1 Agent/Prompt 工程：自由文本 → 结构化模板 |
| **C** | 否 | 非 YMYL 计算 |

**选定主方向**：B  
**次要互链参考**：`chatgpt-export-to-markdown`（导出归档）、`json-schema-validator`（输出结构校验）

## 红线自检

- [x] 不是「AI 写 Prompt」生成器（无模型调用）
- [x] 不按输出格式拆近义 URL（Markdown / JSON 为芯片）
- [x] 本地处理；隐私句须「留在设备 + 不上服务器」
- [x] 一带多：自由文本轻量分段 + 可选字段表单

### 若选 B

- 场景链：草稿 Prompt → 结构化模板 → 复制/下载 → 可选用 json-schema-validator 校验输出 JSON
- 上游 / 下游：`chatgpt-export-to-markdown`（归档对话后再提炼模板）

## 结论

- 继续立项：是
- 建议 slug：`prompt-template-builder`
- 与已上线工具关系：新建；Related chatgpt-export-to-markdown + json-schema-validator
- 进入 `02-tool-info.md` 前仍缺的信息：无
- 用户意图审查（标 ready 前）：见 `02` 专节
