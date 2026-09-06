# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：把一份 URL 列表里的公开网页，逐条抓 HTML、在本标签页转成 A4 PDF，成功项打成 ZIP 下载。
- 谁在什么任务里用：归档/合规/销售要一次存下多篇公开文档或帮助页，而不是反复打开单页转换器。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 是 | 复用 html2pdf.js + DOMPurify + 既有 URL 抓取 API；ZIP 用 fflate。Tier 1 库点击后已在页上（与邻页相同 vendor）。 |
| **B** 场景桥接 | 部分 | 输入是「多 URL」输出是「多 PDF/ZIP」，但是能力先于场景：没有独立行业规范。 |
| **C** 行业专属 | 否 | 无岗位专属行话或标准对照表。 |

**选定主方向**：A  
**次要互链参考**：`convert-html-to-pdf`（单页 HTML/URL）、`images-to-pdf`、`combine-files-into-one-pdf`

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体：主控件是 URL 列表 + 逐行状态表 + ZIP；邻页是单 HTML 编辑器 + 单 PDF
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端：复用已有 `GET /api/tools/convert-html-to-pdf`，不新开整站爬虫或付费打印集群
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL：单页 HTML 粘贴仍留在邻页；本页不接「整站 sitemap 全站导出」

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：html2pdf.bundle（含 html2canvas + jsPDF）、DOMPurify、fflate；URL 抓取与图片代理沿用 `src/tools/convertHtmlToPdf.ts`
- Tier：1（vendor 脚本；截图在用户点击「全部转换」后跑；进页样例用本地 HTML 占位，不自动打外网）
- CWV / 懒加载注意：库与邻页相同、已入库；批量串行转换，上限 10 条，避免并行撑爆内存

## 结论

- 继续立项：是
- 建议 slug：`batch-convert-web-pages-to-pdf`
- 与已上线工具关系：新建；Related 指向 `convert-html-to-pdf`。单条网页/粘贴 HTML **有意不满足**，FAQ 链出邻页
- 进入 `02-tool-info.md` 前仍缺的信息：无（Planner 无本 slug 直词，Ads 表标不适用）
- 用户意图审查（标 ready 前）：见 `02` 专节
