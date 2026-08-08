# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`wcag-contrast-checker`  
**路径**：`/tools/wcag-contrast-checker`  
**主方向**：A  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`

> IG 依据：策略文档 §3.1 / §3.8。对齐方向文档专题 D.1。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. wcag contrast checker / contrast ratio calculator
  2. color contrast accessibility AA AAA
  3. foreground background contrast
  4. large text contrast 3:1（→ Rules，不拆页）
  5. suggest accessible color pair（→ 结果区建议，不拆页）
- 用户真实任务：选前景/背景色，立刻看到比率与 AA/AAA（普通字/大字）是否通过，并可交换或采用建议配对。
- [x] 竞品：双色选择器、比率、Pass/Fail 徽章、部分建议色、部分仅英文。
- [x] 缺口：① 相对亮度公式一笔带过 ② 大字阈值与字号关系不清 ③ 失败时无「调哪一侧」建议 ④ 十语检索向正文少 ⑤ 与品牌色阶工具脱节
- [x] 增益：① Rules 相对亮度+阈值表 ② 边界：非法 HEX、同色、半透明说明 ③ Use cases UI/正文/按钮 ⑤ W3C WCAG 2.2 ⑥ 本地 ⑧ 进页样例出真实比率 ⑨ related ≥2
- [x] 长尾合并本页，不拆 AA/AAA URL。
- [x] 权威：https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum/ 、https://www.w3.org/TR/WCAG22/ 、https://www.w3.org/TR/WCAG22/#dfn-relative-luminance
- [x] Use cases：UI 正文、按钮/标签、暗色模式校对
- [x] 边界：非法 HEX；fg=bg；仅不透明 sRGB（本页不解析 alpha）
- [x] Example：#767676 on #ffffff ≈ 4.54:1 → AA 普通字过、AAA 普通字不过
- [x] Related：`brand-color-token-pack`，`color-from-image`

### §3.1 维度

| # | 维度 | 体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：相对亮度与 (L1+0.05)/(L2+0.05) |
| 2 | 边界/失败 | FAQ + 非法 HEX |
| 3 | 场景 | Use cases ×3 |
| 5 | 权威 | W3C WCAG 2.2 |
| 6 | 本地隐私 | How/FAQ |
| 8 | 数值示例 | Example + 进页样例 |
| 9 | 内链 | related ≥2 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C08 · P0 · 设计师簇 |
| 场景 | 设计师/前端：前景×背景 → 比率 + AA/AAA |
| 技术 | Tier 0；纯 JS sRGB 相对亮度；无 CDN |
| Title (en) | `WCAG Contrast Checker — AA/AAA Ratio Online \| {Brand}` |
| Description | contrast ratio + AA/AAA normal/large + sample #767676/#fff；local；≥120 |
| Schema | WebApplication + BreadcrumbList；category design |
| FAQ | 阈值；大字；是否上传；建议色；与 token 页关系 |
| related | brand-color-token-pack, color-from-image |
| 验收 | lint:seo；isolation；进页样例出比率 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-08 |
| slug 结论 | 保留 `wcag-contrast-checker`（检索含 WCAG + contrast checker；比 `color-contrast` 更具体且对标方向文档） |
| 主检索词 → title/H1 | WCAG Contrast Checker / AA/AAA Ratio |
| 次要关键词 | contrast ratio → Rules；large text → FAQ；accessible colors → 建议区/Use cases |
| 用户搜索习惯 | 英文常搜 “wcag contrast checker / contrast ratio”；中文「对比度检测 / WCAG 对比度」 |
| 优化摘要 | Title 强调 AA/AAA + Ratio，避免参数枚举；desc 含步骤与样例色 |
| [x] 已回写 SEO 卡片 Title / Description 与 slug | |

## 交互规格

- 输入：前景/背景 `type=color` + HEX 文本；Swap
- 输出：比率（保留 2 位）、AA/AAA×普通/大字 Pass/Fail、预览区、建议配对（提亮/压暗一侧使达 AA）
- 操作：Check / Load sample / Swap / Copy summary / Clear
- 算法：sRGB→线性→相对亮度 L；ratio=(Lmax+0.05)/(Lmin+0.05)；阈值 4.5 / 3 / 7 / 4.5
- **进页样例**：`#767676` / `#ffffff`，自动 Check，结果区显示真实比率与徽章

## 页面模块清单

- [x] H1 + 摘要
- [x] 首屏交互（进页自动样例）
- [x] How / Rules / Example / Use cases / FAQ / Related / References
