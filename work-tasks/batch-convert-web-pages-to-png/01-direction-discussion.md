# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：把多条公开网页按选定视口截成 **无损 PNG**（可透明底、1×/2× 倍率），成功项打 ZIP。
- 谁在什么任务里用：UI/设计评审、需要锐利文字与控件边的界面归档；不要 JPEG 块效应，也不要 A4 打印件。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 是 | html2canvas → `image/png`；透明底与 scale 是可讲清的规则 |
| **B** 场景桥接 | 次 | URL 列表 → PNG ZIP，但是增量来自格式合同而非新场景链 |
| **C** 行业专属 | 否 | 不是单一行业规范工具 |

**选定主方向**：A  
**次要互链参考**：`batch-convert-web-pages-to-jpg`、`batch-convert-web-pages-to-pdf`

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（相对 JPG：无损 + 透明底 + 像素倍率，无 JPEG 质量滑条）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端（复用现有 HTML 代抓 API）
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL（webpage to png absorb，不拆单 URL 页）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：html2canvas + DOMPurify + fflate；同 JPG 管线，导出 MIME 改为 PNG
- Tier（0 / 1 / 2）：1（点击后用已入库 `/vendor/html2canvas`）
- CWV / 懒加载注意：进页不自动 `loadSample()`（html2canvas 会卡住标签页）

## 结论

- 继续立项：是
- 建议 slug：`batch-convert-web-pages-to-png`
- 与已上线工具关系：新建；Related JPG（有损聊天贴图）与 PDF（A4 分页）；不吸收 `bulk-convert-images-to-png`（输入是本地图）
- 进入 `02-tool-info.md` 前仍缺的信息：无
- 用户意图审查（标 ready 前）：见 `02` 专节
