# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：把一份 URL 列表里的公开网页，按选定视口宽度截成 JPEG（整页或首屏），成功项打成 ZIP 下载。
- 谁在什么任务里用：要给聊天/工单/演示贴图、或要对照桌面 vs 手机首屏，而不是要可打印的 A4 PDF。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 是 | 复用既有 URL 抓取 API + DOMPurify + html2canvas → JPEG；ZIP 用 fflate。与 PDF 批处理共享抓取，但输出管线不同（无 jsPDF 分页）。 |
| **B** 场景桥接 | 部分 | 输入是「多 URL」输出是「多 JPEG/ZIP」，能力先于场景。 |
| **C** 行业专属 | 否 | 无岗位专属标准对照表。 |

**选定主方向**：A  
**次要互链参考**：`batch-convert-web-pages-to-pdf`（同列表、A4 文档）、`pdf-to-jpg`（已有 PDF 文件→图）

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体：产物是一张（或首屏）JPEG，不是 A4 多页 PDF；首屏有视口宽度 + JPEG 质量 + 整页/首屏，这些会改变像素布局与文件体积
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端：复用 `GET /api/tools/convert-html-to-pdf?url=`，不新开爬虫或云端截图农场
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL：Planner「webpage to jpg / url to jpg」单条仍可在本页贴一行完成；不另开 doorway 单 URL 页

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：html2canvas（vendor 已入库）、DOMPurify、fflate；URL 抓取沿用 convert-html-to-pdf Worker
- Tier：1（点击后加载；进页不自动跑 html2canvas，避免标签页假死）
- CWV / 懒加载注意：串行上限 10；画布边长 cap 8192；样例仅点击「载入样例」才转

## 与邻页的 Information Gain / 差异性（必须落地）

| 邻页 | 作业 | 本页差异（控件 + 产物，不只文案） |
|---|---|---|
| `batch-convert-web-pages-to-pdf` | URL 列表 → **A4 分页 PDF** → ZIP | 本页：html2canvas **整页/首屏栅格** → JPEG；**视口宽** 1280/768/390；**JPEG 质量**；无 jsPDF 分页 |
| `convert-html-to-pdf` | 粘贴 HTML **或一条 URL** → 一份 PDF | 本页：多 URL 队列 + JPEG ZIP；不提供 HTML 编辑器 |
| `pdf-to-jpg` | 已有 **PDF 文件** → JPG | 本页输入是网页 URL，不是 PDF 上传 |
| `bulk-convert-images-to-jpg` | 已有 **图片文件** → JPG | 本页输入是网页，不是本地图 |

缺口（SERP 单 URL 截图站常不讲清）：① 批量失败是否整批作废；② 桌面宽度 vs 手机宽度会换布局；③ 整页长图 vs 首屏；④ JPEG 质量与体积；⑤ 和「网页转 PDF」不是同一产物。

## 结论

- 继续立项：是
- 建议 slug：`batch-convert-web-pages-to-jpg`
- 与已上线工具关系：新建；Related 指向 PDF 批处理与 `pdf-to-jpg`
- 进入 `02-tool-info.md` 前仍缺的信息：无（Planner「Webpage Jpg / url to jpg」长尾须 absorb）
- 用户意图审查（标 ready 前）：见 `02` 专节
