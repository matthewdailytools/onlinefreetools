# 01 — 方向讨论

**计划 slug**：`wcag-contrast-checker`  
**主方向**：**A**（颜色/对比度技术零件；设计师簇叙事见方向文档专题 D）  
**对照**：`docs/2026-07-28-tool-direction.md` A.9 / 专题 D.1 P0

## 为何是 A

- 输入前景/背景色 → 输出对比度比率与 WCAG AA/AAA 判定；纯浏览器公式，无场景合同交付包。
- 不挂 B（非 1→N 平台规格 ZIP）；不挂 C（非行业计算器）。

## 红线

- 不做 doorway「AA checker / AAA checker」分 URL。
- Rules 须写清相对亮度与比率阈值；References 链 W3C WCAG。
- 粘贴/取色本地计算，不上传。

## 与同簇关系

- Related：`brand-color-token-pack`、`color-from-image`（设计类互链）。
