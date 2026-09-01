# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

立项：SVG 优化器 — 粘贴/拖放 SVG，浏览器内轻量优化（SVGOMG 式选项芯片 + 优化前后字节对比 + 预览 + 复制/下载）。纯客户端 JS，不依赖 npm svgo。localProcessing: true。page.style: opts。

## 已知约束（若有）

- 必须本地处理：是（SVG 文本/文件不出浏览器）
- YMYL：否
- 优先语言：十语（母版 en）
- DOM 前缀：`svo`
- i18n 前缀：`tool_svg_optimizer`
- 相关工具（仅 live）：`image-optimizer`、`html-entity`
- 无 Keyword Planner → Ads 表不适用
- 参考：Jake Archibald SVGOMG / SVGO 文档

## 建议 slug（可空，由讨论阶段拟定）

- `svg-optimizer`（已确认）
