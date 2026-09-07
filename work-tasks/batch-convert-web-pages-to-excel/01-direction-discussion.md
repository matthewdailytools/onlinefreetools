# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：把公开网页（或粘贴的 HTML）里的 **HTML 表格**抽成可编辑 `.xlsx`：一条 URL 可多张表，一批 URL 进同一工作簿的多张工作表。
- 谁在什么任务里用：运营/分析把价目表、SKU 表、公告里的 HTML table 拉进 Excel 再算，而不是要打印件或截图。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 是 | 代抓 HTML + DOM 抽 `<table>` + 同域 SheetJS 写 xlsx；成熟度高 |
| **B** 场景桥接 | 部分 | 网页 → 表格文件，但是用现成解析能力，不是行业流程桥 |
| **C** 行业专属 | 否 | 无单一岗位规范 |

**选定主方向**：A  
**次要互链参考**（可选，非立项条件）：Word 页（段落）、PDF 批处理（打印）、csv-json（已有 CSV）

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（相对 JPG/PNG/PDF/Word 产物合同不同）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端（复用现有 `/api/tools/convert-html-to-pdf?url=`）
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL（html to excel / html table to excel / webpage to excel 同一映射）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：已入库 `public/vendor/xlsx/xlsx.full.min.js`（SheetJS）；DOMParser + DOMPurify
- Tier（0 / 1 / 2）：1（代抓边缘 + 本机组簿）
- CWV / 懒加载注意：xlsx 与 purify 按页加载；无 html2canvas；进页样例只解析两张本地表，不卡标签页

## 结论

- 继续立项：是
- 建议 slug：`batch-convert-web-pages-to-excel`
- 与已上线工具关系（增强 / 新建 / Related）：**新建**。Related：`convert-html-web-pages-to-word-document`、`csv-json`、`batch-convert-web-pages-to-pdf`
- 进入 `02-tool-info.md` 前仍缺的信息：无（Planner CSV 已在 `docs/seo/keywords/web-page/`）
- 用户意图审查（标 ready 前）：见 `02` 专节
