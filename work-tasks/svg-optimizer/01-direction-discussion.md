# 01 — 方向讨论

**slug**：`svg-optimizer`  
**主方向**：**D**（设计师 / 矢量资产优化）  
**日期**：2026-09-01

---

## 方向对照

| 方向 | 是否选用 | 说明 |
|---|---|---|
| A 转换/编解码 | 否 | 不是格式互转；核心是 SVG 文本瘦身 |
| B 语料/归档 | 否 | 不解析对话或结构化导出 |
| C SEO 站长 | 否 | 非 meta/sitemap 类 |
| **D 设计师簇** | **是** | 对标 SVGOMG：选项可视化 + 体积反馈 + 预览 |

## 红线

- 不拆近义 URL（minify svg / compress svg 并入本页 FAQ/Use cases）
- 不用 npm svgo 依赖；轻量纯 JS 优化管线即可
- 不上传 SVG 到服务器；localProcessing true
- 不与 `image-optimizer` 抢 raster 优化 intent

## 增量（相对 SERP）

- 进页即样例 + 字节对比 + 预览（SVGOMG 式反馈）
- 选项芯片默认全开（注释/元数据/空白/小数/空 g）
- 十语 privacy：留在设备 + 不上服务器
- Related：`image-optimizer`（栅格优化）、`html-entity`（实体清理邻域）

## 结论

单 slug `svg-optimizer`；H1 **SVG optimizer**（各语按 brief 重写）；进入 `02` 清单前覆盖。
