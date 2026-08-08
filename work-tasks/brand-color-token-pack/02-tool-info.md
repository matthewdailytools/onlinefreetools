# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`brand-color-token-pack`  
**路径**：`/tools/brand-color-token-pack`  
**主方向**：A（+1→N 色阶）  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`

---

## IG 预审

- 目标主词 / 长尾意图：
  1. brand color palette generator / color tokens
  2. hex to hsl oklch
  3. tailwind color scale 50-950（→ 色阶区，不拆「仅 tailwind」薄页）
  4. accessible text on brand color（→ 对比配对）
  5. css variables brand colors（→ 导出）
- 用户真实任务：输入品牌主色，得到多色彩空间写法、50–950 色阶，以及每档黑/白文字对比建议，可复制 CSS 变量。
- [x] 竞品：Coolors / uicolors 色阶与导出；常缺 OKLCH 说明与 WCAG 阈值表。
- [x] 缺口：① 色阶如何混合未写清 ② OKLCH 与 HEX 关系 ③ 每档对比配对 ④ 与对比度页互链弱 ⑤ 十语
- [x] 增益：Rules 色阶混合 + 色彩空间；边界非法 HEX；Use cases 设计系统/暗色/导出；W3C + CSS Color；本地；进页样例；related
- [x] 不拆仅 HEX 转换 URL
- [x] 权威：WCAG contrast；https://www.w3.org/TR/css-color-4/ ；可选 OKLCH 说明
- [x] Related：`wcag-contrast-checker`，`color-from-image`

### §3.1：①②③⑤⑥⑧⑨

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | C08 · P0 |
| 场景 | 品牌主色 → token 包（多空间 + 色阶 + 对比） |
| 技术 | Tier 0；纯 JS；OKLCH 自实现 sRGB→OKLab |
| Title (en) | `Brand Color Token Pack — HEX HSL OKLCH Scale \| {Brand}` |
| Description | one base → spaces + 50–950 + contrast pairs + CSS vars；sample blue；local |
| related | wcag-contrast-checker, color-from-image |
| category | design |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-08 |
| slug 结论 | 保留 `brand-color-token-pack`（方向文档定稿；覆盖 brand/token/pack 意图，避免 `color-converter` 薄意图） |
| 主检索词 → title | Brand Color Token Pack / HEX HSL OKLCH Scale |
| 次要 | palette/scale → 色阶；accessible → 对比列；css variables → 导出按钮/FAQ |
| 用户习惯 | 英文 “color palette generator / tailwind colors from hex”；中文「品牌色色板 / 色阶」 |
| 优化摘要 | Title 含多空间+Scale；避免「参数枚举」；desc 写 1→N 步骤与样例 |
| [x] 已回写 | |

## 交互规格

- 输入：主色 color + HEX
- 输出：HEX/RGB/HSL/OKLCH；色阶 50–950 色块；每档推荐文字色（黑/白）及比率；Copy CSS / Copy JSON
- 色阶：以 500≈主色，向白/黑线性混合（文档写清）
- **进页样例**：`#2563eb`，自动 Generate，展示色阶与对比列

## 页面模块清单

- [x] 全模块 + 进页自动样例
