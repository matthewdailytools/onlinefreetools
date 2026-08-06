# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：在浏览器内把 Markdown 转成消毒后的 HTML（带预览/导出），或把粘贴的 HTML 转成可读 Markdown；同页切换方向。
- 谁在什么任务里用：写作者/文档作者从 MD 出静态 HTML；开发者/编辑从网页或 CMS 导出的 HTML 收回 Markdown；AI 工作流里清理粘贴的富文本为 MD。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | 文档 A.1 明确：「Markdown → HTML（已有）」+「HTML → Markdown / `turndown` / 可与现有页双向合并」；成熟度 ✅✅✅；Tier 1 |
| **B** 场景桥接 | 弱 | 「文档互转」在方向文档场景链有提及，但核心是格式能力工具，不必挂主方向 B |
| **C** 行业专属 | 否 | 非单一垂直行话；避免做成「又一个 converter 超市」换皮 |

**选定主方向**：A  
**次要互链参考**（可选，非立项条件）：`text-diff`（转换前后对照）、`website-headers` / `ip-address`（现有开发者链）

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（真实双向交互 + 规则/边界/示例）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端（纯客户端；库可 CDN 加载）
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL（**明确拒绝**单独 `/tools/html-to-markdown` 薄页）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：非常成熟；MD→HTML 继续 `marked` + `DOMPurify`；HTML→MD 用 `turndown`（见 [JS 工具包调研](../../docs/2026-07-09-js-tool-packages-survey.md)）；与卡片 [B7](../../docs/2026-07-28-per-tool-dev-seo-plans.md) 一致
- Tier（0 / 1 / 2）：**Tier 1**（`turndown` 小体积；可与现有 CDN 脚本一并或按方向懒加载）
- CWV / 懒加载注意：超大 HTML 粘贴主线程可能卡顿 → 软上限 + FAQ；首屏勿堆额外大包；HTML→MD 方向可在切 Tab / 首次粘贴时再加载 `turndown`

### 若选 B

- （不适用为主方向）

### 若选 C

- （不适用）

## 结论

- 继续立项：是
- 建议 slug：`markdown-to-html`（**增强现有页**，Tab：MD→HTML | HTML→MD）
- 与已上线工具关系：**增强**已上线页；Related 保持开发者链（`text-diff`、`website-headers` 等）
- 进入 `02-tool-info.md` 前仍缺的信息：无（合并策略与包选型已在文档与用户原话中明确）
