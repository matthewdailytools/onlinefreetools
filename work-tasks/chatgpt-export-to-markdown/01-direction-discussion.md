# 01 — 工具方向讨论

## 候选一句话

- 工具做什么：把 ChatGPT（及 Claude）对话导出 JSON/粘贴文本 → **Markdown**（默认）；可选规范化 JSON / CSV。
- 谁在什么任务里用：研究者、Prompt 工程师、RAG 数据准备——归档对话语料，文件不出设备。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** | 技术 | 纯 JS 解析 |
| **B** | **是** | B2 对话语料归档：导出 → MD/JSON/CSV |
| **C** | 否 | |

**选定主方向**：B  
**次要互链参考**：`yaml-json`、`markdown-to-html`（已上线）；勿链 `ai-token-counter`（P2 defer）

## 红线自检

- [x] 不是旧 slug `chat-export-converter` 换皮空壳（场景句 H1）
- [x] 不按 Claude / CSV 拆近义 URL
- [x] 本地；导出含对话正文，隐私句须「留在设备 + 不上服务器」
- [x] 一带多：Claude 格式、JSON/CSV 输出芯片

### 若选 B

- 场景链：ChatGPT/Claude 导出文件或粘贴 → Markdown 归档 → 可选再进 yaml-json / markdown 预览
- 上游 / 下游：`yaml-json`、`markdown-to-html`、`csv-json`

## 结论

- 继续立项：是
- 建议 slug：`chatgpt-export-to-markdown`
- 与已上线工具关系：新建；Related yaml-json + markdown-to-html
- 进入 `02-tool-info.md` 前仍缺的信息：无
- 用户意图审查（标 ready 前）：见 `02` 专节
