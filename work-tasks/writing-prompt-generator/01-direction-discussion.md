# 01 — 工具方向讨论

## 候选一句话

- 工具做什么：为写作场景（对白、角色、剧本、大纲）组装 Prompt 块，并提供 Random 种子模式；输出可粘贴到 ChatGPT / Gemini / Claude / DeepSeek。
- 谁在什么任务里用：小说/剧本/创意写作者——进页即用写作预设 + 随机灵感，文本默认留在设备。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** | 否 | 非纯技术转换 |
| **B** | **是** | B1 Prompt 工程：写作场景 + Random 控件 |
| **C** | 否 | 非 YMYL 计算 |

**选定主方向**：B  
**次要互链参考**：`prompt-template-builder`（通用四字段）、`chatgpt-export-to-markdown`

## 红线自检

- [x] 不是模型皮 doorway（ChatGPT/Gemini 各一页）
- [x] Random 与 Writing 同页 absorb（Planner S2+S3）
- [x] 本地主路径；不宣传 unlimited AI
- [x] 控件差：随机器 + 写作维度 ≠ S0 通用四字段默认态

## 结论

- 继续立项：是（**draft**，待 coverage 0b）
- 建议 slug：`writing-prompt-generator`
- Topic：`ai-prompt-template-builder`（hub 另 track）
- 进入 `02-tool-info.md` 前仍缺：coverage 0b 检索覆盖表
