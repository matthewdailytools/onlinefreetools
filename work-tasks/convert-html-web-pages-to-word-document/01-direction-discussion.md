# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：把粘贴的 HTML 或公开网页转成 **可编辑 .docx**（标题、段落、列表、表格、链接映射为 Word 结构，不是截图）。
- 谁在什么任务里用：要把帮助页/公告改成可改的 Word 稿；不要打印 PDF，也不要栅格 PNG/JPG。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 是 | DOMPurify + `docx` 把 HTML 节点映射成 Document |
| **B** 场景桥接 | 次 | HTML/网页 → Word 是格式桥，但主增量是可编辑结构而非新岗位链 |
| **C** 行业专属 | 否 | 不是单一行业规范 |

**选定主方向**：A  
**次要互链参考**：`convert-html-to-pdf`、`turn-pdf-into-word-document`、`images-to-word`

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（相对 HTML→PDF：可编辑 Word；相对 PDF→Word：输入是 HTML/URL 不是 PDF；相对网页截图：不是栅格）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端（URL 代抓复用现有 API；docx 在标签页生成）
- [x] 长尾默认「一带多场景」：Planner `html to word` 与 `convert webpage to word` 同一 URL，Tab 切换输入，不拆 doorway

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：已入库 `docx` UMD + DOMPurify；HTML 走 DOMParser 映射 Heading/Paragraph/Table
- Tier（0 / 1 / 2）：1（Convert 时懒加载 `/vendor/docx/index.umd.js`）
- CWV / 懒加载注意：docx 点击后加载；样例用内置 HTML，可自动跑出真实 .docx 预览状态（无 html2canvas，进页可 `loadSample()`）

## 结论

- 继续立项：是
- 建议 slug：`convert-html-web-pages-to-word-document`（用户任务句；头词 html to word absorb，不另开 `/html-to-word`）
- 与已上线工具关系：新建；Related HTML→PDF、PDF→Word、多图转 Word
- 进入 `02-tool-info.md` 前仍缺的信息：无
- 用户意图审查（标 ready 前）：见 `02` 专节
